import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOnboarding } from '../../context/onBoardingContext';
import AboutMe from '../../components/aboutmefield';
import AddressField from '../../components/addressfield';
import Birthdate from '../../components/birthdate';
import { updateUserDetails } from '../../api/api';

const defaultAddress = { street: '', city: '', state: '', zipcode: '' };

const Step3 = () => {
  const { config, user, loading, error } = useOnboarding();
  const [aboutMe, setAboutMe] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [address, setAddress] = useState(defaultAddress);
  const navigate = useNavigate();

  useEffect(() => {
    if (user && config) {
      if (config.step3.includes('aboutMe')) {
        setAboutMe(user.aboutme || '');
      }
      if (config.step3.includes('birthdate')) {
        setBirthdate(user.birthdate || '');
      }
      if (config.step3.includes('address')) {
        setAddress(user.address || defaultAddress);
      }

      // Auto skip if step3 is already complete
      const isFilled = config.step3.every((field) => {
        if (field === 'aboutMe') return !!user.aboutme;
        if (field === 'birthdate') return !!user.birthdate;
        if (field === 'address') return !!user.address?.street && !!user.address?.city && !!user.address?.state && !!user.address?.zipcode;
        return false;
      });

      if (isFilled) navigate('/api/auth/submitted');
    }
  }, [user, config, navigate]);

  if (loading) return <p>Loading...</p>;
  if (error || !config || !user) return <p>Error loading data</p>;

  const handleSubmit = async () => {
    const payload: any = {};
    if (config.step3.includes('aboutMe')) payload.aboutme = aboutMe;
    if (config.step3.includes('birthdate')) payload.birthdate = birthdate;
    if (config.step3.includes('address')) payload.address = address;

    try {
      await updateUserDetails(payload);
      navigate('/api/auth/submitted');
    } catch (err) {
      console.error('Failed to update user', err);
      alert('Something went wrong');
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 20 }}>
      <h2>Step 3</h2>

      {config.step3.includes('aboutMe') && (
        <AboutMe value={aboutMe} onChange={setAboutMe} />
      )}

      {config.step3.includes('address') && (
        <AddressField value={address} onChange={setAddress} />
      )}

      {config.step3.includes('birthdate') && (
        <Birthdate value={birthdate} onChange={setBirthdate} />
      )}

      <button style={{ marginTop: 20 }} onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Step3;