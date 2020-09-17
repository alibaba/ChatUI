import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { RateActions } from '..';

afterEach(cleanup);

describe('<RateActions />', () => {
  it('should render the actions', () => {
    const { container } = render(<RateActions onClick={() => {}} />);

    expect(container.querySelectorAll('.RateBtn').length).toBe(2);
  });

  it('should call onClick callback', (done) => {
    const { container } = render(
      <RateActions
        onClick={() => {
          done();
        }}
      />,
    );
    const btns = container.querySelectorAll('.RateBtn');

    if (btns && btns.length) {
      fireEvent.click(btns[0]);
    }
  });

  it('should not call onClick callback twice', (done) => {
    let called = false;

    const { container } = render(
      <RateActions
        onClick={() => {
          done(called ? 'again' : undefined);
          called = true;
        }}
      />,
    );
    const btns = container.querySelectorAll('.RateBtn');

    if (btns && btns.length) {
      fireEvent.click(btns[0]);
      fireEvent.click(btns[0]);
    }
  });

  it('should call onClick callback (good)', (done) => {
    const { container } = render(
      <RateActions
        onClick={(val) => {
          if (val === 'good') {
            done();
          }
        }}
      />,
    );
    const btn = container.querySelector('.RateBtn[data-type="good"]');

    if (btn) {
      expect(btn).not.toHaveClass('active');
      fireEvent.click(btn);
      expect(btn).toHaveClass('active');
    }
  });

  it('should call onClick callback (bad)', (done) => {
    const { container } = render(
      <RateActions
        onClick={(val) => {
          if (val === 'bad') {
            done();
          }
        }}
      />,
    );
    const btn = container.querySelector('.RateBtn[data-type="bad"]');

    if (btn) {
      expect(btn).not.toHaveClass('active');
      fireEvent.click(btn);
      expect(btn).toHaveClass('active');
    }
  });
});
