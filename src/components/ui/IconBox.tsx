import React from 'react';
import { clsx } from 'clsx';

interface IconBoxProps {
  children: React.ReactNode;
  className?: string;
}

export function IconBox({ children, className }: IconBoxProps) {
  return (
    <div
      className={clsx(
        'w-14 h-14 rounded-lg flex items-center justify-center text-2xl flex-shrink-0',
        'bg-[#FFEA9F]', // Custom yellow from Figma
        className
      )}
    >
      {children}
    </div>
  );
}
