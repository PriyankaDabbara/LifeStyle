import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Blog: React.FC = () => {
    const featuredArticles = [
        {
            id: 1,
            title: "The Science Behind Hormone Optimization",
            excerpt: "Discover how modern science is revolutionizing our understanding of hormone balance and its impact on overall wellness.",
            category: "Hormone Health",
            readTime: "5 min read",
            image: ""
        },
        {
            id: 2,
            title: "Nutrition Myths Debunked: What Really Works",
            excerpt: "We separate fact from fiction in the world of nutrition and reveal evidence-based strategies for optimal health.",
            category: "Nutrition",
            readTime: "7 min read",
            image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80"
        },
        {
            id: 3,
            title: "The Complete Guide to Sleep Optimization",
            excerpt: "Learn the science of sleep and practical strategies to improve your sleep quality for better health and performance.",
            category: "Sleep",
            readTime: "6 min read",
            image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2065&q=80"
        }
    ];

    const recentArticles = [
        {
            id: 4,
            title: "Stress Management Techniques That Actually Work",
            excerpt: "Evidence-based approaches to managing stress and improving mental well-being in today's fast-paced world.",
            category: "Mental Health",
            readTime: "4 min read",
            date: "2 days ago"
        },
        {
            id: 5,
            title: "The Future of Personalized Medicine",
            excerpt: "How genetic testing and AI are revolutionizing healthcare and creating truly personalized treatment plans.",
            category: "Innovation",
            readTime: "8 min read",
            date: "1 week ago"
        },
        {
            id: 6,
            title: "Exercise Science: Building the Perfect Workout",
            excerpt: "Understanding the principles of exercise science to create effective, sustainable fitness routines.",
            category: "Fitness",
            readTime: "6 min read",
            date: "2 weeks ago"
        },
        {
            id: 7,
            title: "Supplements: What You Need to Know",
            excerpt: "A comprehensive guide to choosing the right supplements for your health goals and lifestyle.",
            category: "Supplements",
            readTime: "5 min read",
            date: "3 weeks ago"
        }
    ];

    const categories = [
        "All Posts",
        "Hormone Health",
        "Nutrition",
        "Sleep",
        "Mental Health",
        "Fitness",
        "Supplements",
        "Innovation"
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
                            Wellness Blog
                        </h1>
                        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                            Expert insights, research-backed strategies, and practical tips to help you
                            optimize your health and live your best life.
                        </p>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="py-12 bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-wrap gap-4 justify-center">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                className={`px-6 py-3 rounded-full font-medium transition-colors ${index === 0
                                    ? 'bg-black text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Articles */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                        Featured Articles
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {featuredArticles.map((article) => (
                            <article key={article.id} className="group">
                                <div className="aspect-[4/3] bg-gray-200 rounded-2xl mb-6 overflow-hidden">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-4 text-sm text-gray-500">
                                        <span className="px-3 py-1 bg-gray-100 rounded-full">
                                            {article.category}
                                        </span>
                                        <span>{article.readTime}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-black transition-colors">
                                        {article.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {article.excerpt}
                                    </p>
                                    <Link
                                        to={`/blog/${article.id}`}
                                        className="inline-flex items-center text-black font-medium hover:text-gray-700 transition-colors"
                                    >
                                        Read more
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recent Articles */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                        Recent Articles
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {recentArticles.map((article) => (
                            <article key={article.id} className="bg-white p-8 rounded-2xl group">
                                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                    <span className="px-3 py-1 bg-gray-100 rounded-full">
                                        {article.category}
                                    </span>
                                    <span>{article.readTime}</span>
                                    <span>{article.date}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-black transition-colors">
                                    {article.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {article.excerpt}
                                </p>
                                <Link
                                    to={`/blog/${article.id}`}
                                    className="inline-flex items-center text-black font-medium hover:text-gray-700 transition-colors"
                                >
                                    Read more
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Signup */}
            <section className="py-20 bg-black text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-8">
                        Stay updated with the latest insights
                    </h2>
                    <p className="text-xl text-gray-300 mb-12">
                        Get weekly wellness tips, research updates, and exclusive content delivered to your inbox.
                    </p>
                    <div className="max-w-md mx-auto">
                        <div className="flex gap-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-6 py-4 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-white"
                            />
                            <button className="px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors">
                                Subscribe
                            </button>
                        </div>
                        <p className="text-sm text-gray-400 mt-4">
                            No spam, unsubscribe at any time.
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Blog; 