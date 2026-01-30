import React from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer',
        {
          // Variants
          'bg-black text-white hover:bg-gray-800 focus:ring-black': variant === 'primary',
          'bg-white text-black border border-black hover:bg-gray-50 focus:ring-gray-500': variant === 'secondary',
          'bg-transparent text-gray-600 hover:text-black hover:bg-gray-100': variant === 'ghost',

          // Sizes
          'px-3 py-1.5 text-sm': size === 'sm',
          'px-5 py-3.5 text-base': size === 'md', // Matches Figma 20px px, 14px py
          'px-6 py-4 text-lg': size === 'lg',

          // Width
          'w-full': fullWidth,
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
