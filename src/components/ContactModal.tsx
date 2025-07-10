import React, { useState, useEffect } from 'react';
import { X, Send, Phone, Mail, MapPin, MessageCircle, CheckCircle, AlertCircle, Instagram } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

interface FormStatus {
  type: 'success' | 'error' | null;
  message: string;
}

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<FormStatus>({ type: null, message: '' });

  const subjectOptions = [
    { value: '', label: 'Select a subject...' },
    { value: 'general', label: 'General Inquiry' },
    { value: 'services', label: 'Services & Solutions' },
    { value: 'support', label: 'Technical Support' },
    { value: 'partnership', label: 'Partnership Opportunities' },
    { value: 'pricing', label: 'Pricing Information' },
    { value: 'demo', label: 'Request a Demo' }
  ];

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
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Subject validation
    if (!formData.subject) {
      newErrors.subject = 'Please select a subject';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 100) {
      newErrors.message = 'Message must be at least 100 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate success/error randomly for demo
      const isSuccess = Math.random() > 0.3;
      
      if (isSuccess) {
        setStatus({
          type: 'success',
          message: 'Thank you for your message! We\'ll get back to you within 24 hours.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({
          type: 'error',
          message: 'Sorry, there was an error sending your message. Please try again or contact us directly.'
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-900/95 backdrop-blur-md rounded-2xl border border-gray-700/50 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200"
          aria-label="Close modal"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="p-8">
          {/* Modal Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Send Us a Message
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Ready to transform your business with AI automation? We'd love to hear from you and discuss how we can help streamline your operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form - Takes up 2/3 of the space */}
            <div className="lg:col-span-2">
              {/* Status Messages */}
              {status.type && (
                <div className={`mb-6 p-4 rounded-lg border flex items-start space-x-3 ${
                  status.type === 'success' 
                    ? 'bg-green-900/20 border-green-500/30 text-green-300' 
                    : 'bg-red-900/20 border-red-500/30 text-red-300'
                }`}>
                  {status.type === 'success' ? (
                    <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  )}
                  <p className="text-sm">{status.message}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200 ${
                        errors.name ? 'border-red-500' : 'border-gray-600 hover:border-gray-500'
                      }`}
                      placeholder="Enter your full name"
                      disabled={isSubmitting}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200 ${
                        errors.email ? 'border-red-500' : 'border-gray-600 hover:border-gray-500'
                      }`}
                      placeholder="Enter your email address"
                      disabled={isSubmitting}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject Dropdown */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200 ${
                      errors.subject ? 'border-red-500' : 'border-gray-600 hover:border-gray-500'
                    }`}
                    disabled={isSubmitting}
                  >
                    {subjectOptions.map(option => (
                      <option key={option.value} value={option.value} className="bg-gray-800">
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-400">{errors.subject}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message * <span className="text-gray-500">(minimum 100 characters)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200 resize-vertical ${
                      errors.message ? 'border-red-500' : 'border-gray-600 hover:border-gray-500'
                    }`}
                    placeholder="Tell us about your project, goals, or any questions you have..."
                    disabled={isSubmitting}
                  />
                  <div className="flex justify-between items-center mt-1">
                    {errors.message ? (
                      <p className="text-sm text-red-400">{errors.message}</p>
                    ) : (
                      <p className="text-sm text-gray-500">
                        {formData.message.length}/100 characters
                      </p>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 disabled:transform-none disabled:shadow-none flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information Sidebar - Takes up 1/3 of the space */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Get in touch</h3>
                
                <div className="space-y-4">
                  {/* Phone */}
                  <div className="flex items-start space-x-3">
                    <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-lg p-2 border border-purple-500/30">
                      <Phone className="h-4 w-4 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-sm mb-1">Phone</h4>
                      <p className="text-gray-300 text-sm">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-3">
                    <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-lg p-2 border border-purple-500/30">
                      <Mail className="h-4 w-4 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-sm mb-1">Email</h4>
                      <p className="text-gray-300 text-sm">hello@clear.ai</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start space-x-3">
                    <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-lg p-2 border border-purple-500/30">
                      <MapPin className="h-4 w-4 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-sm mb-1">Office</h4>
                      <p className="text-gray-300 text-sm">123 Innovation Drive</p>
                      <p className="text-gray-300 text-sm">Tech Valley, CA 94000</p>
                    </div>
                  </div>

                  {/* Live Chat */}
                  <div className="flex items-start space-x-3">
                    <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-lg p-2 border border-purple-500/30">
                      <MessageCircle className="h-4 w-4 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-sm mb-1">Live Chat</h4>
                      <p className="text-gray-300 text-sm">Available on website</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;