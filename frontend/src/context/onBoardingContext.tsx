import React, { createContext, useContext, useEffect, useState } from 'react';
import { getAdminConfig, getUserDetails } from '../api/api';

export interface Address {
  street: string;
  city: string;
  state: string;
  zipcode: string;
}

export interface User {
  email: string;
  aboutme?: string;
  birthdate?: string;
  address?: Address;
}

export interface Config {
  step2: string[];
  step3: string[];
}

interface OnboardingContextType {
  config: Config | null;
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  loading: boolean;
  error: string | null;
}

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

export const OnboardingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<Config | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [configRes, userRes] = await Promise.all([
          getAdminConfig(),
          getUserDetails(),
        ]);

        setConfig(configRes.data);
        setUser(userRes.data);
      } catch (err) {
        console.error('Failed to load onboarding data', err);
        setError('Failed to load onboarding data');
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  return (
    <OnboardingContext.Provider value={{ config, user, setUser, loading, error }}>
      {children}
    </OnboardingContext.Provider>
  );
};

// Custom hook
export const useOnboarding = () => {
  const context = useContext(OnboardingContext);
  if (context === undefined) {
    throw new Error('useOnboarding must be used within OnboardingProvider');
  }
  return context;
};