import React from 'react';
import clsx from 'clsx';
import { Label } from '../Label';
import { HelpText } from '../HelpText';

export interface FormItemProps {
  label?: string | React.ReactNode;
  help?: string;
  required?: boolean;
  invalid?: boolean;
  hidden?: boolean;
  children?: React.ReactNode;
}

export const FormItem = (props: FormItemProps) => {
  const { label, help, required, invalid, hidden, children } = props;
  return (
    <div className={clsx('FormItem', { required, 'is-invalid': invalid })} hidden={hidden}>
      {label && <Label>{label}</Label>}
      {children}
      {help && <HelpText>{help}</HelpText>}
    </div>
  );
};
