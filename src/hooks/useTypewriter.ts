import { useState, useEffect } from 'react';
import getRandomInt from '../utils/getRandomInt';

export interface Options {
  interval?: number;
  step?: number | number[];
  initialIndex?: number;
}

export function useTypewriter(content: string, options: Options = {}) {
  const { interval = 80, step = 1, initialIndex = 5 } = options;
  const length = content.length;

  const [index, setIndex] = useState(initialIndex);

  useEffect(() => {
    if (index < length) {
      const timer = setTimeout(() => {
        const currentStep = Array.isArray(step) ? getRandomInt(step[0], step[1]) : step;
        setIndex((prev) => prev + currentStep);
      }, interval);

      return () => {
        clearTimeout(timer);
      };
    }
    return;
  }, [index, interval, length, step]);

  return {
    typedContent: content.slice(0, index),
    isTyping: index < length,
  };
}
