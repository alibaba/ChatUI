import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MessageContainer } from '..';

afterEach(cleanup);

const messages = [{
  _id: 0,
  type: 'text',
  content: 'Hello ChatUI',
}, {
  _id: 1,
  type: 'text',
  content: 'Hello ChatUI',
}];

describe('<MessageContainer />', () => {
  // it('should support loadMoreText', () => {
  //   const text = 'click to load more';
  //   const { getByText } = render(<MessageContainer
  //     messages={messages}
  //     renderMessageContent={(msg) => <p>{msg.content}</p>} 
  //     loadMoreText={text}
  //   />);
  //   expect(getByText(text)).toBeInTheDocument();
  // });

  it('should support renderBeforeMessageList', () => {
    const text = 'Test Before MessageList';
    const { container, getByText } = render(<MessageContainer
      messages={messages}
      renderMessageContent={(msg) => <p>{msg.content}</p>} 
      renderBeforeMessageList={() => <p>{text}</p>}
    />);
    expect(getByText(text)).toBeInTheDocument();
    const messageContainer = container.querySelector('.MessageContainer');
    expect(messageContainer && messageContainer.firstChild).toContainHTML(`<p>${text}</p>`);
  });

  // it('should support onScroll', async () => {
  //   const text = 'Test Before MessageList';
  //   const onScroll = jest.fn();
  //   const { container } = render(<MessageContainer
  //     messages={messages}
  //     renderMessageContent={(msg) => <p>{msg.content}</p>} 
  //     renderBeforeMessageList={() => <p>{text}</p>}
  //     onScroll={onScroll}
  //   />);
  //   const messageContainer = container.querySelector('.MessageContainer');
  //   if (messageContainer) {
  //     fireEvent.scroll(messageContainer, { target: { scrollY: 100 } });
  //     // TODO, why?
  //     setTimeout(() => {
  //       expect(onScroll).toHaveBeenCalled();
  //     }, 300);
  //   }
  // });
});
