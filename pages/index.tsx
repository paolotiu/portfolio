import Landing from '@/components/Landing';
import Navbar from '@/components/Navbar';
import SocialsLine from '@/components/SocialsLine';
import React from 'react';

export default function Home() {
  return (
    <div>
      <Navbar />

      <main>
        <Landing />
      </main>
      <SocialsLine />
    </div>
  );
}
