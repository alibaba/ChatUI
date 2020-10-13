import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Stepper, Step } from '..';

afterEach(cleanup);

describe('<Stepper />', () => {
  it('should render a stepper', () => {
    const { container } = render(
      <Stepper>
        <Step title="test 1" />
        <Step title="test 2" />
        <Step title="test 3" />
      </Stepper>,
    );

    const stepList = container.querySelectorAll('.Step');

    expect(stepList.length).toBe(3);
    expect(stepList[0]).toHaveClass('Step--active');
  });

  it('should activate the current step', () => {
    const { container } = render(
      <Stepper current={1}>
        <Step title="test 1" />
        <Step title="test 2" />
        <Step title="test 3" />
      </Stepper>,
    );

    const stepList = container.querySelectorAll('.Step');

    expect(stepList[0]).toHaveClass('Step--completed');
    expect(stepList[1]).toHaveClass('Step--active');
    expect(stepList[2]).toHaveClass('Step--disabled');
  });

  it('should ignore invalid element', () => {
    const { container } = render(<Stepper>{123}</Stepper>);
    const stepList = container.querySelectorAll('.Step');

    expect(stepList.length).toBe(0);
  });
});
