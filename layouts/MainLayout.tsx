import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';

interface Props {
  children: React.ReactNode;
  footerClassName?: string;
}

const MainLayout = ({ children, footerClassName }: Props) => {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-1 px-5 lg:px-28 justify-items-center">
        <main className="grid items-center grid-cols-1 max-w-[1200px] w-full">
          {children}
        </main>
      </div>
      <Footer className={footerClassName} />
    </div>
  );
};

export default MainLayout;
