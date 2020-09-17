import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { LocaleProvider } from '..';
import locales from '../locales';
import { Time } from '../../Time/';

afterEach(cleanup);

const App = () => (
  <div>
    <Time date={1577851200000} />
  </div>
);

describe('<LocaleProvider />', () => {
  Object.keys(locales).forEach((locale) => {
    it(`should display the text as ${locale}`, () => {
      const { container } = render(<LocaleProvider locales={locales} locale={locale}>
          <App />
        </LocaleProvider>);
      expect(container).toMatchSnapshot();
    });
  })
});
