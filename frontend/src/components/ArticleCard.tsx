import React from 'react';
import Button from './Button';

interface ArticleCardProps {
    image: string;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    onReadMore?: () => void;
    className?: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ image, title, excerpt, author, date, onReadMore, className = '' }) => {
    return (
        <div className={`bg-white dark:bg-neutral-900 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col ${className}`}>
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2 tracking-tight">{title}</h3>
                <p className="text-neutral-600 dark:text-neutral-300 mb-4 flex-1">{excerpt}</p>
                <div className="flex items-center justify-between text-sm text-neutral-500 dark:text-neutral-400 mb-4">
                    <span>{author}</span>
                    <span>{date}</span>
                </div>
                <Button variant="secondary" onClick={onReadMore}>Read More</Button>
            </div>
        </div>
    );
};

export default ArticleCard; 