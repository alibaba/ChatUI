import React from 'react';
import { Bubble } from '../Bubble';

export function Typing() {
  return (
    <Bubble type="typing">
      <div className="Typing" aria-busy="true">
        <div className="Typing-dot" />
        <div className="Typing-dot" />
        <div className="Typing-dot" />
      </div>
    </Bubble>
  );
}
