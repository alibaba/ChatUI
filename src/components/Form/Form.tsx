import React from 'react';
import clsx from 'clsx';

export type FormProps = {
  className?: string;
  /** @deprecated Use `<Input>`'s `variant` instead */
  theme?: string;
};

export const ThemeContext = React.createContext('');

export const Form: React.FC<FormProps> = (props) => {
  const { className, theme = '', children, ...other } = props;
  return (
    <ThemeContext.Provider value={theme}>
      <form className={clsx('Form', { 'is-light': theme === 'light' }, className)} {...other}>
        {children}
      </form>
    </ThemeContext.Provider>
  );
};
