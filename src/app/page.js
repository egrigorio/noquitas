"use client";
import { AuthProvider } from './authContext';
import { UserProvider } from './userContext';
import { useAuth } from './authContext';
import { LoginForm } from "./components/LoginForm";
import Dashboard from "./dashboard/Dashboard"

export default function Home() {
  return (
    
    <AuthProvider>
      <UserProvider>
        <PageContent />
      </UserProvider>
    </AuthProvider>
    
  );
}

function PageContent() {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Dashboard /> : <div className="h-screen flex items-center justify-center"><LoginForm /></div>;
}
