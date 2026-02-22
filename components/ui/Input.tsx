'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, label, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="mb-2 block text-sm font-medium text-violet-200">
            {label}
          </label>
        )}
        <input
          type={type}
          className={cn(
            'flex h-12 w-full rounded-lg border bg-white/5 px-4 py-2 text-sm text-white placeholder:text-violet-300/50',
            'border-violet-400/20 focus:border-violet-400/50',
            'focus:outline-none focus:ring-2 focus:ring-violet-500/30',
            'transition-all duration-200',
            'file:border-0 file:bg-transparent file:text-sm file:font-medium',
            'disabled:cursor-not-allowed disabled:opacity-50',
            error && 'border-red-400/50 focus:border-red-400/70 focus:ring-red-500/30',
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-sm text-red-300">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };