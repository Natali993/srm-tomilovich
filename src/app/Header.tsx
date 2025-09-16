import Image from "next/image";
import Link from "next/link";

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
const NavigationMenuMobile = () => {
  return (
    <nav>
      <ul className="flex flex-col items-center space-y-4 text-gray-800">
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
  return (
    <div className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center max-w-[1140px] py-4 px-4">
        <Logo />
        <NavigationMenuMobile />
      </div>
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

