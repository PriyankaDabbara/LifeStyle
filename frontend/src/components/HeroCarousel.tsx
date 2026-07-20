import React, { useEffect, useRef, useState } from 'react';

const images = [
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',

];

const INTERVAL = 4000;

const HeroCarousel: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef<number | null>(null);

    useEffect(() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = window.setTimeout(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, INTERVAL);
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [index]);

    return (
        <div className="relative w-full h-[420px] md:h-[520px] lg:h-[600px] overflow-hidden flex items-center justify-center">
            {/* Images */}
            {images.map((img, i) => (
                <img
                    key={i}
                    src={img}
                    alt="Hero background"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === index ? 'opacity-100 z-0' : 'opacity-0 z-0'}`}
                    draggable={false}
                />
            ))}
            {/* Overlay for darken effect */}
            <div className="absolute inset-0 bg-black/30 z-10" />
            {/* Content overlay */}
            <div className="relative z-20 w-full flex flex-col items-center justify-center h-full">
                {children}
            </div>
        </div>
    );
};

export default HeroCarousel; 