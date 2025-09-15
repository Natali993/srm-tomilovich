import Image from "next/image";

const Contacts = () => {
  return (
    <div className="w-full md:w-1/3">
      <h4 className="font-semibold mb-2">Контакти</h4>
      <p>м. Рівне, вул Київська, 42</p>
      <p>+38 (067) 360 75 20</p>
      <a href="mailto:techprokat.rv.ua@gmail.com" className="text-blue-600 hover:underline">techprokat.rv.ua@gmail.com</a>
    </div>
  );
};

const Logo = () => {
  return (
    <div className="w-full md:w-1/3 flex justify-center items-center">
      <Image
        src="/techprokat_logo.png"
        alt="Логотип Технік"
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
            <li><a href="https://techprokat.rv.ua/" className="text-blue-600 hover:underline">Головна</a></li>
            <li><a href="https://techprokat.rv.ua/pro-nas/" className="text-blue-600 hover:underline">Про нас</a></li>
            <li><a href="https://techprokat.rv.ua/prokat/" className="text-blue-600 hover:underline">Прокат</a></li>
            <li><a href="https://techprokat.rv.ua/posluhy/" className="text-blue-600 hover:underline">Послуги</a></li>
          </ul>
        </div>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-auto py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">
        <Contacts />
        <Logo />
        <CategoriesMenu/>
      </div>
    </footer>
  );
};
