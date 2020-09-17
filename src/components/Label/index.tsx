import React from 'react';

export const Label: React.FC = (props) => {
  const { children, ...other } = props;

  return (
    <label className="Label" {...other}>
      {children}
    </label>
  );
};
