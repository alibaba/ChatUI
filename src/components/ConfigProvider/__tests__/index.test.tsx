import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { ConfigProvider, LocaleContext, useLocale } from '..';

afterEach(cleanup);

describe('<ConfigProvider />', () => {
  it(`should provide the locale`, () => {
    function Test() {
      const { locale } = React.useContext(LocaleContext);
      return <span data-testid="span">{locale}</span>;
    }

    const { getByTestId } = render(
      <ConfigProvider locale="en-US">
        <Test />
      </ConfigProvider>,
    );

    expect(getByTestId('span')).toHaveTextContent('en-US');
  });

  it(`should provide the locale by useLocale`, () => {
    function Test() {
      const { trans } = useLocale();
      return <span data-testid="span">{trans('SendConfirm').send}</span>;
    }

    const { getByTestId } = render(
      <ConfigProvider locale="en-US">
        <Test />
      </ConfigProvider>,
    );

    expect(getByTestId('span')).toHaveTextContent('Send');
  });

  it(`should provide the locale by useLocale with component name`, () => {
    function Test() {
      const { trans } = useLocale('SendConfirm');
      return (
        <div>
          <span data-testid="span1">{trans().title}</span>
          <span data-testid="span2">{trans('send')}</span>
        </div>
      );
    }

    const { getByTestId } = render(
      <ConfigProvider locale="en-US">
        <Test />
      </ConfigProvider>,
    );

    expect(getByTestId('span1')).toHaveTextContent('Send photo');
    expect(getByTestId('span2')).toHaveTextContent('Send');
  });

  it(`should provide the custom locale by useLocale`, () => {
    function Test() {
      const { trans } = useLocale('Test');
      return <span data-testid="span">{trans()}</span>;
    }

    const { getByTestId } = render(
      <ConfigProvider locales={{ Test: 'test' }}>
        <Test />
      </ConfigProvider>,
    );

    expect(getByTestId('span')).toHaveTextContent('test');
  });

  it(`should provide the valid locale`, () => {
    function Test() {
      const { trans } = useLocale();
      return <span data-testid="span">{trans('SendConfirm').send}</span>;
    }

    const { getByTestId } = render(
      <ConfigProvider locale="test">
        <Test />
      </ConfigProvider>,
    );

    expect(getByTestId('span')).toHaveTextContent('Send');
  });

  it(`should get the locale by useLocale`, () => {
    function Test() {
      const { locale } = useLocale();
      return <span data-testid="span">{locale}</span>;
    }

    const { getByTestId } = render(
      <ConfigProvider locale="en-US">
        <Test />
      </ConfigProvider>,
    );

    expect(getByTestId('span')).toHaveTextContent('en-US');
  });
});
