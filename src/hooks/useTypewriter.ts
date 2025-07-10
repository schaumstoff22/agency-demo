import { useState, useEffect } from 'react';

interface UseTypewriterOptions {
  text: string;
  speed: number;
  delay?: number;
}

export const useTypewriter = ({ text, speed, delay = 0 }: UseTypewriterOptions) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDisplayText('');
    setIsTyping(false);
    setIsComplete(false);

    const startTyping = setTimeout(() => {
      setIsTyping(true);
      let currentIndex = 0;

      const typeInterval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          setIsTyping(false);
          setIsComplete(true);
          clearInterval(typeInterval);
        }
      }, speed);

      return () => clearInterval(typeInterval);
    }, delay);

    return () => clearTimeout(startTyping);
  }, [text, speed, delay]);

  return { displayText, isTyping, isComplete };
};