import clsx from 'clsx';
import React from 'react';

interface Props {
  children: React.ReactNode;
  isSecondary?: boolean;
  subtitle?: string;
}

const SectionTitle = ({ children, isSecondary, subtitle }: Props) => {
  return (
    <>
      <h2
        className={clsx(
          ` after:flex-1 after:h-[1px] after:bg-black  
        before:bg-black dark:before:bg-white dark:after:bg-white before:flex-1 sm:before:max-w-[175px] before:h-[1px] before:mr-4 after:ml-4`,
          isSecondary
            ? 'after:hidden before:block'
            : 'before:hidden sm:after:hidden sm:before:block',
          'flex items-center uppercase tracking-wide font-medium whitespace-nowrap text-xl overflow-hidden'
        )}
      >
        {children}
      </h2>
      <p className="pt-3 text-gray-400 max-w-[80ch]">{subtitle}</p>
    </>
  );
};

export default SectionTitle;
