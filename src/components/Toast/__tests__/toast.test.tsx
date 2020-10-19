import React from 'react';
import { render, cleanup, fireEvent, act } from '@testing-library/react';
import { Toast } from '../Toast';

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(cleanup);

describe('<Toast />', () => {
  it('should show a toast', () => {
    const { container } = render(
      <Toast content="test" type="test" duration={1000} onUnmount={() => {}} />,
    );

    expect(container.querySelector('.Toast')).not.toBeNull();
    expect(container.querySelector('.Toast')).toHaveClass('show');

    act(() => {
      jest.runAllTimers();
    });
    expect(container.querySelector('.Toast')).not.toHaveClass('show');
  });

  it('should call onUnmount after 1s', (done) => {
    render(
      <Toast
        content="test"
        type="test"
        duration={1000}
        onUnmount={() => {
          done();
        }}
      />,
    );

    act(() => {
      jest.runAllTimers();
    });
  });

  it('should call onUnmount when clicked', (done) => {
    const { container } = render(
      <Toast
        content="test"
        type="test"
        duration={1000}
        onUnmount={() => {
          done();
        }}
      />,
    );
    const content = container.querySelector('.Toast-content');

    if (content) {
      fireEvent.click(content);
    }
  });
});
