"use client"
import { useRouter } from 'next/navigation';
import React, { createContext, useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

interface AuthContextType {
  isAuthenticated: boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token || token == undefined) {
      setIsAuthenticated(true);
    }
    else{
        toast.error("You need to be logged In")
        router.push("/sign-in")
    }
  }, []);


  const logout = () => {
    localStorage.removeItem('token');
    router.push("/sign-in")
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, logout }}>
      {isAuthenticated && children}
    </AuthContext.Provider>
  );
};
