import { useTheme } from 'next-themes';
import React from 'react';
import { BsMoon } from 'react-icons/bs';
import { HiSun } from 'react-icons/hi';

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
  const { theme, setTheme } = useTheme();
  return (
    <header className="fixed top-0 flex justify-center w-full px-8 py-4">
      <nav className="flex items-center justify-between flex-1 max-w-[1920px]">
        <div>
          <span className="font-bold">PAOLO TIU</span>
        </div>
        <div>
          {theme === 'light' ? (
            <ThemeToggleButton onClick={() => setTheme('dark')}>
              <BsMoon size="1.25rem" />
            </ThemeToggleButton>
          ) : (
            <ThemeToggleButton onClick={() => setTheme('light')}>
              <HiSun size="1.25rem" />
            </ThemeToggleButton>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
