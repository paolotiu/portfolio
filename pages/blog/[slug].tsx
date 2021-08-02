import MDXComponents from '@/components/MDXComponents';
import { TOC } from '@/lib/getTableOfContents';
import { getFileBySlug, getFiles } from '@/lib/mdx';
import BlogLayout from 'layouts/BlogLayout';
import { CodeSandbox } from 'mdx-embed';
import { GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { MDXRemoteSerializeResult } from 'next-mdx-remote/dist/types';
import React from 'react';

interface Props {
  source: MDXRemoteSerializeResult;
  frontMatter: any;
  toc: TOC;
}

const BlogPage = ({ source, toc, frontMatter }: Props) => {
  return (
    <BlogLayout toc={toc} frontMatter={frontMatter}>
      <MDXRemote {...source} components={{ ...MDXComponents, CodeSandbox }} />
    </BlogLayout>
  );
};

export async function getStaticPaths() {
  const posts = await getFiles('blog');

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getFileBySlug('blog', params?.slug as string);

  return {
    props: {
      ...post,
    },
  };
};

export default BlogPage;
