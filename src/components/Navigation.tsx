import React, { useState, useEffect } from 'react';
import { Brain } from 'lucide-react';

interface NavigationProps {
  onNavigate: (page: 'home' | 'faqs') => void;
}

const Navigation: React.FC<NavigationProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navigation background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside or on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.navigation-container')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navigationItems = [
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'FAQ\'s', href: 'faqs-page' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-purple-500/20 shadow-lg shadow-purple-500/10' 
          : 'bg-transparent'
      }`}
    >
      <nav className="navigation-container max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Clickable Logo - Homepage Link with Hover Effect */}
          <a 
            href="#"
            onClick={(e) => {
              e.preventDefault();
              // Perform complete page refresh and scroll to top
              window.location.href = window.location.pathname + window.location.search;
            }}
            className="nav-logo-link flex items-center space-x-2 z-50 group transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50 rounded-lg p-2 -m-2"
            aria-label="clear.ai - Refresh page and go to top"
          >
            <div className="nav-logo-icon-container relative">
              <Brain className="h-8 w-8 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
            </div>
            <span className="nav-logo-text text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-cyan-300 transition-all duration-300 logo">
              clear.ai
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.slice(0, -1).map((item) => (
              item.href === 'faqs-page' ? (
                <button
                  key={item.label}
                  onClick={() => onNavigate('faqs')}
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium relative group flex items-center h-10"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium relative group flex items-center h-10"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              )
            ))}
            
            {/* Styled Contact Button */}
            <a
              href="#contact"
              className="px-6 py-2 bg-gradient-to-r from-purple-600/80 to-cyan-600/80 hover:from-purple-600 hover:to-cyan-600 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 border border-purple-500/30 hover:border-purple-400/50 flex items-center h-10"
            >
              Contact
            </a>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-center space-y-1 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50 rounded-lg transition-all duration-200"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {/* Hamburger Lines */}
            <span 
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out hamburger-line ${
                isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            ></span>
            <span 
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out hamburger-line ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span 
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out hamburger-line ${
                isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          id="mobile-menu"
          className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-purple-500/20 transition-all duration-300 ease-in-out mobile-menu-backdrop ${
            isMenuOpen 
              ? 'opacity-100 translate-y-0 visible' 
              : 'opacity-0 -translate-y-4 invisible'
          }`}
          role="menu"
          aria-orientation="vertical"
        >
          <div className="px-6 py-8 space-y-6">
            {navigationItems.map((item, index) => (
              item.href === 'faqs-page' ? (
                <button
                  key={item.label}
                  onClick={() => {
                    onNavigate('faqs');
                    closeMenu();
                  }}
                  className={`block w-full text-left text-lg text-gray-300 hover:text-purple-400 transition-all duration-300 font-medium py-3 px-4 rounded-lg hover:bg-purple-500/10 transform transition-transform mobile-menu-item ${
                    isMenuOpen 
                      ? 'translate-x-0 opacity-100 visible' 
                      : 'translate-x-4 opacity-0'
                  }`}
                  style={{
                    transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms'
                  }}
                  role="menuitem"
                  tabIndex={isMenuOpen ? 0 : -1}
                >
                  <span className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"></span>
                    <span>{item.label}</span>
                  </span>
                </button>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className={`block text-lg text-gray-300 hover:text-purple-400 transition-all duration-300 font-medium py-3 px-4 rounded-lg hover:bg-purple-500/10 transform transition-transform mobile-menu-item ${
                    isMenuOpen 
                      ? 'translate-x-0 opacity-100 visible' 
                      : 'translate-x-4 opacity-0'
                  }`}
                  style={{
                    transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms'
                  }}
                  role="menuitem"
                  tabIndex={isMenuOpen ? 0 : -1}
                >
                  <span className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"></span>
                    <span>{item.label}</span>
                  </span>
                </a>
              )
            ))}
            
            {/* Mobile CTA Button */}
            <div className={`pt-4 border-t border-gray-700/50 transform transition-all duration-300 mobile-menu-item ${
              isMenuOpen 
                ? 'translate-x-0 opacity-100 visible' 
                : 'translate-x-4 opacity-0'
            }`}
            style={{
              transitionDelay: isMenuOpen ? `${navigationItems.length * 50}ms` : '0ms'
            }}>
              <button 
                onClick={() => {
                  onNavigate('home');
                  closeMenu();
                  // Scroll to contact section after a brief delay
                  setTimeout(() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }}
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-semibold text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div 
            className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm -z-10"
            onClick={closeMenu}
            aria-hidden="true"
          ></div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;