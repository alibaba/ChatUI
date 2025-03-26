import React from 'react';
import formatDate, { IDate } from './parser';
import { useLocale } from '../ConfigProvider';

export interface TimeProps {
  date: IDate;
}

export const Time: React.FC<TimeProps> = ({ date }) => {
  const { trans } = useLocale('Time');
  const dateTime = new Date(date).toLocaleString('zh').replace(/\//g, '-');

  return (
    <time className="Time" dateTime={dateTime}>
      {formatDate(date, trans())}
    </time>
  );
};
