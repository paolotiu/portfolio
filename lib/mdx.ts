/* eslint-disable global-require */
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import slugify from 'slugify';
import mdxPrism from 'mdx-prism';

export type TOC = Array<{
  title: string;
  link: string;
  position: 2 | 3;
  id: string;
}>;

// Taken from SimeonGriggs
// https://github.com/hashicorp/next-mdx-remote/issues/53#issuecomment-725906664
export function getTableOfContents(content: string) {
  const regexp = new RegExp(/^(### |## )(.*)\n/, 'gm');
  const headingsPositionMap = {
    h2: 2,
    h3: 3,
  } as const;
  const headings = [...content.matchAll(regexp)];

  let tableOfContents: TOC = [];

  if (headings.length) {
    tableOfContents = headings.map((heading) => {
      const headingText = heading[2].trim();
      const headingType = heading[1].trim() === '##' ? 'h2' : 'h3';
      const headingLink = slugify(headingText, { lower: true, strict: true });

      return {
        title: headingType === 'h2' ? headingText : `${headingText}`,
        link: `#${headingLink}`,
        position: headingsPositionMap[headingType],
        id: headingLink,
      };
    });
  }

  return tableOfContents;
}

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
      rehypePlugins: [mdxPrism],
    },
  });
  const toc = getTableOfContents(content);
  return {
    source,
    frontMatter: {
      ...data,
    },
    toc,
  };
};

export const getFiles = (type: Type) => {
  return fs.readdir(path.join(root, 'data', type));
};
