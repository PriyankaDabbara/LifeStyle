import React from 'react';

// Inline Testimonial component
interface TestimonialProps {
    quote: string;
    author: string;
    className?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, className = '' }) => {
    return (
        <div
            className={`bg-white rounded-xl shadow-lg p-6 mx-4 text-center min-w-[300px] max-w-[350px] flex-shrink-0 ${className}`}
        >
            <p className="text-lg italic text-neutral-800 leading-relaxed mb-4">
                "{quote}"
            </p>
            <p className="text-base font-semibold text-neutral-600">
                — {author}
            </p>
        </div>
    );
};

const testimonials = [
    {
        quote: "I'm already starting to feel better and can't wait for the rest of my meds to come to feel even better.",
        author: "Laurie Shifler",
    },
    {
        quote: "Seeing the improvement in my labs and feeling so much better makes me so thankful to have started OMM.",
        author: "Megan Stoy",
    },
    {
        quote: "I reviewed other providers and found OMM to offer a wide selection of treatments with affordable prices.",
        author: "Joe Udell",
    },
    {
        quote: "Great customer service. Quick and easy to schedule lab work. Once my results came back my consult was within a few days.",
        author: "Chelsea",
    },
    {
        quote: "Between PCOS and hypothyroidism, I felt like there was nothing I could do to lose weight. Thanks to OMM, I finally found the winning combination!",
        author: "Jessica Thrasher",
    },
    {
        quote: "Throughout the process the backend support has been incredible, any questions I have had they answer quickly.",
        author: "Brian Grimmick",
    },
    {
        quote: "Extremely knowledgeable company. I'm loving the results.",
        author: "Dan Henderson",
    },
    {
        quote: "Feeling like Ric Flare now that I got my hormones fixed!!",
        author: "Joel Staley",
    },
    {
        quote: "This company has been hugely helpful for my biohacking goals.",
        author: "Jordan Bowditch",
    },
    {
        quote: "Packaging is great. Product is great. I feel energized and body is looking trim and slim.",
        author: "Basil H.",
    },
    {
        quote: "They are very transparent, and knowledgeable staff explain your lab results to you.",
        author: "Robert Slane",
    },
    {
        quote: "OMMhas been increasingly responsive to my health questions and concerns. I'm excited to start my wellness journey with OMM.",
        author: "Sindy Warren",
    },
];

const TestimonialCarousel: React.FC = () => {
    // Duplicate testimonials to create seamless infinite scroll
    const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

    return (
        <div className="relative w-full overflow-hidden bg-neutral-50 py-12">
            {/* Gradient overlays for smooth fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-neutral-50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-neutral-50 to-transparent z-10 pointer-events-none"></div>

            {/* Scrolling container */}
            <div className="flex animate-scroll">
                {duplicatedTestimonials.map((testimonial, idx) => (
                    <Testimonial
                        key={idx}
                        quote={testimonial.quote}
                        author={testimonial.author}
                    />
                ))}
            </div>
        </div>
    );
};

export default TestimonialCarousel;
