import clsx from 'clsx';
import React from 'react';

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  secondary?: boolean;
}

const Button = ({ type, className, ...props }: Props) => {
  return (
    <button
      className={clsx('button', className)}
      // eslint-disable-next-line react/button-has-type
      type={type || 'button'}
      {...props}
    ></button>
  );
};

export default Button;
