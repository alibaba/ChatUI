import React from 'react';

export const HelpText: React.FC = (props) => {
  const { children, ...others } = props;
  return (
    <div className="HelpText" {...others}>
      {children}
    </div>
  );
};
