import { useState, useEffect } from 'react';
import { getAdminConfig, postAdminConfig } from '../api/api';

const components = ['aboutMe', 'address', 'birthdate'];

interface Config {
  step2: string[];
  step3: string[];
}

const AdminConfigPage = () => {
  const [config, setConfig] = useState<Config>({ step2: [], step3: [] });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  // Fetch current admin configuration from backend
  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const res = await getAdminConfig();
        setConfig(res.data);
      } catch (err) {
        console.error('Error fetching admin config:', err);
        setError('Failed to load configuration');
      } finally {
        setLoading(false);
      }
    };

    fetchConfig();
  }, []);

  const toggleComponent = (step: 'step2' | 'step3', comp: string) => {
    setConfig((prev) => {
      const alreadyIncluded = prev[step].includes(comp);
      const updatedList = alreadyIncluded
        ? prev[step].filter((c) => c !== comp)
        : [...prev[step], comp];

      return { ...prev, [step]: updatedList };
    });
  };

  const handleSubmit = async () => {
    if (config.step2.length === 0 || config.step3.length === 0) {
      setError('Each step must have at least one component');
      return;
    }

    try {
      await postAdminConfig(config);
      alert('Configuration saved!');
      setError('');
    } catch {
      setError('Failed to save configuration');
    }
  };

  if (loading) return <p>Loading configuration...</p>;

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 20 }}>
      <h2>Admin Onboarding Configuration</h2>

      <div>
        <h3>Step 2 Components</h3>
        {components.map((comp) => (
          <label key={'step2-' + comp} style={{ display: 'block', marginBottom: 5 }}>
            <input
              type="checkbox"
              checked={config.step2.includes(comp)}
              onChange={() => toggleComponent('step2', comp)}
            />
            {' '}{comp}
          </label>
        ))}
      </div>

      <div style={{ marginTop: 20 }}>
        <h3>Step 3 Components</h3>
        {components.map((comp) => (
          <label key={'step3-' + comp} style={{ display: 'block', marginBottom: 5 }}>
            <input
              type="checkbox"
              checked={config.step3.includes(comp)}
              onChange={() => toggleComponent('step3', comp)}
            />
            {' '}{comp}
          </label>
        ))}
      </div>

      {error && <p style={{ color: 'red', marginTop: 10 }}>{error}</p>}

      <button style={{ marginTop: 20 }} onClick={handleSubmit}>
        Save Configuration
      </button>
    </div>
  );
};

export default AdminConfigPage;