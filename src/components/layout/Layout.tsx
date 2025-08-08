import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen bg-black flex flex-col overflow-hidden">
      <Header />
      <main className="flex-1 overflow-auto px-4 py-4">
        <div className="container mx-auto h-full">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};