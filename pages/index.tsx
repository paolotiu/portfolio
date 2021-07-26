import Landing from '@/components/Landing';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import SocialsLine from '@/components/SocialsLine';
import React from 'react';

export default function Home() {
  return (
    <div>
      <Navbar />

      <main className="flex flex-col items-center px-4 md:px-28">
        <Landing />
        <Projects />
      </main>
      <SocialsLine />
    </div>
  );
}
