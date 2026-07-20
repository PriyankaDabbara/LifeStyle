import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
    const base =
        'px-6 py-2 rounded-full font-semibold text-lg transition-transform duration-200 shadow-md ';
    const variants = {
        primary:
            'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:scale-105 hover:shadow-xl',
        secondary:
            'bg-neutral-200 text-neutral-900 dark:bg-neutral-800 dark:text-white hover:bg-neutral-300 dark:hover:bg-neutral-700',
    };
    return (
        <button className={`${base} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
};

export default Button;
