import { Slot } from '@radix-ui/react-slot'
import { ReactNode } from 'react';
import { clsx } from 'clsx'

export interface TextProps {
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    useTag?: boolean;
}

export function Text({ size = 'md', children, useTag }: TextProps) {
    const Tag = useTag ? Slot : 'span';

    return (
        <Tag
            className={clsx(
                'text-gray-100 font-sans',
                'font-medium',
                {
                    'text-xs': size === 'sm',
                    'text-sm': size === 'md',
                    'text-md': size === 'lg',
                }
            )}
        >
            {children}
        </Tag>
    )
}