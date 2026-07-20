import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
                            Not just another lifestyle company
                        </h1>
                        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                            Data-driven wellness and science-backed therapies, designed for longevity,
                            optimal health, and personal transformation—guided by top-tier experts and
                            dedicated health coaches. You, but better.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/women" className="px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors">
                                Shop Women
                            </Link>
                            <Link to="/men" className="px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors">
                                Shop Men
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-8">
                                We believe in faster care, because wellness can't wait.
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                We're committed to matching our clients to the right solutions without delays.
                                Your health journey should be seamless, personalized, and results-driven.
                            </p>
                            <div className="grid grid-cols-2 gap-8">
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-black mb-2">0</div>
                                    <div className="text-gray-600">average days to connect</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-black mb-2">100%</div>
                                    <div className="text-gray-600">personalized approach</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-100 rounded-2xl p-8">
                            <div className="text-center">
                                <div className="text-6xl font-bold text-gray-300 mb-4">24/7</div>
                                <p className="text-gray-600">Support available whenever you need it</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Our Core Values
                        </h2>
                        <p className="text-xl text-gray-600">
                            The principles that guide everything we do
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl text-center">
                            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Science-Based</h3>
                            <p className="text-gray-600">
                                Every recommendation is backed by the latest research and clinical evidence.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl text-center">
                            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Personalized</h3>
                            <p className="text-gray-600">
                                Your unique needs, goals, and lifestyle shape every aspect of your journey.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl text-center">
                            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Results-Driven</h3>
                            <p className="text-gray-600">
                                We measure success by the positive changes you experience in your life.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Meet Our Team
                        </h2>
                        <p className="text-xl text-gray-600">
                            Experts dedicated to your wellness journey
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6"></div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Sarah Johnson</h3>
                            <p className="text-gray-600 mb-4">Medical Director</p>
                            <p className="text-sm text-gray-500">
                                Board-certified physician with 15+ years in preventive medicine and wellness optimization.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6"></div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Michael Chen</h3>
                            <p className="text-gray-600 mb-4">CEO & Founder</p>
                            <p className="text-sm text-gray-500">
                                Passionate about making advanced wellness accessible to everyone through technology.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6"></div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Emily Rodriguez</h3>
                            <p className="text-gray-600 mb-4">Lead Nutritionist</p>
                            <p className="text-sm text-gray-500">
                                Registered dietitian specializing in personalized nutrition and lifestyle medicine.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-black text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-8">
                        Ready to start your wellness journey?
                    </h2>
                    <p className="text-xl text-gray-300 mb-12">
                        Join thousands of people who have transformed their lives with our personalized approach.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/women" className="px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors">
                            Get Started - Women
                        </Link>
                        <Link to="/men" className="px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors">
                            Get Started - Men
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default About; 