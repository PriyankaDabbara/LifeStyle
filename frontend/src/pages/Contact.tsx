import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
                            Get in touch
                        </h1>
                        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                            Have questions? We're here to help. Our team is ready to support you
                            on your wellness journey with personalized guidance and expert advice.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">
                                Send us a message
                            </h2>
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                                            placeholder="Your first name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                                            placeholder="Your last name"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Subject
                                    </label>
                                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent">
                                        <option>General Inquiry</option>
                                        <option>Product Questions</option>
                                        <option>Technical Support</option>
                                        <option>Partnership</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        rows={6}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                                        placeholder="Tell us how we can help you..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">
                                Contact Information
                            </h2>
                            <div className="space-y-8">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                                        <p className="text-gray-600">info@lifestyle.com</p>
                                        <p className="text-gray-600">support@lifestyle.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                                        <p className="text-gray-600">+1 (***) ***-4567</p>
                                        <p className="text-gray-600">Mon-Fri: 9AM-6PM EST</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
                                        <p className="text-gray-600">123 LifeStyle Street</p>
                                        <p className="text-gray-600">New York, NY 10001</p>
                                        <p className="text-gray-600">United States</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-xl text-gray-600">
                            Quick answers to common questions
                        </p>
                    </div>
                    <div className="space-y-6">
                        <div className="bg-white p-8 rounded-2xl">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                How quickly will I see results?
                            </h3>
                            <p className="text-gray-600">
                                Results vary by individual and depend on your specific goals and starting point.
                                Most clients begin to notice positive changes within 2-4 weeks of starting their
                                personalized program.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                Do you offer consultations?
                            </h3>
                            <p className="text-gray-600">
                                Yes! We offer free initial consultations to understand your needs and goals.
                                Our experts will create a personalized plan tailored to your unique situation.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                What if I'm not satisfied with my results?
                            </h3>
                            <p className="text-gray-600">
                                We stand behind our programs with a 30-day satisfaction guarantee. If you're
                                not completely satisfied, we'll work with you to adjust your plan or provide
                                a full refund.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                How do I get started?
                            </h3>
                            <p className="text-gray-600">
                                Getting started is easy! Simply schedule a consultation, complete your health
                                assessment, and we'll create your personalized wellness plan. You can begin
                                your journey immediately.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Contact; 