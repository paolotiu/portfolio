import { usePostPreviewQuery } from '@/generated/graphql';
import dayjs from 'dayjs';
// import Link from 'next/link';
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import SectionTitle from '../SectionTitle';
import styles from './BlogPreviews.module.css';

const BlogPreviews = () => {
  const postPreviews = usePostPreviewQuery();
  return (
    <section className=" max-w-[1200px] w-full pt-20">
      <SectionTitle isSecondary>Recent Posts</SectionTitle>
      <div className="pt-10 ">
        {/** Render first 3 blogs only */}
        {postPreviews.data?.user?.publication?.posts
          ?.slice(0, 2)
          .map((post) => {
            if (!post) return null;
            return (
              <article
                key={post._id}
                className={`${styles.container} border-gray-200 first-of-type:border-t-0 border-t`}
              >
                {/* <Link href="/blog" passHref> */}
                <a
                  href={`http://blog.paolotiu.com/${post.slug}`}
                  className="grid gap-4 pt-10 pb-8 group"
                >
                  <div className="grid justify-between gap-8 md:grid-flow-col lg:flex-row">
                    <div className="grid gap-4">
                      <h3 className="text-xl font-bold transition md:text-2xl group-hover:text-accent">
                        {post.title}
                      </h3>
                      <p className="text-gray-800 max-w-[80ch] line-clamp-3">
                        {post.brief}
                      </p>
                    </div>

                    <div>
                      <span className="text-gray-500">
                        {dayjs(post.dateAdded).format('ddd, M MMM YYYY')}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 group ">
                    <span className="font-medium ">Read More</span>
                    <FiArrowRight className={styles.arrow} />
                  </div>
                </a>
                {/* </Link> */}
              </article>
            );
          })}
      </div>
    </section>
  );
};

export default BlogPreviews;
