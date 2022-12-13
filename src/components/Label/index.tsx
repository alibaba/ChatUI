/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export const Label = (props: LabelProps) => {
  const { children, ...other } = props;

  return (
    <label className="Label" {...other}>
      {children}
    </label>
  );
};
