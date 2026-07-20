import React from 'react';

interface CardProps {
    image?: string;
    title: string;
    description: string;
    action?: React.ReactNode;
    className?: string;
}

const Card: React.FC<CardProps> = ({ image, title, description, action, className = '' }) => {
    return (
        <div className={`bg-white dark:bg-neutral-900 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col ${className}`}>
            {image && (
                <img src={image} alt={title} className="w-full h-48 object-cover" />
            )}
            <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-2 tracking-tight">{title}</h3>
                <p className="text-neutral-600 dark:text-neutral-300 mb-4 flex-1">{description}</p>
                {action && <div>{action}</div>}
            </div>
        </div>
    );
};

export default Card; 