import React from 'react';
import clsx from 'clsx';

export type PriceProps = {
  className?: string;
  price: string | number;
  currency?: string;
  original?: boolean;
};

export const Price = React.forwardRef<HTMLDivElement, PriceProps>((props, ref) => {
  const { className, price, currency, original, ...other } = props;
  const [integer, decimal] = `${price}`.split('.');

  return (
    <div className={clsx('Price', { 'Price--original': original }, className)} ref={ref} {...other}>
      {currency && <span className="Price-currency">{currency}</span>}
      <span className="Price-integer">{integer}</span>
      {decimal && <span>.</span>}
      {decimal && <span className="Price-decimal">{decimal}</span>}
    </div>
  );
});
