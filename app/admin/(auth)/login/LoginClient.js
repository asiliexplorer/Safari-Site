// app/admin/login/LoginClient.js
'use client';

import { useFormState } from 'react-dom';
import { loginAction } from '@/actions/admin';

export default function LoginClient() {
  const [state, formAction] = useFormState(loginAction, { error: null });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form action={formAction} className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl mb-4 font-bold">Admin Login</h2>
        
        {state?.error && (
          <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
            {state.error}
          </div>
        )}
        
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full p-2 border rounded"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            className="w-full p-2 border rounded"
            required
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}