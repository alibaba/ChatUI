import React from 'react';
import clsx from 'clsx';

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  className?: string;
  /** @deprecated Use `<Input>`'s `variant` instead */
  theme?: string;
}

export const ThemeContext = React.createContext('');

export const Form = (props: FormProps) => {
  const { className, theme = '', children, ...other } = props;
  return (
    <ThemeContext.Provider value={theme}>
      <form className={clsx('Form', { 'is-light': theme === 'light' }, className)} {...other}>
        {children}
      </form>
    </ThemeContext.Provider>
  );
};
