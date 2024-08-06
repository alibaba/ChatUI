/* eslint-disable react/no-array-index-key */
import React from 'react';
import clsx from 'clsx';

export interface PriceProps extends React.HTMLAttributes<HTMLDivElement> {
  price: number;
  className?: string;
  locale?: string;
  currency?: string;
  original?: boolean;
  autoFit?: boolean;
}

const canFormat =
  'Intl' in window && typeof Intl.NumberFormat.prototype.formatToParts === 'function';

type PriceParts = Intl.NumberFormatPart[];

/**
 * xl - 60
 * lg - 48
 * md - 36
 * sm - 28
 */
function getSize(parts: PriceParts) {
  const getPartLength = (type: string) => parts.find((p) => p.type === type)?.value?.length || 0;

  const len1 = getPartLength('integer');
  const len2 = getPartLength('fraction');

  if (len1 < 2) {
    return 'xl';
  }

  if (len1 === 2) {
    return len2 ? 'lg' : 'xl';
  }

  if (len1 === 3) {
    return len2 ? (len2 > 1 ? 'md' : 'lg') : 'xl';
  }

  if (len1 === 4) {
    return len2 ? (len2 > 1 ? 'sm' : 'md') : 'lg';
  }

  return len2 ? 'sm' : 'md';
}

export const Price = React.forwardRef<HTMLDivElement, PriceProps>((props, ref) => {
  const { className, price, currency, locale, original, autoFit, ...other } = props;
  let parts: any[] | void = [];

  if (locale && currency && canFormat) {
    parts = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      useGrouping: false,
      minimumFractionDigits: 0,
    }).formatToParts(price);
  } else {
    parts = undefined;
  }

  // 部分 Android 机只返回 `[{ type: 'literal', value: '¥5.88' }]`
  if (!parts || parts.length < 2) {
    const decimal = '.';
    const [integer, fraction] = `${price}`.split(decimal);
    parts = [
      { type: 'currency', value: currency },
      { type: 'integer', value: integer },
      { type: 'decimal', value: fraction && decimal },
      { type: 'fraction', value: fraction },
    ];
  }

  return (
    <div
      className={clsx('Price', { 'Price--original': original }, className)}
      data-size={autoFit ? getSize(parts) : undefined}
      ref={ref}
      aria-label={`价格：${price}`}
      {...other}
    >
      {parts.map((t, i) =>
        t.value ? (
          <span className={`Price-${t.type}`} key={i}>
            {t.value}
          </span>
        ) : null,
      )}
    </div>
  );
});
