import React from 'react';

export interface BubbleProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: string;
  content?: string;
}

export const Bubble = React.forwardRef<HTMLDivElement, BubbleProps>((props, ref) => {
  const { type = 'text', content, children, ...other } = props;
  return (
    <div className={`Bubble ${type}`} data-type={type} ref={ref} {...other}>
      {content && <p>{content}</p>}
      {children}
    </div>
  );
});
