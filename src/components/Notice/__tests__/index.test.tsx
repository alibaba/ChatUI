import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Notice } from '..';
import * as utils from '../../../utils';

afterEach(cleanup);

describe('<Notice />', () => {
  it('should support link click', () => {
    const content = 'Hello ChatUI';
    const url = 'https://github.com/alibaba/chatui';
    const onLinkClick = jest.fn();
    const { getByText } = render(<Notice
      content={content}
      url={url}
      onLinkClick={onLinkClick}
    />);
    fireEvent.click(getByText(content))
    expect(onLinkClick).toHaveBeenCalledWith(url)
  });

  it('should support close notice', () => {
    const content = 'Hello ChatUI';
    const onClose = jest.fn();
    const { container } = render(<Notice
      content={content}
      hasClose={true}
      onClose={onClose}
    />);
    const close = container.querySelector('.Notice-close');
    if (close) {
      fireEvent.click(close);
      expect(onClose).toHaveBeenCalled();
    }
  });

  it('should show more icon when content was more than two lines', () => {
    const content = 'Hello ChatUI, Hello ChatUI, Hello ChatUI, Hello ChatUI, Hello ChatUI, Hello ChatUI, Hello ChatUI';
    const spy = jest.spyOn(utils, 'reflow');
    spy.mockReturnValue(45);
    const { container } = render(<div style={{width: 200, position: 'relative'}}>
      <Notice
        content={content}
      />
    </div>);
    expect(container.querySelectorAll('.Notice-actions').length).toBe(1);
  });
});
