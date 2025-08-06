import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Welcome to the Onboarding App</h1>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '40px' }}>
        <Link to="/api/auth">User OnBoarding</Link>
        <Link to="/api/admin">Admin Configuration</Link>
        <Link to="/api/data">View Data Table</Link>
      </nav>
    </div>
  );
};

export default Home;