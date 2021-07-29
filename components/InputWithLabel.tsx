/* eslint-disable react/destructuring-assignment */
import clsx from 'clsx';
import React from 'react';

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: string;
  label: string;
  labelClassName?: string;
}

const InputWithLabel = React.forwardRef<HTMLInputElement, Props>(
  ({ name, label, labelClassName, className, ...props }: Props, ref) => {
    return (
      <label htmlFor={name} className={clsx('label', labelClassName)}>
        {label}
        <input
          ref={ref}
          className={clsx('input mt-[2px]', className)}
          name={name}
          {...props}
        />
      </label>
    );
  }
);

InputWithLabel.displayName = 'InputWithLabel';

export default InputWithLabel;
