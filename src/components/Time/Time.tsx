import React from 'react';
import formatDate, { IDate } from './parser';
import { useLocale } from '../ConfigProvider';

export interface TimeProps {
  date: IDate;
}

export const Time = ({ date }: TimeProps) => {
  const { trans } = useLocale('Time');
  const dateTime = new Date(date).toLocaleString('zh').replace(/\//g, '-');

  return (
    <time className="Time" dateTime={dateTime}>
      {formatDate(date, trans())}
    </time>
  );
};
