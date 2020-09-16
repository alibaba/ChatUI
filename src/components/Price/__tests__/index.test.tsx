import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Price } from '..';

afterEach(cleanup);

describe('<Price />', () => {
  it('should render the price', () => {
    const { getByTestId } = render(<Price price="12" data-testid="price" />);
    const price = getByTestId('price');

    expect(price.querySelector('.Price-integer')).toHaveTextContent('12');
  });

  it('should render the price', () => {
    const { getByTestId } = render(<Price price="12.34" data-testid="price" />);
    const price = getByTestId('price');

    expect(price.querySelector('.Price-integer')).toHaveTextContent('12');
    expect(price.querySelector('.Price-decimal')).toHaveTextContent('34');
  });

  it('should render the currency', () => {
    const { getByTestId } = render(<Price price="12" currency="¥" data-testid="price" />);
    const price = getByTestId('price');

    expect(price.querySelector('.Price-currency')).toHaveTextContent('¥');
  });

  it('should have a original class', () => {
    const { getByTestId } = render(<Price price="12" original data-testid="price" />);
    const price = getByTestId('price');

    expect(price).toHaveClass('Price--original');
  });
});
