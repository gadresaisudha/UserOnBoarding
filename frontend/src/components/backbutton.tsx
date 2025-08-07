import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate('/')} style={{ marginRight: '16px' }}>
      ← 
    </button>
  );
};

export default BackButton;