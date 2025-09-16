"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/picturesHeader/logo.png" // Make sure to place your logo in the public/images directory
        alt="Logo"
        width={150} // Adjust width as needed
        height={50} // Adjust height as needed
        objectFit="contain"
      />
    </Link>
  );
};

const NavigationMenu = () => {
  return (
    <nav>
      <ul className="flex items-center space-x-8 text-gray-800">
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

const NavigationMenuMobile = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <nav
      className={`fixed top-[164px] left-0 w-full overflow-hidden bg-white z-50 transition-all duration-300 ease-in-out ${isOpen ? "h-max pb-8" : "h-0"}`}
      style={{ boxShadow: isOpen ? "0 0 20px rgba(0,0,0,0.1)" : "none" }}
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

const Subheader = () => {
  return (
    <div className="bg-[#1a3148] text-white  py-2">
      <div className="container mx-auto max-w-[1140px] px-4">
        <div className="flex items-center space-x-2 text-sm">
          {/* Phone Icon  need to add*/}
          <span>+38 (067) 360 75 20</span>
        </div>
      </div>
    </div>
  );
};

const MainHeader = () => {
  return (
    <div className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center max-w-[1140px] py-4 px-4">
        <Logo />
        <NavigationMenu />
      </div>
    </div>
  );
};
const MainHeaderMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center max-w-[1140px] py-4 px-4">
        <Logo />
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
      <NavigationMenuMobile isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
};

export const DesktopHeader = () => {
  return (
    <header className="fixed hidden md:block top-0 left-0 w-full z-50">
      <Subheader />
      <MainHeader />
    </header>
  );
};

export const MobileHeader = () => {
  return (
    <header className="fixed md:hidden top-0 left-0 w-full z-50">
      <Subheader />
      <MainHeaderMobile />
    </header>         
  );
};

