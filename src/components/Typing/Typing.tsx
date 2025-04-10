import React from 'react';
import { Bubble } from '../Bubble';

interface TypingProps {
  text?: string;
}

export function Typing({ text }: TypingProps) {
  return (
    <Bubble type="typing">
      <div className="Typing" aria-busy="true">
        {text && <span className="Typing-text">{text}</span>}
        <div className="Typing-dot" />
        <div className="Typing-dot" />
        <div className="Typing-dot" />
      </div>
    </Bubble>
  );
}
