import Subscribe from '@/components/Subscribe';
import { activeHeadingAtom } from '@/lib/jotai';
import { TOC } from '@/lib/mdx';
import clsx from 'clsx';
import { useAtom } from 'jotai';
import Link from 'next/link';
import React from 'react';
import MainLayout from './MainLayout';

interface Props {
  children: React.ReactNode;
  toc: TOC;
  frontMatter: {
    title: string;
  };
}

const TableOfContents = ({ toc }: { toc: TOC }) => {
  const [activeHeading] = useAtom(activeHeadingAtom);
  return (
    <>
      {toc.map((heading) => {
        return (
          <Link key={heading.title} href={heading.link} passHref>
            <a
              href={heading.link}
              className={clsx(
                'block my-2 toc-link',
                heading.position === 3 ? 'ml-4' : '',
                activeHeading === heading.id && 'active'
              )}
            >
              {heading.title}
            </a>
          </Link>
        );
      })}
    </>
  );
};
const BlogLayout = ({ children, toc, frontMatter: { title } }: Props) => {
  return (
    <MainLayout footerClassName="max-w-2xl">
      <div className="relative w-full max-w-2xl m-auto">
        <div className="relative">
          <aside className="hidden xl:block absolute left-[108%]  text-sm w-[fit-content] h-full">
            <div className="sticky top-28">
              <TableOfContents toc={toc} />
            </div>
          </aside>
          <div className="pt-10">
            <h1 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
              {title}
            </h1>
            <div className="flex pt-4 pb-2 text-gray-500 dark:text-gray-400">
              <span className="text-sm">August 7, 2020</span>
            </div>
            <hr className="pb-8 " />
            <div className="w-full prose dark:prose-dark max-w-none">
              {children}
            </div>
          </div>
        </div>
        <Subscribe />
      </div>
    </MainLayout>
  );
};

export default BlogLayout;
