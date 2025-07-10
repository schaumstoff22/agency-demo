import React, { useEffect } from 'react';
import { X, Check } from 'lucide-react';

interface ServiceData {
  id: string;
  title: string;
  description: string;
  features: string[];
}

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: ServiceData | null;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose, service }) => {
  // Handle escape key and prevent body scroll when modal is open
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      
      // Focus trap - focus the modal when it opens
      const modal = document.getElementById('service-modal');
      if (modal) {
        modal.focus();
      }
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Trap focus within modal
    if (e.key === 'Tab') {
      const modal = e.currentTarget;
      const focusableElements = modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }
  };

  if (!isOpen || !service) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      aria-describedby="service-modal-description"
    >
      <div 
        id="service-modal"
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-gray-900/95 backdrop-blur-md rounded-2xl border border-gray-700/50 shadow-2xl animate-scale-in"
        tabIndex={-1}
        onKeyDown={handleKeyDown}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50"
          aria-label="Close service details"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="p-8">
          {/* Service Header */}
          <div className="text-center mb-8">
            <h2 
              id="service-modal-title"
              className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4"
            >
              {service.title}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mx-auto"></div>
          </div>

          {/* Service Description */}
          <div className="mb-8">
            <p 
              id="service-modal-description"
              className="text-gray-300 text-lg leading-relaxed text-center"
            >
              {service.description}
            </p>
          </div>

          {/* Features List */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-6 text-center">
              Key Features & Benefits
            </h3>
            <ul className="space-y-4 max-w-lg mx-auto">
              {service.features.map((feature, index) => (
                <li 
                  key={index}
                  className="flex items-start space-x-3 text-gray-300"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                  </div>
                  <span className="text-sm leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onClose}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50"
            >
              Get Started
            </button>
            <button
              onClick={onClose}
              className="px-6 py-3 bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 hover:text-white font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
            >
              Request Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;