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
      <div className="grid grid-cols-1 px-4 lg:px-28 justify-items-center">
        <main className="grid items-center max-w-[1200px] w-full">
          <Landing />
          <Projects />
          <BlogPreviews />
        </main>
      </div>
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
