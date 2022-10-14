import { Slot } from "@radix-ui/react-slot";
import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    useTag?: boolean;
}

export function Button({ children, useTag = false, className, ...props }: ButtonProps) {
    const Tag = useTag ? Slot : 'button';
    return (
        <Tag className={
            `py-3 px-4 
            bg-cyan-500 
            text-gray-900 
            hover:bg-cyan-300 
            ring-gray-100
            rounded font-semibold 
            text-sm w-full 
            focus:ring-2 
            ${className}`
        }
            {...props}
        >
            {children}
        </Tag>
    )
}