import React from 'react';
import { Link } from 'react-router-dom';

const SignIn: React.FC = () => {
    return (
        <div className="min-h-screen bg-white flex">
            {/* Back to Home Button */}
            <div className="fixed top-6 left-6 z-40">
                <Link
                    to="/"
                    className="flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-sm border border-gray-200 hover:bg-white/90"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </Link>
            </div>

            {/* Left Side - Form */}
            <div className="w-full lg:w-1/2 flex items-start justify-center px-6 py-12 overflow-y-auto h-screen">
                <div className="max-w-md w-full mt-8">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <Link to="/" className="text-3xl font-bold text-gray-900 mb-6 block">
                            Lifestyle
                        </Link>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">
                            Welcome back
                        </h1>
                        <p className="text-gray-600">
                            Sign in to your account
                        </p>
                    </div>

                    {/* Sign In Form */}
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                                placeholder="Enter your password"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                                    Remember me
                                </label>
                            </div>
                            <div className="text-sm">
                                <a href="#" className="font-medium text-black hover:text-gray-700 transition-colors">
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
                        >
                            Sign In
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="mt-8">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">Or continue with</span>
                            </div>
                        </div>
                    </div>

                    {/* Social Sign In */}
                    <div className="mt-6 space-y-3">
                        <button className="w-full px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center">
                            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                            Continue with Google
                        </button>
                    </div>

                    {/* Sign Up Link */}
                    <div className="mt-8 text-center">
                        <p className="text-gray-600">
                            Don't have an account?{' '}
                            <Link to="/signup" className="font-medium text-black hover:text-gray-700 transition-colors">
                                Sign up
                            </Link>
                        </p>
                    </div>

                    {/* Terms */}
                    <div className="mt-8 text-center">
                        <p className="text-xs text-gray-500">
                            By signing in, you agree to our{' '}
                            <a href="#" className="text-black hover:text-gray-700">Terms of Service</a>
                            {' '}and{' '}
                            <a href="#" className="text-black hover:text-gray-700">Privacy Policy</a>
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Side - Background Image */}
            <div className="hidden lg:block lg:w-1/2 fixed right-0 top-0 h-full">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
                    }}
                >
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center max-w-md px-8 text-white">
                        <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-8">
                            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold mb-4">
                            Welcome to Lifestyle
                        </h2>
                        <p className="text-white/90 leading-relaxed">
                            Sign in to access your personalized wellness journey, track your progress, and connect with our community of health enthusiasts.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn; 