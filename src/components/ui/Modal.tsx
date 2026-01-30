import React from 'react';
import { clsx } from 'clsx';
import { X } from 'lucide-react';

interface ModalProps {
  children: React.ReactNode;
  className?: string;
  onClose?: () => void;
  showCloseButton?: boolean;
}

export function Modal({
  children,
  className,
  onClose,
  showCloseButton = false,
}: ModalProps) {
  return (
    <div
      className={clsx(
        'relative bg-white rounded-2xl p-8 shadow-[0_20px_20px_rgba(0,0,0,0.08)] border border-black/10',
        'max-w-md w-full', // Default width, can be overridden
        className
      )}
    >
      {showCloseButton && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      )}
      {children}
    </div>
  );
}
