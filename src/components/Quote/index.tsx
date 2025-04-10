import React from 'react';
import clsx from 'clsx';

export interface QuoteProps {
  className?: string;
  author?: string;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const Quote = (props: QuoteProps) => {
  const { className, author, children, onClick } = props;

  return (
    <div className={clsx('Quote', className)} onClick={onClick}>
      {author && <div className="Quote-author">{author}</div>}
      <div className="Quote-content">{children}</div>
    </div>
  );
};
