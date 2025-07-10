import React from 'react';
import { useTypewriter } from '../hooks/useTypewriter';

interface TypewriterTextProps {
  text: string;
  speed: number;
  delay?: number;
  className?: string;
  showCursor?: boolean;
  cursorClassName?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  speed,
  delay = 0,
  className = '',
  showCursor = true,
  cursorClassName = 'typewriter-cursor'
}) => {
  const { displayText, isTyping } = useTypewriter({ text, speed, delay });

  return (
    <span className={className}>
      {displayText}
      {showCursor && isTyping && (
        <span className={`${cursorClassName} animate-pulse`}>|</span>
      )}
    </span>
  );
};

export default TypewriterText;