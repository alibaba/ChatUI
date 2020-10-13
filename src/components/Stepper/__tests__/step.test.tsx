import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Step } from '..';

afterEach(cleanup);

describe('<Step />', () => {
  it('should render a step', () => {
    const { getByTestId } = render(<Step data-testid="step" />);
    const step = getByTestId('step');

    expect(step).toBeInTheDocument();
  });

  it('should have a title', () => {
    const { getByTestId } = render(<Step title="test" data-testid="step" />);
    const step = getByTestId('step');

    expect(step.querySelector('.Step-title')).toBeInTheDocument();
    expect(step.querySelector('.Step-title')).toHaveTextContent('test');
  });

  it('should have a description', () => {
    const { getByTestId } = render(<Step desc="test" data-testid="step" />);
    const step = getByTestId('step');

    expect(step.querySelector('.Step-desc')).toBeInTheDocument();
    expect(step.querySelector('.Step-desc')).toHaveTextContent('test');
  });

  it('should have a status (active)', () => {
    const { getByTestId } = render(<Step active data-testid="step" />);
    const step = getByTestId('step');

    expect(step).toHaveClass('Step--active');
  });

  it('should have a status (completed)', () => {
    const { getByTestId } = render(<Step completed data-testid="step" />);
    const step = getByTestId('step');

    expect(step).toHaveClass('Step--completed');
  });

  it('should have a status (disabled)', () => {
    const { getByTestId } = render(<Step disabled data-testid="step" />);
    const step = getByTestId('step');

    expect(step).toHaveClass('Step--disabled');
  });

  it('should have a custom className', () => {
    const { getByTestId } = render(<Step className="test" data-testid="step" />);
    const step = getByTestId('step');

    expect(step).toHaveClass('test');
  });
});
