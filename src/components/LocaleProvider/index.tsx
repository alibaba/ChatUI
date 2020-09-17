import React, { useContext } from 'react';
import defaultLocales from './locales';

type ILocales = {
  [k: string]: any;
};

type ILocaleContext = {
  locale: string;
  locales: ILocales;
};

const LocaleContext = React.createContext<ILocaleContext>(undefined!);
const DEFAULT_LOCALE = 'en-US';

const LocaleProvider: React.FC<ILocaleContext> = ({ locale, locales, children }) => (
  <LocaleContext.Provider value={{ locale, locales }}>{children}</LocaleContext.Provider>
);

LocaleProvider.defaultProps = {
  locale: DEFAULT_LOCALE,
};

const useLocale = (comp: string) => {
  const localeContext = useContext(LocaleContext);
  const { locale, locales } = localeContext;
  const defaultStrings = (defaultLocales as ILocales)[locale] || defaultLocales[DEFAULT_LOCALE];
  let strings = locales ? { ...defaultStrings, ...locales } : defaultStrings;

  if (comp) {
    strings = strings[comp];
  }

  return {
    locale,
    trans: (key?: string) => (key ? strings[key] : strings),
  };
};

export { LocaleProvider, LocaleContext, useLocale };
