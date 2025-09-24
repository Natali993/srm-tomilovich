"use client";
import { Footer } from '../app/Footer';
import { DesktopHeader, MobileHeader } from '../app/Header';
import { useState, useEffect } from 'react';

// Custom hook for calculating header height
const useHeaderHeight = () => {
  const [headerHeight, setHeaderHeight] = useState(164); // Default height

  useEffect(() => {
    // Check if we're in the browser environment
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    const updateHeaderHeight = () => {
      const header = document.querySelector('header');
      if (header) {
        setHeaderHeight(header.offsetHeight + 80 < 174 ? 174 : header.offsetHeight + 80); // Adding some margin
      }
    };

    // Initial calculation
    updateHeaderHeight();

    // Update on scroll and resize
    const handleScroll = () => {
      requestAnimationFrame(updateHeaderHeight);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateHeaderHeight);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, []);

  return headerHeight;
};

export const CustomLayout = ({ children, breadcrumbs }: { children: React.ReactNode; breadcrumbs?: React.ReactNode }) => {
  const headerHeight = useHeaderHeight();

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-gray-700">
      <DesktopHeader />
      <MobileHeader />
      {breadcrumbs && (
        <div style={{ marginTop: `${headerHeight}px` }}>
          {breadcrumbs}
        </div>
      )}
      <main
        className={`flex-1 max-w-[1140px] w-full mx-auto pb-4 transition-all duration-300 ease-in-out ${breadcrumbs ? 'mt-8' : ''}`}
        style={{ marginTop: breadcrumbs ? '2rem' : `${headerHeight}px` }}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};
