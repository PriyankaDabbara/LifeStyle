import React from 'react';

interface Feature {
    icon: React.ReactNode;
    title: string;
    description: string;
}

interface FeatureListProps {
    features: Feature[];
    className?: string;
}

const FeatureList: React.FC<FeatureListProps> = ({ features, className = '' }) => {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${className}`}>
            {features.map((feature, idx) => (
                <div key={idx} className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition-shadow hover:shadow-2xl duration-300">
                    <div className="mb-4 text-primary">{feature.icon}</div>
                    <h4 className="text-xl font-bold mb-2 tracking-tight">{feature.title}</h4>
                    <p className="text-neutral-600 dark:text-neutral-300">{feature.description}</p>
                </div>
            ))}
        </div>
    );
};

export default FeatureList; 