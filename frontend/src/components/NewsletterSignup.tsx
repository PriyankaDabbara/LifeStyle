import React, { useState } from 'react';
import Button from './Button';

const NewsletterSignup: React.FC = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="bg-neutral-100 dark:bg-neutral-900 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center max-w-xl mx-auto">
            <h2 className="text-3xl font-bold mb-2 tracking-tight">Stay Inspired</h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-6">Subscribe to our newsletter for the latest lifestyle tips, articles, and exclusive content.</p>
            {submitted ? (
                <div className="text-green-600 dark:text-green-400 font-semibold">Thank you for subscribing!</div>
            ) : (
                <form onSubmit={handleSubmit} className="w-full flex flex-col sm:flex-row gap-3 items-center justify-center">
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full sm:w-auto flex-1 px-4 py-2 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                    />
                    <Button type="submit" className="w-full sm:w-auto mt-2 sm:mt-0">Subscribe</Button>
                </form>
            )}
        </div>
    );
};

export default NewsletterSignup; 