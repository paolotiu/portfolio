import clsx from 'clsx';
import React from 'react';

interface Props {
  children: React.ReactNode;
  isSecondary?: boolean;
}

const SectionTitle = ({ children, isSecondary }: Props) => {
  return (
    <h2
      className={clsx(
        'flex items-center uppercase tracking-wide font-medium whitespace-nowrap text-xl overflow-hidden before:bg-black dark:before:bg-white before:flex-1 md:before:max-w-[175px] before:h-[1px] before:mr-4 before:inline',
        isSecondary &&
          'after:flex-1 after:h-[1px] after:bg-black before:hidden after:ml-4 sm:after:hidden sm:before:block'
      )}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
