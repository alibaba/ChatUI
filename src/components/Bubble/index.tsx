import React from 'react';

export interface BubbleProps {
  type?: string;
  content?: React.ReactNode;
}

export const Bubble: React.FC<BubbleProps> = (props) => {
  const { type = 'text', content, children } = props;
  return (
    <div className={`Bubble ${type}`} data-type={type}>
      {content && <p>{content}</p>}
      {children}
    </div>
  );
};
