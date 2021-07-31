import { activeHeadingAtom } from '@/lib/jotai';
import NextImage from 'next/image';
import { useAtom } from 'jotai';
import Link from 'next/link';
import React, {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  useEffect,
} from 'react';
import { useInView } from 'react-intersection-observer';

const CustomLink = ({
  href,
  ...props
}: DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>) => {
  const isInternal = href && (href.startsWith('/') || href?.startsWith('#'));

  if (isInternal) {
    return (
      <Link href={href as string} passHref>
        <a {...props}>{props.children}</a>
      </Link>
    );
  }

  return (
    <a target="_blank" rel="noopener noreferrer" href={href} {...props}>
      {props.children}
    </a>
  );
};

const createCustomHeading = (type: 'h2' | 'h3') =>
  function CustomHeading({
    id,
    ...props
  }: React.ComponentPropsWithoutRef<'h2' | 'h3'> & { id: string }) {
    const { inView, ref } = useInView({
      rootMargin: '0% 0% -88% 0%',
    });
    const [, setActiveHeading] = useAtom(activeHeadingAtom);
    useEffect(() => {
      if (inView) {
        setActiveHeading(id);
      }
    }, [id, inView, setActiveHeading]);

    const Tag = type;
    return (
      // eslint-disable-next-line jsx-a11y/heading-has-content
      <Tag {...props} className={inView ? 'in' : 'not'} ref={ref} id={id} />
    );
  };

const CustomImage = ({
  src,
  height,
  width,
  blurdataurl,
  ...rest
}: React.ComponentPropsWithoutRef<'img'> & { blurdataurl: string }) => {
  return (
    <NextImage
      src={src as any}
      height={height}
      width={width}
      {...rest}
      blurDataURL={blurdataurl as any}
      placeholder="blur"
    />
  );
};

const MDXComponents = {
  a: CustomLink,
  h2: createCustomHeading('h2'),
  h3: createCustomHeading('h3'),
  img: CustomImage,
};

export default MDXComponents;
