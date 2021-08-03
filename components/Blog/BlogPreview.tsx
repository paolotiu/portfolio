import clsx from 'clsx';
import dayjs from 'dayjs';
import Link from 'next/link';
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import styles from './BlogPreviews.module.css';

interface Props {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string | number | Date | dayjs.Dayjs;
}

const BlogPreview = ({ slug, summary, title, publishedAt }: Props) => {
  return (
    <article
      className={`${styles.container} border-gray-200 dark:border-gray-700 first-of-type:border-t-0 border-t`}
    >
      <Link href={`/blog/${slug}`} passHref>
        <a className="grid gap-4 pt-10 pb-8 group">
          <div className="grid justify-between gap-8 md:grid-flow-col lg:flex-row">
            <div className="grid gap-2">
              <h3 className="text-xl font-bold text-gray-900 transition md:text-2xl dark:text-gray-100">
                {title}
              </h3>
              <p className="text-gray-700 dark:text-gray-400 max-w-[80ch] line-clamp-3">
                {summary}
              </p>
            </div>

            <div className="text-sm text-gray-500 dark:text-gray-300">
              <p>{dayjs(publishedAt).format('ddd, D MMM YYYY')}</p>
            </div>
          </div>
          <div
            className={clsx(
              'flex items-center space-x-[3px] text-gray-800 hover:text-black dark:text-gray-200 dark:hover:text-white group',
              styles.btn
            )}
          >
            <span className="font-medium ">Read More</span>
            <FiArrowRight
              className={clsx(
                `group-hover:transform group-hover:translate-x-1`,
                styles.arrow
              )}
            />
          </div>
        </a>
      </Link>
    </article>
  );
};

export default BlogPreview;
