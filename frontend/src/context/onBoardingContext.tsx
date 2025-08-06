import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { getAdminConfig } from '../api/api';

type Config = {
  step2: string[];
  step3: string[];
};

type OnboardingContextType = {
  config: Config | null;
  loading: boolean;
};

const OnboardingContext = createContext<OnboardingContextType>({
  config: null,
  loading: true,
});

export const OnboardingProvider = ({ children }: { children: ReactNode }) => {
  const [config, setConfig] = useState<Config | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await getAdminConfig();
        setConfig(res.data);
      } catch (err) {
        console.error('Failed to fetch config');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <OnboardingContext.Provider value={{ config, loading }}>
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboarding = () => useContext(OnboardingContext);