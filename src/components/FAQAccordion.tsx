import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  allowMultiple?: boolean;
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ items, allowMultiple = false }) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      
      if (newSet.has(id)) {
        // Close the item
        newSet.delete(id);
      } else {
        // Open the item
        if (!allowMultiple) {
          // Close all other items if multiple isn't allowed
          newSet.clear();
        }
        newSet.add(id);
      }
      
      return newSet;
    });
  };

  const handleKeyDown = (event: React.KeyboardEvent, id: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleItem(id);
    }
  };

  return (
    <div className="max-w-full mx-auto space-y-4">
      {items.map((item) => {
        const isOpen = openItems.has(item.id);
        
        return (
          <div
            key={item.id}
            className="bg-gray-800/30 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 overflow-hidden"
          >
            {/* Question Header - Clickable */}
            <button
              onClick={() => toggleItem(item.id)}
              onKeyDown={(e) => handleKeyDown(e, item.id)}
              className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-700/20 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50 focus:ring-inset"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${item.id}`}
              aria-describedby={`faq-question-${item.id}`}
            >
              <h3 
                id={`faq-question-${item.id}`}
                className="text-lg font-semibold text-white pr-4 flex-1"
              >
                {item.question}
              </h3>
              
              {/* Arrow Icon */}
              <div className="flex-shrink-0">
                <ChevronDown
                  className={`h-5 w-5 text-purple-400 transition-transform duration-300 ease-in-out ${
                    isOpen ? 'transform rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </div>
            </button>

            {/* Answer Content - Expandable */}
            <div
              id={`faq-answer-${item.id}`}
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
              aria-hidden={!isOpen}
            >
              <div className="px-6 pb-5 pt-0">
                <div className="border-t border-gray-700/30 pt-4">
                  <p className="text-gray-300 leading-relaxed text-left">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FAQAccordion;