/* eslint-disable global-require */
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import mdxPrism from 'mdx-prism';
import readingTime from 'reading-time';
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

        [
          {
            mode: 'button',
          },
        ],
        require('remark-code-titles'),
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
      readingTime: readingTime(content),
    },
    toc,
  };
};

export const getFiles = (type: Type) => {
  return fs.readdir(path.join(root, 'data', type));
};

export async function getAllFilesFrontMatter(type: Type) {
  const files = await fs.readdir(path.join(root, 'data', type));
  return Promise.all(
    files.map(async (slug) => {
      const source = await fs.readFile(
        path.join(root, 'data', type, slug),
        'utf8'
      );

      const { data } = matter(source);

      return {
        ...data,
        slug: slug.replace('.mdx', ''),
      };
    })
  );
}
