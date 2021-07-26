import BlogPreviews from '@/components/Blog/BlogPreviews';
import Landing from '@/components/Landing';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import SocialsLine from '@/components/SocialsLine';
import { usePostPreviewQuery } from '@/generated/graphql';
import React from 'react';
import { QueryClient } from 'react-query';

export default function Home() {
  return (
    <div>
      <Navbar />

      <main className="flex flex-col items-center px-4 lg:px-28">
        <Landing />
        <Projects />
        <BlogPreviews />
      </main>
      <SocialsLine />
    </div>
  );
}

export const getStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('postsPreview', () =>
    usePostPreviewQuery.fetcher()
  );

  return {
    props: {},
  };
};
