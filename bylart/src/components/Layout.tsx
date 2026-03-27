import { ReactNode } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import CookieBanner from './CookieBanner';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
