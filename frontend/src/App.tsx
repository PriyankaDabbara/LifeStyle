import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Button from './components/Button'
import Card from './components/Card'
import NewsletterSignup from './components/NewsletterSignup'
import ArticleCard from './components/ArticleCard'
import FeatureList from './components/FeatureList'
import Footer from './components/Footer'
import TestimonialCarousel from './components/TestimonialCarousel'
import Chatbot from './components/Chatbot'
import Women from './pages/Women'
import Men from './pages/Men'
import About from './pages/About'
import Contact from './pages/Contact'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Blog from './pages/Blog'
import HeroCarousel from './components/HeroCarousel'
import './index.css'

// Home Page Component
const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white transition-colors flex flex-col overflow-x-hidden">
      <Navbar />
      {/* Hero Section with Carousel */}
      <section className="relative">
        <HeroCarousel>
          <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white drop-shadow-lg">
              Not just another lifestyle site
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-10 leading-relaxed drop-shadow">
              Data-driven wellness and science-backed lifestyle tips, designed for longevity,
              optimal healthspan, and mindful living—guided by experts and real experiences.
              You, but better.
            </p>
          </div>
        </HeroCarousel>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              We believe in faster results, because wellness can't wait.
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              We're committed to delivering actionable insights and proven strategies without delays.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-neutral-900 mb-2">24</div>
              <p className="text-neutral-600">hours to access expert content</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-neutral-900 mb-2">100+</div>
              <p className="text-neutral-600">curated lifestyle articles</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-neutral-900 mb-2">10k+</div>
              <p className="text-neutral-600">community members</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Small changes, big results
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              We are here to support your unique needs every step of the way.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
              title="Wellness Tips"
              description="Curated advice and routines to help you feel your best every day."
              action={<Button variant="secondary" className="mt-4">Explore</Button>}
            />
            <Card
              image="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
              title="Healthy Recipes"
              description="Delicious, nutritious recipes to inspire your next meal."
              action={<Button variant="secondary" className="mt-4">Explore</Button>}
            />
            <Card
              image="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
              title="Mindful Living"
              description="Simple practices to bring more mindfulness and joy into your life."
              action={<Button variant="secondary" className="mt-4">Explore</Button>}
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              We're with you every step of the way
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-neutral-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">01</div>
              <h3 className="text-xl font-bold mb-4">Complete your profile</h3>
              <p className="text-neutral-600">Tell us about your lifestyle goals and current habits to get personalized recommendations.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-neutral-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">02</div>
              <h3 className="text-xl font-bold mb-4">Get expert insights</h3>
              <p className="text-neutral-600">Our wellness experts review your profile and provide tailored advice and strategies.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-neutral-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">03</div>
              <h3 className="text-xl font-bold mb-4">Transform your life</h3>
              <p className="text-neutral-600">Start implementing changes and track your progress with our supportive community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature List Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Why Choose Lifestyle?
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Join thousands of people who have transformed their lives with our approach.
            </p>
          </div>
          <FeatureList
            features={[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 10c-4.418 0-8-1.79-8-4V6c0-2.21 3.582-4 8-4s8 1.79 8 4v8c0 2.21-3.582 4-8 4z" /></svg>
                ),
                title: 'Expert Advice',
                description: 'Content curated by wellness and lifestyle experts with proven track records.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                ),
                title: 'Trusted Community',
                description: 'Join a vibrant community focused on healthy living and mutual support.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" /></svg>
                ),
                title: 'Daily Inspiration',
                description: 'Fresh tips and stories to inspire your best self every single day.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                ),
                title: 'Proven Results',
                description: 'Science-backed strategies that have helped thousands achieve their goals.'
              },
            ]}
          />
        </div>
      </section>

      {/* Blog/Article Preview Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Latest Articles
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Discover insights, tips, and stories to help you live your best life.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ArticleCard
              image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80"
              title="10 Morning Habits for a Productive Day"
              excerpt="Start your day right with these science-backed morning routines that set you up for success."
              author="Alex R."
              date="June 10, 2024"
            />
            <ArticleCard
              image="/medium-shot-girl-with-glasses-writing-something.jpg"
              title="Healthy Eating on a Budget"
              excerpt="Delicious, affordable meals that nourish your body and wallet without compromise."
              author="Jamie L."
              date="June 8, 2024"
            />
            <ArticleCard
              image="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"
              title="Mindfulness for Beginners"
              excerpt="Simple steps to bring more calm and focus into your life, starting today."
              author="Morgan S."
              date="June 5, 2024"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Transformations That Speak for Themselves
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              See how our community is redefining what’s possible.
            </p>
          </div>
        </div>
        <TestimonialCarousel />
      </section>

      {/* Newsletter Signup Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <NewsletterSignup />
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  )
}

// Main App Component with Routing
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/women" element={<Women />} />
      <Route path="/men" element={<Men />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  )
}

export default App
