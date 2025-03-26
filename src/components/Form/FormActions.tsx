import React from 'react';
import clsx from 'clsx';

export const FormActions: React.FC = (props) => {
  const { children, ...other } = props;
  return (
    <div className={clsx('FormActions')} {...other}>
      {children}
    </div>
  );
};
