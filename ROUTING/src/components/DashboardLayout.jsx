import { Link, Outlet } from 'react-router-dom';

export default function DashboardLayout() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Dashboard</h1>
      
      {/* Dashboard Sub-navigation */}
      <div style={{ margin: '1rem 0' }}>
      </div>
      
      <hr />

      {/* The Outlet renders the child routes (/profile or /settings) here */}
      {/* If strictly on /dashboard, Outlet remains empty as requested */}
      <div style={{ marginTop: '1rem' }}>
        <Outlet />
      </div>  
    </div>
  );
}
