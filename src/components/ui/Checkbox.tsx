import React from 'react';
import { clsx } from 'clsx';
import { Check } from 'lucide-react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Checkbox({ className, label, ...props }: CheckboxProps) {
  return (
    <label className={clsx("inline-flex items-center gap-3 cursor-pointer group", className)}>
      <div className="relative flex items-center">
        <input
          type="checkbox"
          className="peer sr-only"
          {...props}
        />
        <div className={clsx(
          "w-6 h-6 rounded-md border-2 border-black transition-colors",
          "peer-checked:bg-black peer-checked:border-black",
          "peer-focus:ring-2 peer-focus:ring-offset-2 peer-focus:ring-black/20"
        )}>
          <Check className="w-4 h-4 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 transition-opacity" />
        </div>
      </div>
      {label && (
        <span className="font-medium text-black text-lg select-none">
          {label}
        </span>
      )}
    </label>
  );
}
