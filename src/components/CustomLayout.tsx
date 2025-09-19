import { Footer } from '../app/Footer';
import { DesktopHeader, MobileHeader } from '../app/Header';

export const CustomLayout = ({ children, breadcrumbs }: any) => {
  const Breadcrumbs = breadcrumbs;
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-gray-700">
      <DesktopHeader />
      <MobileHeader />
      {breadcrumbs && <div className="mt-[164px]"> <Breadcrumbs /></div>}
      <main className={`flex-1 max-w-[1140px] w-full mx-auto pb-4 ${breadcrumbs ? 'mt-8' : 'mt-[164px]'}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};
