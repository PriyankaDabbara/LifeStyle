import React from 'react';

interface TestimonialProps {
    quote: string;
    author: string;
    title?: string;
    avatar?: string;
    className?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, title, avatar, className = '' }) => {
    return (
        <div className={`bg-neutral-50 dark:bg-neutral-900 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition-shadow hover:shadow-2xl duration-300 ${className}`}>
            <svg className="w-8 h-8 mb-4 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 17a4 4 0 01-4-4V7a4 4 0 014-4h3a4 4 0 014 4v6a4 4 0 01-4 4H7zm10 0a4 4 0 01-4-4V7a4 4 0 014-4h3a4 4 0 014 4v6a4 4 0 01-4 4h-3z" /></svg>
            <p className="text-xl italic mb-6 text-neutral-700 dark:text-neutral-200">"{quote}"</p>
            <div className="flex items-center gap-4 mt-4">
                {avatar && <img src={avatar} alt={author} className="w-12 h-12 rounded-full object-cover border-2 border-primary" />}
                <div className="text-left">
                    <div className="font-bold text-neutral-900 dark:text-white">{author}</div>
                    {title && <div className="text-neutral-500 dark:text-neutral-400 text-sm">{title}</div>}
                </div>
            </div>
        </div>
    );
};

export default Testimonial; 