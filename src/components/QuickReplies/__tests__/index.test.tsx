import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { QuickReplies } from '..';

afterEach(cleanup);

describe('<QuickReplies />', () => {
  it('should render the items', () => {
    const { container } = render(
      <QuickReplies items={[{ name: 'a' }, { name: 'b' }]} onClick={() => {}} />,
    );
    const quickReplies = container.querySelector('.QuickReplies');

    expect(quickReplies?.querySelectorAll('.QuickReply').length).toBe(2);
  });

  it('should render the item with `new` style', () => {
    const { container } = render(
      <QuickReplies items={[{ name: 'a' }, { name: 'b', isNew: true }]} onClick={() => {}} />,
    );
    const quickReplies = container.querySelector('.QuickReplies');

    expect(quickReplies?.querySelectorAll('.QuickReply').length).toBe(2);
  });

  it('should not be visible', () => {
    const { container } = render(
      <QuickReplies visible={false} items={[{ name: 'a' }]} onClick={() => {}} />,
    );
    const quickReplies = container.querySelector('.QuickReplies');

    expect(quickReplies).toHaveAttribute('data-visible', 'false');
  });

  it('should call onClick callback', (done) => {
    const { container } = render(
      <QuickReplies
        visible={false}
        items={[{ name: 'a' }, { name: 'b' }]}
        onClick={() => {
          done();
        }}
      />,
    );
    const quickReplyList = container.querySelectorAll('.QuickReply');

    if (quickReplyList && quickReplyList.length) {
      fireEvent.click(quickReplyList[0]);
    }
  });
});
