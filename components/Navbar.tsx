import { useTheme } from 'next-themes';
import React from 'react';
import { BsMoon } from 'react-icons/bs';
import { HiSun } from 'react-icons/hi';
import { useIsMounted } from 'utils/hooks/useIsMounted';

const ThemeToggleButton = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-200 hover:bg-gray-100 dark:focus:ring-gray-500 dark:hover:bg-gray-700"
    >
      {children}
    </button>
  );
};
const Navbar = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const isMounted = useIsMounted();

  return (
    <header className="fixed top-0 flex justify-center w-full px-6 py-6 md:px-10 nav">
      <nav className="flex items-center justify-between flex-1 max-w-[1920px]">
        <div>
          <span className="font-bold">PAOLO TIU</span>
        </div>

        <div>
          {isMounted &&
            (resolvedTheme === 'light' ? (
              <ThemeToggleButton onClick={() => setTheme('dark')}>
                <BsMoon size="1.25rem" />
              </ThemeToggleButton>
            ) : (
              <ThemeToggleButton onClick={() => setTheme('light')}>
                <HiSun size="1.25rem" />
              </ThemeToggleButton>
            ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
