
import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';
import { toast } from 'sonner';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: async () => false,
  register: async () => false,
  logout: () => {},
  isAuthenticated: false,
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  
  useEffect(() => {
    // Check for user in localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Failed to parse stored user:', error);
        localStorage.removeItem('user');
      }
    }
  }, []);

  const login = async (email: string, password: string) => {
    // For demo purposes, we're using mock authentication
    // In a real app, you would call an API here
    
    // Simple validation
    if (!email || !password) {
      toast.error('Please enter both email and password');
      return false;
    }
    
    if (email === 'user@example.com' && password === 'password') {
      const newUser = {
        id: 1,
        name: 'Demo User',
        email,
        isLoggedIn: true,
      };
      
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
      toast.success('Successfully logged in');
      return true;
    }
    
    toast.error('Invalid credentials');
    return false;
  };

  const register = async (name: string, email: string, password: string) => {
    // For demo purposes, we're using mock registration
    // In a real app, you would call an API here
    
    // Simple validation
    if (!name || !email || !password) {
      toast.error('Please fill all required fields');
      return false;
    }
    
    const newUser = {
      id: Date.now(),
      name,
      email,
      isLoggedIn: true,
    };
    
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    toast.success('Account created successfully');
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    toast.success('Logged out successfully');
  };

  const value = {
    user,
    login,
    register,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
