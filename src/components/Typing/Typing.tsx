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
        <div className="Typing-dot" data-i="0" />
        <div className="Typing-dot" data-i="1" />
        <div className="Typing-dot" data-i="2" />
      </div>
    </Bubble>
  );
}
