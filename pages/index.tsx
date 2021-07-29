import BlogPreviews from '@/components/Blog/BlogPreviews';
import Landing from '@/components/Landing';
import Projects from '@/components/Projects';
import SocialsLine from '@/components/SocialsLine/SocialsLine';
import { usePostPreviewsQuery } from '@/generated/graphql';
import React from 'react';
import dynamic from 'next/dynamic';
import { QueryClient } from 'react-query';
import Contact from '@/components/Contact';
import { dehydrate } from 'react-query/hydration';
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

export const getStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    ['postPreviews', null],
    usePostPreviewsQuery.fetcher()
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
