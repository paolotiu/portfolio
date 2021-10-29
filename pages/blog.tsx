import MainLayout from 'layouts/MainLayout';
import React from 'react';
import BlogPreview from '@/components/Blog/BlogPreview';
import { getAllFilesFrontMatter } from '@/lib/mdx';
import { FrontMatter } from '@/types/interfaces';

interface Props {
  posts: FrontMatter[];
}

const BlogPage = ({ posts }: Props) => {
  const sortedPosts = posts.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );
  return (
    <MainLayout footerClassName="max-w-4xl">
      <div className="w-full max-w-4xl m-auto">
        <h1 className="pt-5 pb-5 text-4xl font-bold border-b border-gray-200 dark:border-gray-700 dark:text-white">
          Blog
        </h1>
        <section>
          {sortedPosts.map((post) => (
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
