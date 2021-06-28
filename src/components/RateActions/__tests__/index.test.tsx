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

  it('should call onClick callback (up)', (done) => {
    const { container } = render(
      <RateActions
        onClick={(val) => {
          if (val === 'up') {
            done();
          }
        }}
      />,
    );
    const btn = container.querySelector('.RateBtn[data-type="up"]');

    if (btn) {
      expect(btn).not.toHaveClass('active');
      fireEvent.click(btn);
      expect(btn).toHaveClass('active');
    }
  });

  it('should call onClick callback (down)', (done) => {
    const { container } = render(
      <RateActions
        onClick={(val) => {
          if (val === 'down') {
            done();
          }
        }}
      />,
    );
    const btn = container.querySelector('.RateBtn[data-type="down"]');

    if (btn) {
      expect(btn).not.toHaveClass('active');
      fireEvent.click(btn);
      expect(btn).toHaveClass('active');
    }
  });
});
