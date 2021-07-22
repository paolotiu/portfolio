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
    <nav className="h-[100px] px-8 py-4">
      <div className="flex items-center justify-between">
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
      </div>
    </nav>
  );
};

export default Navbar;
