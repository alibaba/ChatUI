import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { SendConfirm } from '..';
import { LocaleProvider } from '../../LocaleProvider/';
import locales from '../../LocaleProvider/locales';

afterEach(cleanup);

describe('<SendConfirm />', () => {

  it('should support onSend', () => {
    const test = {hello: 'world'};
    const blob = new Blob([JSON.stringify(test, null, 2)], {type : 'application/json'});
    const { debug } = render(<LocaleProvider locales={locales} locale="zh-CN">
      <SendConfirm
        file={blob}
        onCancel={jest.fn()}
        onSend={jest.fn()}
      />
    </LocaleProvider>);
    debug();
  });
});
