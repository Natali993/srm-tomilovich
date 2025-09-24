"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// Custom hook for scroll detection
const useScrollDirection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);

  useEffect(() => {
    // Check if we're in the browser environment
    if (typeof window === 'undefined') return;

    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? "down" : "up";

      if (direction !== (isScrollingUp ? "up" : "down")) {
        setIsScrollingUp(direction === "up");
      }

      setScrollY(currentScrollY);
      lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
    };

    const onScroll = () => window.requestAnimationFrame(updateScrollDirection);
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [isScrollingUp]);

  return { scrollY, isScrollingUp };
};

const Logo = ({ isCompact = false }: { isCompact?: boolean }) => {
  return (
    <Link href="/">
      <div className="transition-all duration-300 ease-in-out">
        <Image
          src="/picturesHeader/logo.png" // Make sure to place your logo in the public/images directory
          alt="Logo"
          width={isCompact ? 80 : 150} // Adjust width as needed
          height={isCompact ? 20 : 50} // Adjust height as needed
          objectFit="contain"
          className="transition-all duration-300 ease-in-out"
        />
      </div>
    </Link>
  );
};

const NavigationMenu = () => {
  return (
    <nav>
      <ul className="flex items-center font-bold space-x-8 text-gray-800">
        <li><Link href="/"><p className="hover:text-blue-600">Головна</p></Link></li>
        <li><Link href="/about"><p className="hover:text-blue-600">Про нас</p></Link></li>
        <li><Link href="/prokat"><p className="hover:text-blue-600">Прокат</p></Link></li>
        <li><Link href="/posluhy"><p className="hover:text-blue-600">Послуги</p></Link></li>
        <li><Link href="/remont-honda"><p className="hover:text-blue-600">Ремонт Honda GX</p></Link></li>
        <li><Link href="/contact"><p className="hover:text-blue-600">Контакти</p></Link></li>
      </ul>
    </nav>
  );
};

const NavigationMenuMobile = ({ isOpen, onClose, headerHeight }: { isOpen: boolean; onClose: () => void; headerHeight: string }) => {
  return (
    <nav
      className={`fixed left-0 w-full overflow-hidden bg-white z-50 transition-all duration-300 ease-in-out ${isOpen ? "h-max pb-8" : "h-0"}`}
      style={{
        top: headerHeight,
        boxShadow: isOpen ? "0 0 20px rgba(0,0,0,0.1)" : "none"
      }}
    >
      <div className="flex justify-end p-4">
      </div>
      <ul className="flex flex-col items-center space-y-6 mt-10 text-lg font-semibold text-gray-800">
        <li><Link href="/" onClick={onClose}><p className="hover:text-blue-600 transition-colors duration-200">Головна</p></Link></li>
        <li><Link href="/about" onClick={onClose}><p className="hover:text-blue-600 transition-colors duration-200">Про нас</p></Link></li>
        <li><Link href="/prokat" onClick={onClose}><p className="hover:text-blue-600 transition-colors duration-200">Прокат</p></Link></li>
        <li><Link href="/posluhy" onClick={onClose}><p className="hover:text-blue-600 transition-colors duration-200">Послуги</p></Link></li>
        <li><Link href="/remont-honda" onClick={onClose}><p className="hover:text-blue-600 transition-colors duration-200">Ремонт Honda GX</p></Link></li>
        <li><Link href="/contact" onClick={onClose}><p className="hover:text-blue-600 transition-colors duration-200">Контакти</p></Link></li>
      </ul>
    </nav>
  );
};

const Subheader = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <div
      className={`bg-[#1a3148] text-white transition-all duration-700 ease-in-out overflow-hidden ${
        isVisible ? 'py-2 opacity-100' : 'py-0 h-0'
      }`}
    >
      <div className="container mx-auto max-w-[1140px] px-4">
        <div className="flex items-center space-x-2 text-sm">
          {/* Phone Icon  need to add*/}
          <span>+38 (067) 360 75 20</span>
        </div>
      </div>
    </div>
  );
};

const MainHeader = ({ isCompact }: { isCompact: boolean }) => {
  return (
    <div className="bg-white shadow-md">
      <div className={`container mx-auto flex justify-between items-center max-w-[1140px] px-4 transition-all duration-300 ease-in-out ${
        isCompact ? 'py-2' : 'py-4'
      }`}>
        <Logo isCompact={isCompact} />
        <NavigationMenu />
      </div>
    </div>
  );
};
const MainHeaderMobile = ({ isCompact, shouldShowSubheader }: { isCompact: boolean; shouldShowSubheader: boolean }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Calculate dynamic header height based on subheader visibility and compact state
  const getHeaderHeight = () => {
    const subheaderHeight = shouldShowSubheader ? 36 : 0; // py-2 = 8px top + 8px bottom + text height ≈ 36px
    const mainHeaderHeight = isCompact ? 64 : 80; // py-2 vs py-4 with logo
    return `${subheaderHeight + mainHeaderHeight}px`;
  };

  return (
    <div className="bg-white shadow-md">
      <div className={`container mx-auto flex justify-between items-center max-w-[1140px] px-4 transition-all duration-300 ease-in-out ${
        isCompact ? 'py-2' : 'py-4'
      }`}>
        <Logo isCompact={isCompact} />
        {menuOpen ?
        <button
          aria-label="Закрити меню"
          onClick={() => setMenuOpen(false)}
          className="text-gray-700 hover:text-blue-600 pr-1 text-3xl focus:outline-none"
        >
          &#10005;
        </button>
          : <button
          aria-label="Відкрити меню"
          onClick={() => setMenuOpen(true)}
          className="text-gray-700 hover:text-blue-600 text-3xl focus:outline-none md:hidden"
        >
          {/* Hamburger icon */}
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="5" width="24" height="2" rx="1" fill="currentColor" />
            <rect y="11" width="24" height="2" rx="1" fill="currentColor" />
            <rect y="17" width="24" height="2" rx="1" fill="currentColor" />
          </svg>
        </button>}
      </div>
      <NavigationMenuMobile
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        headerHeight={getHeaderHeight()}
      />
    </div>
  );
};

export const DesktopHeader = () => {
  const { scrollY, isScrollingUp } = useScrollDirection();
  const shouldShowSubheader = scrollY < 50 || isScrollingUp;
  const isCompact = scrollY > 50;

  return (
    <header className="fixed hidden md:block top-0 left-0 w-full z-50">
      <Subheader isVisible={shouldShowSubheader} />
      <MainHeader isCompact={isCompact} />
    </header>
  );
};

export const MobileHeader = () => {
  const { scrollY, isScrollingUp } = useScrollDirection();
  const shouldShowSubheader = scrollY < 30 || isScrollingUp; // More aggressive on mobile
  const isCompact = scrollY > 30;

  return (
    <header className="fixed md:hidden top-0 left-0 w-full z-50">
      <Subheader isVisible={shouldShowSubheader} />
      <MainHeaderMobile isCompact={isCompact} shouldShowSubheader={shouldShowSubheader} />
    </header>
  );
};

