import BlogPreview from '@/components/Blog/BlogPreview';
import { getAllFilesFrontMatter } from '@/lib/mdx';
import { FrontMatter } from '@/types/interfaces';
import MainLayout from 'layouts/MainLayout';
import React from 'react';

interface Props {
  posts: FrontMatter[];
}

const BlogPage = ({ posts }: Props) => {
  return (
    <MainLayout footerClassName="max-w-4xl">
      <div className="w-full max-w-4xl m-auto">
        <h1 className="pt-5 pb-5 text-4xl font-bold border-b border-gray-200 dark:border-gray-700">
          Blog
        </h1>
        <section>
          {posts.map((post) => (
            <BlogPreview
              key={post.slug}
              publishedAt={post.publishedAt}
              slug={post.slug}
              summary={post.summary}
              title={post.title}
            />
          ))}
        </section>
      </div>
    </MainLayout>
  );
};

export const getStaticProps = async () => {
  const posts = await getAllFilesFrontMatter('blog');

  return {
    props: {
      posts,
    },
  };
};

export default BlogPage;
