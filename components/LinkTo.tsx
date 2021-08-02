import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

const LinkTo = ({
  href,
  children,
  className,
  ...rest
}: React.ComponentPropsWithoutRef<'a'> & { href: string }) => {
  return (
    <Link href={href} passHref>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className={clsx('link', className)} {...rest}>
        {children}
      </a>
    </Link>
  );
};

export default LinkTo;
