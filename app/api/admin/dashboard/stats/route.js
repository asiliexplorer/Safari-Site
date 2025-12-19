import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import supabase from '@/lib/db'; // ← changed to supabase

export async function GET() {
  try {
    const session = await getServerSession();
    
   

    // Helper to avoid repeating supabase queries
    async function query(text, params) {
      // For Supabase, we'll use direct queries
      return supabase.from(text.split(' ')[0]).select(text.split('SELECT ')[1].split(' FROM')[0]);
    }

    // Now use `query` as a local function
    const { data: packageData, error: packageError } = await supabase
      .from('packages')
      .select('is_draft, status, availability');

    if (packageError) throw packageError;

    // Calculate stats in JavaScript
    const packageStats = [{
      total: packageData.length,
      published: packageData.filter(p => !p.is_draft && (p.status === 'published' || !p.status)).length,
      drafts: packageData.filter(p => p.is_draft).length,
      archived: packageData.filter(p => !p.availability).length
    }];

    const { data: proposalData, error: proposalError } = await supabase
      .from('proposals')
      .select('status, budget');

    if (proposalError) throw proposalError;

    // Calculate proposal stats in JavaScript
    const totalRevenue = proposalData.reduce((sum, p) => sum + (p.budget || 0), 0);
    const proposalStats = [{
      total: proposalData.length,
      new_count: proposalData.filter(p => p.status === 'new').length,
      contacted: proposalData.filter(p => p.status === 'contacted').length,
      responded: proposalData.filter(p => p.status === 'responded').length,
      closed: proposalData.filter(p => p.status === 'closed').length,
      total_revenue: totalRevenue,
      active_proposals: proposalData.filter(p => ['new', 'contacted'].includes(p.status)).length
    }];

    const { data: responseRawData, error: responseError } = await supabase
      .from('proposals')
      .select('created_at, updated_at')
      .eq('status', 'responded')
      .not('updated_at', 'is', null)
      .not('created_at', 'is', null);

    if (responseError) throw responseError;

    // Calculate average response time in JavaScript
    const avgResponseDays = responseRawData.length > 0
      ? responseRawData.reduce((sum, p) => {
          const created = new Date(p.created_at);
          const updated = new Date(p.updated_at);
          return sum + (updated - created) / (1000 * 60 * 60 * 24);
        }, 0) / responseRawData.length
      : 0;

    const responseTimeData = [{ avg_response_days: avgResponseDays }];

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();
    const previousMonth = currentMonth === 1 ? 12 : currentMonth - 1;
    const previousYear = currentMonth === 1 ? currentYear - 1 : currentYear;

    const { count: currentCount } = await supabase
      .from('proposals')
      .select('*', { count: 'exact', head: true })
      .gte('created_at', `${currentYear}-${String(currentMonth).padStart(2, '0')}-01`)
      .lt('created_at', `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-01`);

    const { count: previousCount } = await supabase
      .from('proposals')
      .select('*', { count: 'exact', head: true })
      .gte('created_at', `${previousYear}-${String(previousMonth).padStart(2, '0')}-01`)
      .lt('created_at', `${previousYear}-${String(previousMonth + 1).padStart(2, '0')}-01`);

    const monthlyGrowthData = { current_count: currentCount, previous_count: previousCount };

    const { data: activityRawData, error: activityError } = await supabase
      .from('proposals')
      .select('activities')
      .not('activities', 'is', null);

    if (activityError) throw activityError;

    // Calculate popular activities in JavaScript
    const activityCount = {};
    activityRawData.forEach(p => {
      if (p.activities && Array.isArray(p.activities)) {
        p.activities.forEach(activity => {
          activityCount[activity] = (activityCount[activity] || 0) + 1;
        });
      }
    });

    const popularActivities = Object.entries(activityCount)
      .map(([activity, count]) => ({ activity, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);

    const totalProposals = proposalStats[0].total;
    const respondedProposals = proposalStats[0].responded;
    const conversionRate = totalProposals > 0 ? Math.round((respondedProposals / totalProposals) * 100) : 0;

    const monthlyGrowth = previousCount > 0
      ? Math.round(((currentCount - previousCount) / previousCount) * 100)
      : (currentCount > 0 ? 100 : 0);

    const stats = {
      packages: packageStats[0],
      proposals: proposalStats[0],
      metrics: {
        totalRevenue: parseInt(proposalStats[0].total_revenue) || 0,
        conversionRate,
        activeProposals: proposalStats[0].active_proposals || 0,
        monthlyGrowth,
        avgResponseTime: Math.round(responseTimeData[0]?.avg_response_days) || 0
      },
      popularActivities: popularActivities.map(row => ({
        activity: row.activity,
        count: parseInt(row.count)
      }))
    };

    return NextResponse.json(stats);
    
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}