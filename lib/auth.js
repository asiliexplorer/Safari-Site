// lib/auth.js
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import supabase from '@/lib/db';
import bcrypt from 'bcrypt';
import { randomBytes } from 'crypto';

const SESSION_COOKIE_NAME = 'admin_session';
const SESSION_DURATION = 24 * 60 * 60; // 1 day

function generateSessionId() {
  return randomBytes(32).toString('hex');
}

export async function loginAdmin(username, password) {
  try {
    const { data: admin, error } = await supabase
      .from('admins')
      .select('id, password_hash')
      .eq('name', username)
      .single();

    if (error || !admin) return false;

    const adminId = admin.id;
    const isValid = await bcrypt.compare(password, admin.password_hash);
    if (!isValid) return false;

    const sessionId = generateSessionId();
    const expiresAt = new Date(Date.now() + SESSION_DURATION * 1000);

    // Store session in database
    const { error: insertError } = await supabase
      .from('sessions')
      .insert({ admin_id: adminId, session_id: sessionId, expires_at: expiresAt });

    if (insertError) throw insertError;

    // Set cookie — ✅ path: '/' so it works for /api/admin/*
    (await cookies()).set(SESSION_COOKIE_NAME, sessionId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: SESSION_DURATION,
      path: '/',           // ✅ CRITICAL FIX
      sameSite: 'strict',
    });

    return true;
  } catch (err) {
    console.error('Login error:', err);
    return false;
  }
}

export async function logoutAdmin() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get(SESSION_COOKIE_NAME)?.value;

  // Delete session from database
  if (sessionId) {
    try {
      await supabase
        .from('sessions')
        .delete()
        .eq('session_id', sessionId);
    } catch (err) {
      console.error('Error deleting session:', err);
    }
  }

  // Clear cookie — ✅ path must match login
  cookieStore.set(SESSION_COOKIE_NAME, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',            // ✅ same as login
    maxAge: 0,
    expires: new Date(0),
  });

  redirect('/admin/login');
}

// Shared session verification logic (used by both page and API)
async function verifySession() {
  try {
    const sessionId = (await cookies()).get(SESSION_COOKIE_NAME)?.value;
    if (!sessionId) return false;

    const { data, error } = await supabase
      .from('sessions')
      .select('id')
      .eq('session_id', sessionId)
      .gt('expires_at', new Date().toISOString())
      .single();

    return !error && data;
  } catch (err) {
    console.error('Session verification error:', err);
    return false;
  }
}

// ✅ For use in Page/Server Components (redirects on failure)
export async function requireAdmin() {
  const isValid = await verifySession();
  if (!isValid) {
    redirect('/admin/login');
  }
}

// ✅ For use in API Routes (returns boolean — never redirects)
export async function isAdminAuthenticated() {
  return await verifySession();
}