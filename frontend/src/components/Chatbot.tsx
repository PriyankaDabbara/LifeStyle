import React, { useState, useRef, useEffect } from 'react';

interface Message {
    id: number;
    text: string;
    isUser: boolean;
    timestamp: Date;
}

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            text: "Hi! I'm your wellness assistant. How can I help you today? I can provide tips on nutrition, fitness, mental health, and lifestyle optimization.",
            isUser: false,
            timestamp: new Date()
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    const wellnessResponses = {
        nutrition: [
            "Focus on whole foods like fruits, vegetables, lean proteins, and healthy fats. Try meal prepping to stay on track!",
            "Hydration is key! Aim for 8-10 glasses of water daily. Consider adding lemon or cucumber for flavor.",
            "Don't skip breakfast! A protein-rich breakfast helps stabilize blood sugar and keeps you energized."
        ],
        fitness: [
            "Start with 30 minutes of moderate exercise daily. Walking, swimming, or cycling are great options!",
            "Strength training 2-3 times per week helps build muscle and boost metabolism.",
            "Remember to warm up and cool down to prevent injuries and improve recovery."
        ],
        mental: [
            "Practice mindfulness with 5-10 minutes of meditation daily. Apps like Headspace can help!",
            "Prioritize 7-9 hours of quality sleep. Create a relaxing bedtime routine.",
            "Take regular breaks throughout the day to reduce stress and improve focus."
        ],
        lifestyle: [
            "Small changes add up! Try taking the stairs, walking during calls, or standing while working.",
            "Connect with friends and family regularly. Social connections are vital for mental health.",
            "Set realistic goals and celebrate small wins. Progress over perfection!"
        ]
    };

    const getResponse = (userMessage: string): string => {
        const message = userMessage.toLowerCase();

        if (message.includes('nutrition') || message.includes('food') || message.includes('diet') || message.includes('eat')) {
            return wellnessResponses.nutrition[Math.floor(Math.random() * wellnessResponses.nutrition.length)];
        } else if (message.includes('fitness') || message.includes('exercise') || message.includes('workout') || message.includes('gym')) {
            return wellnessResponses.fitness[Math.floor(Math.random() * wellnessResponses.fitness.length)];
        } else if (message.includes('mental') || message.includes('stress') || message.includes('anxiety') || message.includes('sleep')) {
            return wellnessResponses.mental[Math.floor(Math.random() * wellnessResponses.mental.length)];
        } else if (message.includes('lifestyle') || message.includes('routine') || message.includes('habit')) {
            return wellnessResponses.lifestyle[Math.floor(Math.random() * wellnessResponses.lifestyle.length)];
        } else if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
            return "Hello! I'm here to help with your wellness journey. What would you like to know about nutrition, fitness, mental health, or lifestyle tips?";
        } else {
            return "I'd love to help! You can ask me about nutrition, fitness, mental health, or lifestyle tips. What's on your mind?";
        }
    };

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return;

        const userMessage: Message = {
            id: messages.length + 1,
            text: inputValue,
            isUser: true,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsTyping(true);

        // Simulate typing delay
        setTimeout(() => {
            const botResponse: Message = {
                id: messages.length + 2,
                text: getResponse(inputValue),
                isUser: false,
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botResponse]);
            setIsTyping(false);
        }, 1000);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Chat Interface */}
            {isOpen && (
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-80 h-96 mb-4 flex flex-col">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 rounded-t-2xl">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold">Wellness Assistant</h3>
                                    <p className="text-sm text-white/80">Online</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white/80 hover:text-white transition-colors"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-3">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-xs px-4 py-2 rounded-2xl ${message.isUser
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-gray-100 text-gray-800'
                                        }`}
                                >
                                    <p className="text-sm">{message.text}</p>
                                    <p className={`text-xs mt-1 ${message.isUser ? 'text-blue-100' : 'text-gray-500'}`}>
                                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </p>
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-2xl">
                                    <div className="flex space-x-1">
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className="p-4 border-t border-gray-200">
                        <div className="flex space-x-2">
                            <input
                                ref={inputRef}
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Ask about wellness..."
                                className="flex-1 px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                            />
                            <button
                                onClick={handleSendMessage}
                                disabled={!inputValue.trim()}
                                className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Chat Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
                {isOpen ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                )}
            </button>
        </div>
    );
};

export default Chatbot; 