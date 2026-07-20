import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [hasBackground, setHasBackground] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show navbar at the top of the page
            if (currentScrollY <= 100) {
                setIsVisible(true);
                setHasBackground(false);
            } else {
                // Show navbar with background when scrolling
                setIsVisible(true);
                setHasBackground(true);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav className={`w-full px-6 py-6 flex items-center justify-between fixed top-0 left-0 z-50 transition-all duration-300 ${hasBackground ? 'bg-white shadow-md' : 'bg-transparent'
                } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
                <div className="flex items-center gap-2">
                    <Link to="/" className={`text-2xl font-extrabold tracking-tight transition-colors focus:outline-none ${hasBackground ? 'text-black hover:text-gray-700' : 'text-black hover:text-gray-700'
                        }`}>
                        Lifestyle
                    </Link>
                </div>
                <div className="hidden md:flex items-center gap-8">
                    <Link to="/" className={`text-base font-medium transition-colors duration-200 hover:underline focus:outline-none ${hasBackground ? 'text-black/90 hover:text-black' : 'text-black/90 hover:text-black'
                        }`}>Home</Link>
                    <Link to="/about" className={`text-base font-medium transition-colors duration-200 hover:underline focus:outline-none ${hasBackground ? 'text-black/90 hover:text-black' : 'text-black/90 hover:text-black'
                        }`}>About</Link>
                    <Link to="/blog" className={`text-base font-medium transition-colors duration-200 hover:underline focus:outline-none ${hasBackground ? 'text-black/90 hover:text-black' : 'text-black/90 hover:text-black'
                        }`}>Blog</Link>
                    <Link to="/contact" className={`text-base font-medium transition-colors duration-200 hover:underline focus:outline-none ${hasBackground ? 'text-black/90 hover:text-black' : 'text-black/90 hover:text-black'
                        }`}>Contact</Link>
                    <Link to="/signin" className={`text-base font-medium transition-colors duration-200 hover:underline focus:outline-none ${hasBackground ? 'text-black/90 hover:text-black' : 'text-black/90 hover:text-black'
                        }`}>
                        Sign In
                    </Link>
                    <button className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 focus:outline-none ${hasBackground ? 'bg-black text-white hover:bg-gray-800' : 'bg-black/20 text-black hover:bg-black/30'
                        }`}>
                        Get Started
                    </button>
                </div>
                <div className="flex items-center gap-4">
                    <Link to="/women" className={`min-w-[80px] px-6 py-2 rounded-full font-medium transition-colors duration-200 text-center focus:outline-none ${hasBackground ? 'bg-black text-white hover:bg-gray-800' : 'bg-black/20 text-black hover:bg-black/30'
                        }`}>
                        Women
                    </Link>
                    <Link to="/men" className={`min-w-[80px] px-6 py-2 rounded-full font-medium transition-colors duration-200 text-center focus:outline-none ${hasBackground ? 'bg-black text-white hover:bg-gray-800' : 'bg-black/20 text-black hover:bg-black/30'
                        }`}>
                        Men
                    </Link>
                </div>
            </nav>
            {/* Horizontal line */}
            <div className={`fixed top-[88px] left-0 w-full h-px z-40 transition-all duration-300 ${hasBackground ? 'bg-gray-200' : 'bg-transparent'
                } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}></div>
        </>
    );
};

export default Navbar; 