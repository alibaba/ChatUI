import React from 'react';

export interface BubbleProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: string;
  content?: React.ReactNode;
}

export const Bubble: React.FC<BubbleProps> = (props) => {
  const { type = 'text', content, children, ...other } = props;
  return (
    <div className={`Bubble ${type}`} data-type={type} {...other}>
      {content && <p>{content}</p>}
      {children}
    </div>
  );
};
