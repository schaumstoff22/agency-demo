import React, { useEffect } from 'react';
import FAQAccordion from './FAQAccordion';

const FAQPage: React.FC = () => {
  // Scroll to top when FAQ page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // FAQ data
  const faqItems = [
    {
      id: 'ai-automation-work',
      question: 'How does AI automation work for my business?',
      answer: 'lmao'
    },
    {
      id: 'expected-results',
      question: 'What kind of results can I expect?',
      answer: 'lmao'
    },
    {
      id: 'implementation-time',
      question: 'How long does implementation take?',
      answer: 'lmao'
    },
    {
      id: 'technical-support',
      question: 'Do you provide ongoing technical support?',
      answer: 'lmao'
    },
    {
      id: 'data-security',
      question: 'How secure is my business data?',
      answer: 'lmao'
    },
    {
      id: 'pricing-model',
      question: 'What are your pricing models?',
      answer: 'lmao'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-violet-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-4 h-4 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-floating"></div>
        <div className="absolute top-40 right-32 w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-floating-delayed"></div>
        <div className="absolute bottom-40 left-16 w-3 h-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full animate-floating-slow"></div>
        <div className="absolute bottom-20 right-20 w-5 h-5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full animate-floating-delayed"></div>
      </div>

      <section className="relative z-10 px-6 py-20 pt-32 flex items-center justify-center">
        <div className="max-w-full mx-auto text-center">
          {/* FAQ's Badge */}
          <div className="inline-flex items-center space-x-3 bg-gray-800/50 backdrop-blur-sm rounded-full px-5 py-3 mb-12 border border-gray-700/50">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-full blur-sm animate-pulse"></div>
              <div className="relative w-5 h-5 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-white">?</span>
              </div>
            </div>
            <span className="text-sm text-gray-300 font-medium tracking-wide">We're Here To Help</span>
          </div>

          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Frequently Asked Questions 
          </h1>
          
          {/* Interactive FAQ Accordion */}
          <FAQAccordion items={faqItems} allowMultiple={false} />
        </div>
      </section>
    </div>
  );
};

export default FAQPage;