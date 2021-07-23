import { useTheme } from 'next-themes';
import React from 'react';
import { RoughNotation } from 'react-rough-notation';

export const RainbowHighlight = ({
  color,
  children,
}: {
  color: string;
  children: string;
}) => {
  // Change the animation duration depending on length of text we're animating (speed = distance / time)
  const animationDuration = Math.floor(50 * children.length);

  const { theme } = useTheme();
  return (
    <>
      {theme === 'light' ? (
        <RoughNotation
          type="highlight"
          multiline
          padding={[0, 2]}
          iterations={2}
          animationDuration={animationDuration}
          color={color}
        >
          {children}
        </RoughNotation>
      ) : (
        <>{children}</>
      )}
    </>
  );
};
