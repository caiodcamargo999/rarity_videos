import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
}

export function Section({ children, className, id, ...props }: SectionProps) {
    return (
        <section
            id={id}
            className={cn("py-10 md:py-16 lg:py-24 relative overflow-hidden", className)}
            {...props}
        >
            {children}
        </section>
    );
}
