import React from 'react';
import formatDate, { IDate } from './parser';
import { useLocale } from '../LocaleProvider';

export interface TimeProps {
  date: IDate;
}

export const Time: React.FC<TimeProps> = ({ date }) => {
  const { trans } = useLocale('Time');

  return (
    <time className="Time" dateTime={new Date(date).toJSON()}>
      {formatDate(date, trans())}
    </time>
  );
};
