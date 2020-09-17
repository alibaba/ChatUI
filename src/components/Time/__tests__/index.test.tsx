import React from 'react';
import { render, cleanup } from '@testing-library/react';

import { LocaleProvider } from '../../LocaleProvider/';
import locales from '../../LocaleProvider/locales';

import { Time } from '..';

afterEach(cleanup);

describe('<Time />', () => {

  it('should render time correctly', () => {
    const { container } = render(<LocaleProvider locales={locales} locale="zh-CN">
      <Time date="2020-01-01 12:00:00" />
    </LocaleProvider>);
    expect(container).toMatchSnapshot();
  });

  it('should support timestamp', () => {
    const { container } = render(<LocaleProvider locales={locales} locale="zh-CN">
      <Time date={1577829600000} />
    </LocaleProvider>);
    expect(container).toMatchSnapshot();
  });
});
