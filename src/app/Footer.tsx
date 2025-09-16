import Image from "next/image";

const Contacts = () => {
  return (
    <div className="w-full md:w-1/3">
      <h4 className="font-semibold mb-2">Контакти</h4>
      <p>м. Рівне, вул Київська, 42</p>
      <p>+38 (067) 360 75 20</p>
      <a href="mailto:techprokat.rv.ua@gmail.com" className="text-white hover:underline">techprokat.rv.ua@gmail.com</a>
    </div>
  );
};

const Logo = () => {
  return (
    <div className="w-full md:w-1/3 flex justify-center items-center">
      <Image
        src="/logo-footer.png"
        alt="Логотип Технік"
        width={256}
        height={128}
        className="w-64 h-auto" />
    </div>
  );
};

const LogoGraphicRoboty = () => {
  return (
    <div className="w-full md:w-1/3 flex justify-center items-center">
      <Image
        src="/grafik-robotu.png"
        alt="Grafic roboty"
        width={256}
        height={128}
        className="w-64 h-auto" />
    </div>
  );
};

const CategoriesMenu = () => {
  return (
      <div className="w-full md:w-1/3">
          <h4 className="font-semibold mb-2">Категорії</h4>
          <ul className="space-y-2 list-disc list-inside">
            <li><a href="https://techprokat.rv.ua/" className="text-white hover:underline">Головна</a></li>
            <li><a href="https://techprokat.rv.ua/pro-nas/" className="text-white hover:underline">Про нас</a></li>
            <li><a href="https://techprokat.rv.ua/prokat/" className="text-white hover:underline">Прокат</a></li>
            <li><a href="https://techprokat.rv.ua/posluhy/" className="text-white hover:underline">Послуги</a></li>
          </ul>
        </div>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-[#003152] opacity-100 mt-auto ">
      <div className="max-w-[1140px] text-white mx-auto px-4 flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 py-8">
        <Contacts />
        <Logo />
        <CategoriesMenu />
        <LogoGraphicRoboty /> 
      </div>
      <div className="text-center text-gray-500 text-sm py-4">
        &copy; {new Date().getFullYear()} TechProkat. Всі права захищені.
      </div>
    </footer>
  );
};
