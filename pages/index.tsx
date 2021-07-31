import BlogPreviews from '@/components/Blog/BlogPreviews';
import Landing from '@/components/Landing';
import Projects from '@/components/Projects';
import SocialsLine from '@/components/SocialsLine/SocialsLine';
import React from 'react';
import dynamic from 'next/dynamic';
import Contact from '@/components/Contact';
import MainLayout from 'layouts/MainLayout';

const Subscribe = dynamic(() => import('@/components/Subscribe'));

export default function Home() {
  return (
    <MainLayout>
      <Landing />
      <Projects />
      <BlogPreviews />
      <Contact />
      <Subscribe />
      <SocialsLine />
    </MainLayout>
  );
}
