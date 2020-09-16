import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Stepper, Step } from '..';

afterEach(cleanup);

describe('<Stepper />', () => {

  it('should support current step', () => {
    // @ts-ignore TODO: fix error
    const { debug } = render(<Stepper current={2}>
      <Step title="ChatUI day0" />
      <Step title="ChatUI day1" />
      <Step title="ChatUI day2" />
      <Step title="ChatUI day3" />
    </Stepper>);
    debug();
  });
});
