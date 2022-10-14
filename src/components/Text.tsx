import { Slot } from '@radix-ui/react-slot'
import { ReactNode } from 'react';
import { clsx } from 'clsx'

export interface TextProps {
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    useTag?: boolean;
    className?: string;
}

export function Text({ size = 'md', children, useTag, className }: TextProps) {
    const Tag = useTag ? Slot : 'span';

    return (
        <Tag
            className={clsx(
                'text-gray-100 font-sans',
                {
                    'text-xs': size === 'sm',
                    'text-sm': size === 'md',
                    'text-md': size === 'lg',
                },
                className,
            )}
        >
            {children}
        </Tag>
    )
}