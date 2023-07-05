import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { ConfigProvider } from '../../ConfigProvider';
import { Time } from '..';

afterEach(cleanup);

describe('<ConfigProvider />', () => {
  it(`should display English by default`, () => {
    const { container } = render(
      <ConfigProvider>
        <Time date={1577851200000} />
      </ConfigProvider>,
    );
    const time = container.querySelector('.Time');
    expect(time).toHaveTextContent('1/1/2020 12:00');
  });

  it(`should display Chinese by set locale`, () => {
    const { container } = render(
      <ConfigProvider locale="zh-CN">
        <Time date={1577851200000} />
      </ConfigProvider>,
    );
    const time = container.querySelector('.Time');
    expect(time).toHaveTextContent('2020年1月1日 12:00');
  });
});
