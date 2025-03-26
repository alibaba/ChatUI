import React, { useContext } from 'react';
import defaultLocales from './locales';

type ILocales = {
  [k: string]: any;
};

export type ConfigContextType = {
  /**
   * 当前语言
   */
  locale?: string;
  /**
   * 多语言
   */
  locales?: ILocales;
  /**
   * 主题色
   */
  colorScheme?: 'light' | 'dark' | 'auto';
  /**
   * 适老化模式
   */
  elderMode?: boolean;
};

export type ConfigProviderProps = ConfigContextType & {
  children: React.ReactNode;
};

const DEFAULT_LOCALE = 'en-US';

export const ConfigContext = React.createContext<ConfigContextType>({});

export const ConfigProvider = ({
  locale = DEFAULT_LOCALE,
  locales,
  colorScheme,
  elderMode,
  children,
}: ConfigProviderProps) => (
  <ConfigContext.Provider value={{ locale, locales, colorScheme, elderMode }}>
    {children}
  </ConfigContext.Provider>
);

export const useConfig = () => useContext(ConfigContext);

export const useLocale = (componentName?: string, fallback?: ILocales) => {
  const { locale, locales } = useContext(ConfigContext);
  const defaultStrings = (locale && defaultLocales[locale]) || defaultLocales[DEFAULT_LOCALE];
  let strings = { ...defaultStrings, ...locales };

  if (!locale && !locales && fallback) {
    strings = fallback;
  } else if (componentName) {
    strings = strings[componentName] || {};
  }

  return {
    locale,
    trans: (key?: string) => (key ? strings[key] : strings),
  };
};
