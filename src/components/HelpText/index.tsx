import React from 'react';

export interface HelpTextProps extends React.HTMLAttributes<HTMLDivElement> {}

export const HelpText = (props: HelpTextProps) => {
  const { children, ...others } = props;
  return (
    <div className="HelpText" {...others}>
      {children}
    </div>
  );
};
