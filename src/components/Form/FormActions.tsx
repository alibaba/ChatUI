import React from 'react';
import clsx from 'clsx';

export interface FormActionsProps extends React.HTMLAttributes<HTMLDivElement> {}

export const FormActions = (props: FormActionsProps) => {
  const { children, ...other } = props;
  return (
    <div className={clsx('FormActions')} {...other}>
      {children}
    </div>
  );
};
