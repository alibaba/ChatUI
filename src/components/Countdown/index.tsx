import React from 'react';
import clsx from 'clsx';
import useCountdown, { Options } from '../../hooks/useCountdown';
import { padZero } from '../../utils/date';

export interface CountdownProps extends Options {
  className?: string;
}

export const Countdown = ({ className, targetDate, onEnd }: CountdownProps) => {
  const timeLeft = useCountdown({
    targetDate,
    onEnd,
  });

  return (
    <div className={clsx('Countdown', className)}>
      <span className="Countdown-unit">{padZero(timeLeft.hours)}</span>
      <span> : </span>
      <span className="Countdown-unit">{padZero(timeLeft.minutes)}</span>
      <span> : </span>
      <span className="Countdown-unit">{padZero(timeLeft.seconds)}</span>
    </div>
  );
};
