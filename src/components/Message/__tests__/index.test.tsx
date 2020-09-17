import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { LocaleProvider } from '../../LocaleProvider/';
import locales from '../../LocaleProvider/locales';

import { Message } from '..';

afterEach(cleanup);

describe('<Message />', () => {
  it('should support user', () => {
    const content = 'Hello ChatUI';
    const avatar = '//img.alicdn.com/tfs/TB1KwnKPqL7gK0jSZFBXXXZZpXa-221-57.svg';
    const { container } = render(<Message
      _id={0}
      type="text"
      content={content}
      renderMessageContent={(msg) => <p>{msg.content}</p>} 
      user={{
        avatar,
      }}
    />);
    expect(container.querySelectorAll('.Avatar').length).toBe(1);
  });

  it('should support time', () => {
    const content = 'Hello ChatUI';
    const avatar = '//img.alicdn.com/tfs/TB1KwnKPqL7gK0jSZFBXXXZZpXa-221-57.svg';
    const { container } = render(<LocaleProvider locales={locales} locale="zh-CN">
      <Message
        _id={0}
        type="text"
        content={content}
        renderMessageContent={(msg) => <p>{msg.content}</p>} 
        hasTime={true}
        createdAt={1577851200000}
        user={{
          avatar,
        }}
      />
    </LocaleProvider>);
    expect(container.querySelectorAll('.Time').length).toBe(1);
  });

  it('should support system message', () => {
    const content = 'Hello ChatUI';
    const { container } = render(<Message
      _id={0}
      type="system"
      content={{
        text: content,
      }}
    />);
    expect(container.querySelector('.Message')).toHaveClass('SystemMessage');
  });

  it('should support typing message', () => {
    const { container } = render(<Message
      _id={0}
      type="typing"
      content={null}
    />);
    expect(container.querySelectorAll('.Typing').length).toBe(1)
  });
});
