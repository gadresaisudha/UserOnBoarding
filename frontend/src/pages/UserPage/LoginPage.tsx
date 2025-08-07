import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../api/api';
import BackButton from '../../components/backbutton';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Email and password are required');
      return;
    }

    try {
      const res = await login(email, password);
      const userId = res.data.user._id;
      const token = res.data.token;

      // Store in session/localStorage (your choice)
      localStorage.setItem('userId', userId);
      localStorage.setItem('token', token);

      navigate('/api/auth/step2');
    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.msg || 'Login failed');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
     <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
      <BackButton />
      <h2 style={{ margin: 0 }}>User Onboarding</h2>
    </div>
      <form onSubmit={handleSubmit} style={{ marginTop: '20px', maxWidth: '400px' }}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', marginBottom: '16px' }}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', marginBottom: '16px' }}
          />
        </div>
        <button type="submit" style={{ padding: '8px 16px' }}>
          Next
        </button>
        {error && <p style={{ color: 'red', marginTop: '12px' }}>{error}</p>}
      </form>
    </div>
  );
};

export default LoginPage;