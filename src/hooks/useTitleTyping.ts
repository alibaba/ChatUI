import { useState, useCallback, useRef } from 'react';
import getRandomInt from '../utils/getRandomInt';

interface StartOptions {
  delay?: number;
  timeout?: number;
}

export function useTitleTyping() {
  const [isTyping, setIsTyping] = useState(false);
  // 间断变化
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  // 超时
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const after = ([min, max]: number[], cb: () => void) => {
    const ms = getRandomInt(min, max);
    timerRef.current = setTimeout(cb, ms);
  };

  const stop = useCallback(() => {
    clearTimeout(timerRef.current);
    clearTimeout(timeoutRef.current);
    setIsTyping(false);
  }, []);

  const start = useCallback(({ delay, timeout }: StartOptions = {}) => {
    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      // delay 后开始
      setIsTyping(true);

      after([2500, 3500], () => {
        // 2.5-3.5s 后暂停
        setIsTyping(false);

        after([1000, 1800], () => {
          // 1-1.8s 后重新开始
          start();
        });
      });
    }, delay);

    if (timeout) {
      timeoutRef.current = setTimeout(() => {
        stop()
      }, timeout);
    }
  }, [stop]);

  return {
    isTyping,
    start,
    stop,
  };
}
