import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Modal, Popup, Confirm } from '..';

afterEach(cleanup);

describe('<Modal />', () => {
  it('should render modal correctly', () => {
    const title = 'Hello ChatUI';
    const { container } = render(
      <Modal
        title={title}
        active={true}
        actions={[
          {
            label: 'Confirm',
            color: 'primary',
            onClick: jest.fn(),
          },
          {
            label: 'Back',
            onClick: jest.fn(),
          },
        ]}
      >
        <p>ChatUI is very easy to use!</p>
      </Modal>,
      {
        container: document.body,
      },
    );
    expect(container).toMatchSnapshot();
  });

  it('should render Popup correctly', () => {
    const title = 'Hello ChatUI';
    const { container } = render(
      <Popup title={title} active={true}>
        <p>ChatUI is very easy to use!</p>
      </Popup>,
      {
        container: document.body,
      },
    );
    expect(container).toMatchSnapshot();
  });

  it('should render Confirm correctly', () => {
    const title = 'Hello ChatUI';
    const { container } = render(
      <Confirm title={title} active={true}>
        <p>ChatUI is very easy to use!</p>
      </Confirm>,
      {
        container: document.body,
      },
    );
    expect(container).toMatchSnapshot();
  });

  it('should support onClose', () => {
    const title = 'Hello ChatUI';
    const onClose = jest.fn();
    const { container } = render(
      <Modal title={title} active={true} onClose={onClose}>
        <p>ChatUI is very easy to use!</p>
      </Modal>,
    );
    const close = container.querySelector('.Modal-close');
    if (close) {
      fireEvent.click(close);
      expect(onClose).toHaveBeenCalled();
    }
  });
});
