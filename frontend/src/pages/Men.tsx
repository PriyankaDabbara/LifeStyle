import React from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Card from '../components/Card';
import Footer from '../components/Footer';

const Men: React.FC = () => {
    const services = [
        {
            title: "Testosterone Optimization",
            description: "Comprehensive testosterone replacement therapy and hormone balance for peak performance.",
            image: "/man-with-headache-holding-pills-bottle-sitting-kitchen-stressed-tired-unhappy-worried-person-suffering-migraine-depression-disease-anxiety-feeling-exhausted-with-dizziness-symptoms.jpg",
            features: ["Testosterone Replacement Therapy", "Enclomiphene", "Hormone Monitoring"]
        },
        {
            title: "Muscle Building & Fitness",
            description: "Advanced fitness optimization and muscle building support for men's performance goals.",
            image: "/handsome-young-athlete-working-out-gym.jpg",
            features: ["Peptide Therapy", "Muscle Recovery", "Performance Enhancement"]
        },
        {
            title: "Weight Loss & Metabolism",
            description: "Targeted weight loss solutions designed for men's unique metabolism and body composition.",
            image: "/happy-bearded-fitness-man-measuring-his-waist-with-tape.jpg",
            features: ["GLP-1 Medications", "Metabolic Optimization", "Body Composition Analysis"]
        },
        {
            title: "Sexual Health & Performance",
            description: "Comprehensive sexual wellness and performance optimization for men's confidence.",
            image: "/worried-man-sitting-bed-morning-serious-thinking-something.jpg",
            features: ["ED Treatment", "Libido Enhancement", "Performance Support"]
        },
        {
            title: "Hair Loss & Aesthetics",
            description: "Advanced hair restoration and aesthetic treatments for men's confidence and appearance.",
            image: "/man-getting-hair-loss-treatment.jpg",
            features: ["Hair Restoration", "Skin Treatments", "Anti-Aging Protocols"]
        },
        {
            title: "Longevity & Anti-Aging",
            description: "Cutting-edge longevity treatments to optimize healthspan and maintain peak performance.",
            image: "/man-using-anti-aging-treatment.jpg",
            features: ["NAD+ Therapy", "Peptide Therapy", "Advanced Anti-Aging"]
        }
    ];

    return (
        <div className="min-h-screen bg-white transition-colors flex flex-col overflow-x-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-neutral-900">
                        Men's Health & Performance
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-600 max-w-4xl mx-auto mb-10 leading-relaxed">
                        Optimize your health, performance, and longevity with science-backed solutions.
                        From hormone optimization to weight management, we're here to help you perform at your best.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button className="px-8 py-4 text-lg">Schedule Consultation</Button>
                        <Button variant="secondary" className="px-8 py-4 text-lg">Learn More</Button>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                            Our Services
                        </h2>
                        <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                            Comprehensive health solutions tailored to men's unique needs and performance goals.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <Card
                                key={index}
                                image={service.image}
                                title={service.title}
                                description={service.description}
                                action={
                                    <div className="mt-4">
                                        <ul className="text-sm text-neutral-600 mb-4 space-y-1">
                                            {service.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center">
                                                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                        <Button variant="secondary" className="w-full">Learn More</Button>
                                    </div>
                                }
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                            Why Choose Our Men's Health Program?
                        </h2>
                        <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                            We understand that men's health and performance require specialized, evidence-based approaches.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-4">Expert Care</h3>
                            <p className="text-neutral-600">Specialized healthcare providers with expertise in men's health and hormone optimization.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-4">Performance Focused</h3>
                            <p className="text-neutral-600">Treatment plans designed to optimize performance, energy, and overall vitality.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-4">Ongoing Support</h3>
                            <p className="text-neutral-600">Continuous guidance and support throughout your health and performance journey.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-500 to-indigo-600">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                        Ready to Optimize Your Performance?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Take the first step towards peak health and performance. Schedule your consultation today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button variant="secondary" className="px-8 py-4 text-lg bg-white text-black hover:text-blue-600 hover:bg-white">
                            Schedule Consultation
                        </Button>
                        <Button variant="secondary" className="px-8 py-4 text-lg border-white text-blue-600 hover:bg-white hover:text-blue-600">
                            Learn More
                        </Button>

                    </div>
                </div>
            </section >

            <Footer />
        </div >
    );
};

export default Men; 