/* eslint-disable global-require */
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import mdxPrism from 'mdx-prism';
import { getTableOfContents } from './getTableOfContents';
import imageMetadata from './imgToNextImage';

const root = process.cwd();

export type Type = 'blog';

export const getFileBySlug = async (type: Type, slug: string) => {
  const mdx = slug
    ? await fs.readFile(path.join(root, 'data', type, `${slug}.mdx`), 'utf-8')
    : await fs.readFile(path.join(root, 'data', `${type}.mdx`), 'utf-8');

  const { data, content } = matter(mdx);

  const source = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        require('remark-slug'),
        [
          require('remark-autolink-headings'),
          {
            linkProperties: {
              className: ['blog-heading'],
            },
          },
        ],
      ],
      rehypePlugins: [mdxPrism, imageMetadata],
    },
  });
  const toc = getTableOfContents(content);
  return {
    source,
    frontMatter: {
      ...data,
      slug,
      tags: data.tags?.split(','),
    },
    toc,
  };
};

export const getFiles = (type: Type) => {
  return fs.readdir(path.join(root, 'data', type));
};
