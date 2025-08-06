import { useNavigate } from 'react-router-dom';

const ThankYouPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1> Thank You for Submitting Data</h1>
      <p>Your onboarding is complete.</p>
      <button onClick={handleLogout} style={{ marginTop: '30px' }}>
        logout
      </button>
    </div>
  );
};

export default ThankYouPage;