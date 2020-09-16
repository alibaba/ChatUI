import React from 'react';
import clsx from 'clsx';

export type FormProps = {
  className?: string;
  theme?: 'default' | 'light';
};

export const ThemeContext = React.createContext('');

export const Form: React.FC<FormProps> = (props) => {
  const { className, theme = 'default', children, ...other } = props;
  return (
    <ThemeContext.Provider value={theme}>
      <form className={clsx('Form', { 'is-light': theme === 'light' }, className)} {...other}>
        {children}
      </form>
    </ThemeContext.Provider>
  );
};
