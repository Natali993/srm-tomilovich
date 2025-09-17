import { Footer } from '../app/Footer';
import { DesktopHeader, MobileHeader } from '../app/Header';

export const CustomLayout = ({ children }: any) => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-gray-700">
      <DesktopHeader />
      <MobileHeader />
      <main className="flex-1 max-w-[1140px] w-full mx-auto py-4 mt-[168px]">
        {children}
      </main>
      <Footer />
    </div>
  );
};
