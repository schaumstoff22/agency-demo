import React, { useState, useEffect } from 'react';
import { ChevronRight, Zap, Sparkles, Brain, Clock, CheckCircle, ArrowRight, Target, MessageCircle, Instagram } from 'lucide-react';
import Navigation from './components/Navigation';
import TypewriterText from './components/TypewriterText';
import ContactModal from './components/ContactModal';
import FAQPage from './components/FAQPage';
import ServiceModal from './components/ServiceModal';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'faqs'>('home');
  const [selectedService, setSelectedService] = useState<{
    id: string;
    title: string;
    description: string;
    features: string[];
  } | null>(null);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);

  const handleNavigation = (page: 'home' | 'faqs') => {
    setCurrentPage(page);
  };

  // Service data
  const serviceData = {
    'chat-agent': {
      id: 'chat-agent',
      title: 'Intelligent Chat Agent',
      description: 'Transform your customer service with our AI-powered chat agents that provide instant, accurate responses 24/7. Our intelligent system learns from every interaction to continuously improve customer satisfaction while reducing response times and operational costs.',
      features: [
        'Natural language processing for human-like conversations',
        '24/7 availability with instant response times',
        'Multi-language support for global reach',
        'Seamless integration with existing CRM systems',
        'Advanced sentiment analysis and escalation protocols',
        'Customizable personality and brand voice alignment',
        'Real-time analytics and performance insights',
        'Automated ticket creation and routing'
      ]
    },
    'crm-automation': {
      id: 'crm-automation',
      title: 'Smart CRM Automation',
      description: 'Revolutionize your customer relationship management with intelligent automation that streamlines lead nurturing, automates follow-ups, and provides predictive insights to boost your sales performance and customer retention rates.',
      features: [
        'Automated lead scoring and qualification',
        'Intelligent email sequences and follow-up campaigns',
        'Predictive analytics for sales forecasting',
        'Automated data entry and contact management',
        'Custom workflow automation for sales processes',
        'Integration with popular CRM platforms',
        'Real-time pipeline tracking and reporting',
        'AI-powered customer behavior analysis'
      ]
    },
    'scheduling': {
      id: 'scheduling',
      title: 'Scheduling Systems',
      description: 'Eliminate scheduling conflicts and streamline appointment management with our intelligent scheduling system that automatically coordinates calendars, sends reminders, and optimizes time slots for maximum efficiency.',
      features: [
        'Automated appointment scheduling and rescheduling',
        'Calendar synchronization across multiple platforms',
        'Smart conflict detection and resolution',
        'Automated reminder notifications via email and SMS',
        'Time zone management for global scheduling',
        'Resource and room booking automation',
        'Integration with video conferencing platforms',
        'Advanced analytics and scheduling optimization'
      ]
    }
  };

  const handleServiceClick = (serviceId: string) => {
    const service = serviceData[serviceId as keyof typeof serviceData];
    if (service) {
      setSelectedService(service);
      setIsServiceModalOpen(true);
    }
  };

  const handleCloseServiceModal = () => {
    setIsServiceModalOpen(false);
    setSelectedService(null);
  };

  // If we're on the FAQ page, render only the FAQ page
  if (currentPage === 'faqs') {
    return (
      <>
        <Navigation onNavigate={handleNavigation} />
        <FAQPage />
      </>
    );
  }

  // Otherwise render the home page
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

      {/* Navigation */}
      <Navigation onNavigate={handleNavigation} />

      {/* Hero Section */}
      <main className="relative z-10 px-6 py-12 flex items-center justify-center min-h-screen">
        <div className="max-w-4xl mx-auto text-center pt-14">
          {/* Logo/Brand - REVERTED TO ORIGINAL */}
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full blur opacity-20 animate-pulse"></div>
              <div className="relative bg-black/80 backdrop-blur-sm rounded-full p-6 border border-purple-500/20">
                <Sparkles className="h-8 w-8 text-purple-400 mx-auto" />
              </div>
            </div>
          </div>

          {/* Main Title - REVERTED TO ORIGINAL */}
          <h1 className="text-6xl md:text-8xl font-bold mb-12 relative clear-ai-heading">
            <TypewriterText
              text="clear"
              speed={50}
              delay={2}
              className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent logo"
              showCursor={false}
            />
            <TypewriterText
              text=".ai"
              speed={50}
              delay={50}
              className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent logo"
            />
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 blur-2xl -z-10"></div>
          </h1>

          {/* Tagline - Updated with responsive margin: mobile mb-6, desktop mb-8 */}
          <p className="text-xl md:text-2xl mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
            <TypewriterText
              text="BUSINESS TOOLS FOR THE FUTURE"
              speed={25}
              delay={100}
              className="reference-font bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
            />
          </p>

          {/* Subheadings - Updated to match reference image styling */}
          <div className="mb-6 md:mb-8 space-y-3 max-w-3xl mx-auto">
            <p className="reference-subheading">
              <TypewriterText
                text="> Effortless AI Integration"
                speed={40}
                delay={200}
                showCursor={false}
              />
            </p>
            <p className="reference-subheading">
              <TypewriterText
                text="> Cut Costs. Save Time. Grow Faster."
                speed={30}
                delay={200}
                showCursor={false}
              />
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full font-semibold text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <span className="relative z-10 flex items-center space-x-2">
                <Zap className="h-5 w-5" />
                <span>Start Now</span>
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-cyan-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Decorative Elements */}
          <div className="mt-12 flex justify-center space-x-16">
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-purple-400 to-transparent"></div>
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-cyan-400 to-transparent"></div>
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-purple-400 to-transparent"></div>
          </div>
        </div>
      </main>

      {/* Placeholder Sections for Navigation Testing */}
      <section id="about" className="relative z-10 px-6 pt-28 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* About Us Badge */}
          <div className="inline-flex items-center space-x-3 bg-gray-800/50 backdrop-blur-sm rounded-full px-5 py-3 mb-12 border border-gray-700/50">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-full blur-sm animate-pulse"></div>
              <Brain className="relative h-5 w-5 text-purple-400" />
            </div>
            <span className="text-sm text-gray-300 font-medium tracking-wide">Who We Are</span>
          </div>

          {/* Visual Elements - Modern graphics representing automation/AI */}
          <div className="relative mb-12">
            {/* Workflow Connection Lines */}
            <div className="flex justify-center items-center space-x-12 md:space-x-40 mb-8">
              {/* Left Side - Manual Tasks */}
              <div className="flex flex-col items-center space-y-4">
                <div className="bg-gray-800/60 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50">
                  <Clock className="h-6 w-6 text-gray-400" />
                </div>
                <div className="w-16 h-px bg-gradient-to-r from-gray-600 to-purple-400"></div>
              </div>

              {/* Center - AI Processing */}
              <div className="flex flex-col items-center">
                <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm rounded-lg p-4 border border-purple-500/30">
                  <Zap className="h-6 w-6 text-purple-400 animate-pulse" />
                </div>
                <span className="text-xs text-gray-500 mt-2 font-mono">AI Processing</span>
              </div>

              {/* Right Side - Automated Results */}
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-px bg-gradient-to-r from-cyan-400 to-green-400"></div>
                <div className="bg-gray-800/60 backdrop-blur-sm rounded-lg p-4 border border-green-500/30">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                </div>
              </div>
            </div>

            {/* Floating Efficiency Symbols */}
            <div className="absolute top-0 left-1/4 w-3 h-3 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-floating opacity-60"></div>
            <div className="absolute top-8 right-1/4 w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-floating-delayed opacity-40"></div>
            <div className="absolute bottom-4 left-1/3 w-4 h-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full animate-floating-slow opacity-30"></div>
          </div>

          {/* Main Message - Bold, larger, prominent */}
          <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed max-w-3xl mx-auto">
            We automate your workflow using the most up-to-date AI, freeing you from the manual tasks and daily hassle.
          </p>

          {/* Supporting Visual Elements */}
          <div className="pb-20 mt-12 flex justify-center space-x-12 md:space-x-40">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-full flex items-center justify-center border border-purple-500/30">
                <ArrowRight className="h-5 w-5 text-purple-400" />
              </div>
              <span className="text-xs text-gray-500 font-mono">Streamlined</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-600/20 to-green-600/20 rounded-full flex items-center justify-center border border-cyan-500/30">
                <Sparkles className="h-5 w-5 text-cyan-400" />
              </div>
              <span className="text-xs text-gray-500 font-mono">Intelligent</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-gradient-to-r from-green-600/20 to-purple-600/20 rounded-full flex items-center justify-center border border-green-500/30">
                <Target className="h-5 w-5 text-green-400" />
              </div>
              <span className="text-xs text-gray-500 font-mono">Efficient</span>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="relative z-10 px-6 pb-20 pt-28 flex items-center justify-center bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          {/* Services Badge */}
          <div className="inline-flex items-center space-x-3 bg-gray-800/50 backdrop-blur-sm rounded-full px-5 py-3 mb-12 border border-gray-700/50">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-full blur-sm animate-pulse"></div>
              <Zap className="relative h-5 w-5 text-purple-400" />
            </div>
            <span className="text-sm text-gray-300 font-medium tracking-wide">What We Offer</span>
          </div>

          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Our Services
          </h2>
          
          {/* Service Panels Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 max-w-7xl mx-auto">
            
            {/* Chat Agent Panel */}
            <div 
              className="service-panel group bg-gray-800/40 backdrop-blur-sm rounded-xl p-5 border border-gray-700/50 hover:border-purple-500/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 cursor-pointer"
              onClick={() => handleServiceClick('chat-agent')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleServiceClick('chat-agent');
                }
              }}
              aria-label="Learn more about Intelligent Chat Agent service"
            >
              {/* Icon Container */}
              <div className="relative mb-12 flex justify-center">
                <div className="absolute -inset-3 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-full p-3 border border-purple-500/30 group-hover:border-purple-400/50 transition-all duration-300">
                  <div className="w-10 h-10 bg-gray-900/80 rounded-lg flex items-center justify-center relative">
                    <div className="absolute inset-1.5 bg-gradient-to-br from-purple-400/20 to-cyan-400/20 rounded-md"></div>
                    <div className="relative flex flex-col space-y-1">
                      <div className="w-5 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"></div>
                      <div className="w-3 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                      <div className="w-4 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Heading */}
              <h3 className="service-panel-heading text-xl font-bold mb-4 leading-tight">
                Intelligent Chat Agent
              </h3>
              
              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed mb-5 min-h-[96px] text-left">
                Transform customer service with AI-powered chat agents that provide instant, accurate responses 24/7.
              </p>
              
              {/* Learn More Button */}
              <button 
                className="group/btn w-full px-5 py-2.5 bg-gradient-to-r from-purple-600/80 to-cyan-600/80 hover:from-purple-600 hover:to-cyan-600 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 border border-purple-500/30 hover:border-purple-400/50 flex items-center justify-center space-x-2"
                onClick={(e) => {
                  e.stopPropagation();
                  handleServiceClick('chat-agent');
                }}
              >
                <span>Learn More</span>
                <ChevronRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            {/* Automated CRM Panel */}
            <div 
              className="service-panel group bg-gray-800/40 backdrop-blur-sm rounded-xl p-5 border border-gray-700/50 hover:border-purple-500/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 cursor-pointer"
              onClick={() => handleServiceClick('crm-automation')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleServiceClick('crm-automation');
                }
              }}
              aria-label="Learn more about Smart CRM Automation service"
            >
              {/* Icon Container */}
              <div className="relative mb-12 flex justify-center">
                <div className="absolute -inset-3 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-full p-3 border border-purple-500/30 group-hover:border-purple-400/50 transition-all duration-300">
                  <div className="w-10 h-10 bg-gray-900/80 rounded-lg flex items-center justify-center relative">
                    <div className="absolute inset-1.5 bg-gradient-to-br from-purple-400/20 to-cyan-400/20 rounded-md"></div>
                    <div className="relative grid grid-cols-2 gap-1">
                      <div className="w-1.5 h-1.5 bg-gradient-to-br from-purple-400 to-cyan-400 rounded-sm"></div>
                      <div className="w-1.5 h-1.5 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-sm"></div>
                      <div className="w-1.5 h-1.5 bg-gradient-to-br from-purple-400 to-cyan-400 rounded-sm"></div>
                      <div className="w-1.5 h-1.5 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-sm"></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-5 h-px bg-gradient-to-r from-purple-400 to-cyan-400 rotate-45"></div>
                      <div className="w-5 h-px bg-gradient-to-r from-cyan-400 to-purple-400 -rotate-45 absolute"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Heading */}
              <h3 className="service-panel-heading text-xl font-bold mb-4 leading-tight">
                Smart CRM Automation
              </h3>
              
              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed mb-5 min-h-[96px] text-left">
                Revolutionize customer relationship management with intelligent automation and predictive insights.
              </p>
              
              {/* Learn More Button */}
              <button 
                className="group/btn w-full px-5 py-2.5 bg-gradient-to-r from-purple-600/80 to-cyan-600/80 hover:from-purple-600 hover:to-cyan-600 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 border border-purple-500/30 hover:border-purple-400/50 flex items-center justify-center space-x-2"
                onClick={(e) => {
                  e.stopPropagation();
                  handleServiceClick('crm-automation');
                }}
              >
                <span>Learn More</span>
                <ChevronRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            {/* Scheduling Systems Panel */}
            <div 
              className="service-panel group bg-gray-800/40 backdrop-blur-sm rounded-xl p-5 border border-gray-700/50 hover:border-purple-500/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 cursor-pointer"
              onClick={() => handleServiceClick('scheduling')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleServiceClick('scheduling');
                }
              }}
              aria-label="Learn more about Scheduling Systems service"
            >
              {/* Icon Container */}
              <div className="relative mb-12 flex justify-center">
                <div className="absolute -inset-3 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-full p-3 border border-purple-500/30 group-hover:border-purple-400/50 transition-all duration-300">
                  <div className="w-10 h-10 bg-gray-900/80 rounded-lg flex items-center justify-center relative">
                    <div className="absolute inset-1.5 bg-gradient-to-br from-purple-400/20 to-cyan-400/20 rounded-md"></div>
                    <div className="relative">
                      {/* Calendar Grid */}
                      <div className="grid grid-cols-3 gap-px">
                        {[...Array(9)].map((_, i) => (
                          <div key={i} className={`w-0.5 h-0.5 rounded-sm ${
                            i === 4 ? 'bg-gradient-to-br from-purple-400 to-cyan-400' : 
                            i === 1 || i === 7 ? 'bg-gradient-to-br from-cyan-400 to-purple-400' : 
                            'bg-gray-600'
                          }`}></div>
                        ))}
                      </div>
                      {/* Clock Hands */}
                      <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-gray-900/90 rounded-full flex items-center justify-center">
                        <div className="w-px h-1.5 bg-gradient-to-t from-purple-400 to-cyan-400 absolute transform -rotate-45"></div>
                        <div className="w-px h-1 bg-gradient-to-t from-cyan-400 to-purple-400 absolute transform rotate-90"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Heading */}
              <h3 className="service-panel-heading text-xl font-bold mb-4 leading-tight">
                Scheduling Systems
              </h3>
              
              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed mb-5 min-h-[96px] text-left">
                Eliminate scheduling conflicts with intelligent automation that coordinates calendars and optimizes time slots.
              </p>
              
              {/* Learn More Button */}
              <button 
                className="group/btn w-full px-5 py-2.5 bg-gradient-to-r from-purple-600/80 to-cyan-600/80 hover:from-purple-600 hover:to-cyan-600 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 border border-purple-500/30 hover:border-purple-400/50 flex items-center justify-center space-x-2"
                onClick={(e) => {
                  e.stopPropagation();
                  handleServiceClick('scheduling');
                }}
              >
                <span>Learn More</span>
                <ChevronRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Coming Soon Panels - Centered */}
          <div className="flex flex-wrap justify-center gap-6 mt-6 max-w-7xl mx-auto">
            {/* Future Service Panel #1 */}
            <div className="group bg-gray-800/20 backdrop-blur-sm rounded-xl p-5 border border-gray-700/30 transition-all duration-500 opacity-75 w-72 flex-shrink-0">
              {/* Icon Container */}
              <div className="relative mb-12 flex justify-center">
                <div className="relative bg-gradient-to-r from-gray-600/20 to-gray-500/20 rounded-full p-3 border border-gray-600/30">
                  <div className="w-10 h-10 bg-gray-900/60 rounded-lg flex items-center justify-center relative">
                    <div className="absolute inset-1.5 bg-gradient-to-br from-gray-500/20 to-gray-400/20 rounded-md"></div>
                    <div className="relative">
                      {/* Gear/Cog Icon */}
                      <div className="w-5 h-5 border-2 border-gray-500 rounded-full relative">
                        <div className="absolute inset-1 border border-gray-500 rounded-full"></div>
                        {/* Gear Teeth */}
                        {[...Array(8)].map((_, i) => (
                          <div key={i} className={`absolute w-0.5 h-1.5 bg-gray-500 transform origin-bottom`} 
                               style={{
                                 left: '50%',
                                 bottom: '50%',
                                 marginLeft: '-1px',
                                 transform: `rotate(${i * 45}deg) translateY(-10px)`
                               }}></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Heading */}
              <h3 className="text-xl font-bold text-gray-400 mb-4 leading-tight">
                Coming Soon
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed mb-4 min-h-[60px] flex items-center justify-center">
                New solutions in development
              </p>
              
              {/* Disabled Learn More Button */}
              <button disabled className="w-full px-5 py-2.5 bg-gray-700/40 text-gray-500 font-medium rounded-full border border-gray-600/30 cursor-not-allowed flex items-center justify-center space-x-2">
                <span>Learn More</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            {/* Future Service Panel #2 */}
            <div className="group bg-gray-800/20 backdrop-blur-sm rounded-xl p-5 border border-gray-700/30 transition-all duration-500 opacity-75 w-72 flex-shrink-0">
              {/* Icon Container */}
              <div className="relative mb-12 flex justify-center">
                <div className="relative bg-gradient-to-r from-gray-600/20 to-gray-500/20 rounded-full p-3 border border-gray-600/30">
                  <div className="w-10 h-10 bg-gray-900/60 rounded-lg flex items-center justify-center relative">
                    <div className="absolute inset-1.5 bg-gradient-to-br from-gray-500/20 to-gray-400/20 rounded-md"></div>
                    <div className="relative">
                      {/* Rocket Icon */}
                      <div className="flex flex-col items-center">
                        {/* Rocket Body */}
                        <div className="w-1.5 h-3 bg-gray-500 rounded-t-full"></div>
                        {/* Rocket Fins */}
                        <div className="relative w-3 h-1.5">
                          <div className="absolute left-0 top-0 w-0.5 h-1.5 bg-gray-500 transform -skew-x-12"></div>
                          <div className="absolute right-0 top-0 w-0.5 h-1.5 bg-gray-500 transform skew-x-12"></div>
                        </div>
                        {/* Exhaust */}
                        <div className="w-0.5 h-0.5 bg-gray-500 rounded-full opacity-60"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Heading */}
              <h3 className="text-xl font-bold text-gray-400 mb-4 leading-tight">
                Coming Soon
              </h3>
              
              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed mb-5 min-h-[60px] flex items-center justify-center">
                Future service under development
              </p>
              
              {/* Disabled Learn More Button */}
              <button disabled className="w-full px-5 py-2.5 bg-gray-700/40 text-gray-500 font-medium rounded-full border border-gray-600/30 cursor-not-allowed flex items-center justify-center space-x-2">
                <span>Learn More</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 px-6 pt-28 pb-20 flex items-center justify-center bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          {/* Contact Badge */}
          <div className="inline-flex items-center space-x-3 bg-gray-800/50 backdrop-blur-sm rounded-full px-5 py-3 mb-12 border border-gray-700/50">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-full blur-sm animate-pulse"></div>
              <Target className="relative h-5 w-5 text-purple-400" />
            </div>
            <span className="text-sm text-gray-300 font-medium tracking-wide">Get In Touch</span>
          </div>

          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Contact Us
          </h2>
          
          {/* Contact Us Button */}
          <div className="mb-12">
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="group relative px-12 py-6 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl font-bold text-white text-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 hover:shadow-3xl border border-purple-500/30 hover:border-purple-400/50"
            >
              <span className="relative z-10 flex items-center space-x-3">
                <MessageCircle className="h-6 w-6" />
                <span>Contact Us</span>
                <ChevronRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-cyan-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Follow Us Section - Streamlined */}
          <div className="max-w-md mx-auto">
            <h3 className="text-xl font-semibold text-white mb-6">Follow Us</h3>
            
            {/* Social Icons - Horizontal Layout */}
            <div className="flex justify-center space-x-6">
              {/* Instagram */}
              <a
                href="#"
                className="group relative p-4 bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-purple-500/40 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20"
                aria-label="Follow us on Instagram"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Instagram className="relative h-8 w-8 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
              </a>

              {/* X (Twitter) */}
              <a
                href="#"
                className="group relative p-4 bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-cyan-500/40 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20"
                aria-label="Follow us on X (formerly Twitter)"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-blue-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative h-8 w-8 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-400 group-hover:text-cyan-400 transition-colors duration-300">𝕏</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />

      {/* Service Modal */}
      <ServiceModal 
        isOpen={isServiceModalOpen}
        onClose={handleCloseServiceModal}
        service={selectedService}
      />

      {/* Footer */}
      <footer className="relative z-10 px-6 py-8 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            © 2025 clear.ai - Pioneering AI Automation
          </p>
        </div>
      </footer>

      {/* Chatbot Agent Placeholder - Visible to Users */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="group relative">
          {/* Glow Effect */}
          <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
          
          {/* Main Placeholder Button */}
          <div className="relative bg-gray-800/90 backdrop-blur-sm rounded-full p-4 border border-purple-500/30 hover:border-purple-400/50 shadow-lg hover:shadow-purple-500/25 transition-all duration-300 cursor-pointer group-hover:scale-105">
            <MessageCircle className="h-6 w-6 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
            
            {/* Tooltip */}
            <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900/95 backdrop-blur-sm text-white text-sm rounded-lg border border-gray-700/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
              <span className="text-purple-400 font-medium">AI Chat Assistant</span>
              <br />
              <span className="text-gray-400 text-xs">Coming Soon</span>
              {/* Tooltip Arrow */}
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900/95"></div>
            </div>
          </div>
          
          {/* Pulsing Indicator Dot */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* 
        ===========================================
        CHATBOT AGENT INTEGRATION NOTES
        ===========================================
        
        The visible placeholder above will be replaced with the actual ChatbotAgent component.
        
        Expected features for future implementation:
        - Expandable chat interface
        - AI-powered conversation capabilities
        - Integration with clear.ai services
        - Responsive design for mobile and desktop
        - Accessibility features (keyboard navigation, screen reader support)
        
        TODO: Replace placeholder with <ChatbotAgent /> component
      */}
    </div>
  );
}

export default App;