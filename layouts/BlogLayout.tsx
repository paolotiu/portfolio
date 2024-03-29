import clsx from "clsx";
import { useAtom } from "jotai";
import Link from "next/link";
import React, { useEffect } from "react";
import dayjs from "dayjs";
import { NextSeo } from "next-seo";
import { Blog, FrontMatter } from "@/types/interfaces";
import { getBlogViews, supabase } from "@/lib/supabase";
import { TOC } from "@/lib/getTableOfContents";
import { activeHeadingAtom } from "@/lib/jotai";
import MainLayout from "./MainLayout";

interface Props {
  children: React.ReactNode;
  toc: TOC;
  frontMatter: FrontMatter;
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
                "block my-2 toc-link whitespace-nowrap dark:text-white",
                heading.position === 3 ? "ml-4" : "",
                activeHeading === heading.id && "active"
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

const baseUrl =
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://paolotiu.com";
const BlogLayout = ({
  children,
  toc,
  frontMatter: { title, slug, publishedAt, summary, tags, image, readingTime },
}: Props) => {
  useEffect(() => {
    const registerView = async () => {
      // Check if blog is in database
      const res = await getBlogViews(slug);

      if (res.data?.length) {
        // Blog is in db
        await supabase.rpc("increment", { blog_slug: slug });
      } else {
        // Blog isn't in db
        await supabase.from<Blog>("blog").insert({
          slug,
          views: 1,
        });
      }
    };

    if (process.env.NODE_ENV !== "development") {
      registerView();
    }
  }, [slug]);

  return (
    <MainLayout footerClassName="max-w-2xl">
      <NextSeo
        title={`${title} - Paolo Tiu`}
        description={summary}
        openGraph={{
          title: `${title} - Paolo Tiu`,
          type: "article",
          description: summary,
          images: [{ url: `${baseUrl}${image}` }],
          article: {
            publishedTime: publishedAt,
            authors: ["https://paolotiu.com"],
            tags,
          },
        }}
      />
      <div className="relative w-full max-w-2xl m-auto">
        <div className="relative">
          <aside className="hidden xl:block absolute left-[112%]  text-sm w-[fit-content] h-full">
            <div className="sticky top-28">
              <TableOfContents toc={toc} />
            </div>
          </aside>
          <div className="pt-10">
            <h1 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
              {title}
            </h1>
            <div className="flex justify-between pt-4 pb-2 text-sm text-gray-500 dark:text-gray-400">
              <span>{dayjs(new Date(publishedAt)).format("MMMM D, YYYY")}</span>
              <span>{readingTime.text}</span>
            </div>
            <hr className="pb-8 " />
            <div className="w-full prose dark:prose-dark max-w-none">{children}</div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default BlogLayout;
