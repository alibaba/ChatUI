import { useState, useEffect } from 'react';
import { useLatest } from './useLatest';

export interface Options {
  targetDate: string | number | Date;
  onEnd?: () => void;
}

export interface TimeLeft {
  // days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calcLeft = (ts?: string | number | Date) => {
  if (!ts) {
    return 0;
  }

  const left = new Date(ts).getTime() - Date.now();
  return left < 0 ? 0 : left;
};

const parseMs = (ms: number): TimeLeft => {
  return {
    // days: Math.floor(ms / 86400000),
    hours: Math.floor(ms / 3600000) % 24,
    minutes: Math.floor(ms / 60000) % 60,
    seconds: Math.floor(ms / 1000) % 60,
  };
};

const useCountdown = (options: Options) => {
  const { targetDate, onEnd } = options || {};
  const [timeLeft, setTimeLeft] = useState(() => calcLeft(targetDate));
  const onEndRef = useLatest(onEnd);

  useEffect(() => {
    if (!targetDate) {
      // for stop
      setTimeLeft(0);
      return;
    }

    // 立即执行一次
    setTimeLeft(calcLeft(targetDate));

    const timer = setInterval(() => {
      const targetLeft = calcLeft(targetDate);
      setTimeLeft(targetLeft);
      if (targetLeft === 0) {
        clearInterval(timer);
        onEndRef.current?.();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [onEndRef, targetDate]);

  return parseMs(timeLeft);
};

export default useCountdown;
