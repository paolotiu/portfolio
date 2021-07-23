import React from 'react';
import Link from 'next/link';

interface Props {
  children: React.ReactNode;
  href: string;
  className?: string;
}

const LinkTo = ({ href, children, className }: Props) => {
  return (
    <Link href={href} passHref>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className={`link ${className}`}>{children}</a>
    </Link>
  );
};

export default LinkTo;
