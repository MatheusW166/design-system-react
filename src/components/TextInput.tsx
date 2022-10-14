/* 
 * Feito utilizando o padrão de composição do React. 
 */

import { InputHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> { }

export interface TextInputRootProps {
    children: ReactNode;
}

export interface TextInputIconProps {
    children: ReactNode;
    useTag?: boolean;
}

function TextInputRoot({ children }: TextInputRootProps) {
    return (
        <div className={`
            flex items-center gap-3
            py-3 px-4 h-12
            bg-gray-800
            ring-cyan-300
            focus-within:ring-2
            rounded font-regular 
            w-full
        `}>
            {children}
        </div>
    )
}

function TextInputIcon({ children, useTag = false }: TextInputIconProps) {
    const Tag = useTag ? Slot : 'span';
    return (
        <Tag className="w-6 h-6 text-gray-400">
            {children}
        </Tag>
    );
}

function TextInputInput(props: TextInputInputProps) {
    return (
        <input
            className={`
                bg-transparent flex-1
                outline-none
                text-gray-100
                placeholder:text-gray-400 
                text-xs
            `}
            {...props}>
        </input>
    )
}

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
}