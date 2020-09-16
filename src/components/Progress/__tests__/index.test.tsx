import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Progress } from '..';

afterEach(cleanup);

describe('<Progress />', () => {
  it('should render the progress (0%)', () => {
    const { getByRole } = render(<Progress value={0} />);
    const progressbar = getByRole('progressbar');

    expect(progressbar).toHaveStyle({ width: '0%' });
  });

  it('should render the progress (25%)', () => {
    const { getByRole } = render(<Progress value={25} />);
    const progressbar = getByRole('progressbar');

    expect(progressbar).toHaveStyle({ width: '25%' });
  });

  it('should apply the status class', () => {
    const { getByTestId } = render(<Progress value={0} status="success" data-testid="progress" />);
    const progress = getByTestId('progress');

    expect(progress).toHaveClass('Progress--success');
  });
});
