import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-1 px-5 lg:px-28 justify-items-center">
        <main className="grid items-center max-w-[1200px] w-full">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
