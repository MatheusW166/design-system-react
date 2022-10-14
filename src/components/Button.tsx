import { ReactNode } from "react";

export interface ButtonProps {
    children: ReactNode;
}

export function Button({ children }: ButtonProps) {

    return (
        <button className={
            `py-3 px-4 
            bg-cyan-500 
            text-gray-900 
            hover:bg-cyan-300 
            ring-gray-100
            rounded font-semibold 
            text-sm w-full 
            focus:ring-2`
        }>
            {children}
        </button>
    )
}