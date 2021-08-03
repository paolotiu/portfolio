import React from 'react';
import SectionTitle from '../SectionTitle';
import BlogPreview from './BlogPreview';

const BlogPreviews = () => {
  return (
    <section className="pt-20">
      <SectionTitle isSecondary>Recent Posts</SectionTitle>
      <div>
        <BlogPreview
          publishedAt={new Date('2021-08-2')}
          slug="jotai-simple-state"
          summary="An introduction to Jotai and why you should consider using it."
          title="👻 Jotai - State Simply Managed"
        />
        <BlogPreview
          publishedAt={new Date('2021-07-19')}
          slug="get-tailwind-intellisense-anywhere"
          summary="How to get tailwind intellisense when using any library."
          title="How to get Tailwind Intellisense anywhere."
        />
      </div>
    </section>
  );
};

export default BlogPreviews;
