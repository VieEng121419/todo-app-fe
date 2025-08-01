import * as React from 'react';

import { cn } from '@/lib/utils';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
    return (
        <input
            type={type}
            data-slot='input'
            className={cn(
                'border-input file:text-foreground placeholder-gray-400 placeholder:font-bold placeholder:text-sm selection:bg-primary selection:text-primary-foreground flex h-12 w-full min-w-0 rounded-md px-3 py-3 text-base transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-white',
                'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
                'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:border-[#F9A824]',
                className
            )}
            style={{ '--tw-ring-color': '#FDE6C1' } as React.CSSProperties}
            {...props}
        />
    );
}

export { Input };
