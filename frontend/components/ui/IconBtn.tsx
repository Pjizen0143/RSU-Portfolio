import React from "react";

interface IconButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    href?: string;
    className?: string;
}

export default function IconButton({ children, onClick, href, className }: IconButtonProps) {
    const baseClass = `
    flex items-center justify-center
    w-10 h-10 
    rounded-full
    bg-bg text-text
    border border-primary
    cursor-pointer
    transition-all duration-200
    hover:scale-110
    hover:shadow-md
    active:scale-95
    ${className || ""}
  `;

    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={baseClass}>
                {children}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={baseClass}>
            {children}
        </button>
    );
}