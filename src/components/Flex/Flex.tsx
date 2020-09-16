import React from 'react';
import clsx from 'clsx';

const mapDirection = {
  row: 'Flex--d-r',
  'row-reverse': 'Flex--d-rr',
  column: 'Flex--d-c',
  'column-reverse': 'Flex--d-cr',
};

const mapWrap = {
  nowrap: 'Flex--w-n',
  wrap: 'Flex--w-w',
  'wrap-reverse': 'Flex--w-wr',
};

const mapJustify = {
  'flex-start': 'Flex--jc-fs',
  'flex-end': 'Flex--jc-fe',
  center: 'Flex--jc-c',
  'space-between': 'Flex--jc-sb',
  'space-around': 'Flex--jc-sa',
};

const mapAlign = {
  'flex-start': 'Flex--ai-fs',
  'flex-end': 'Flex--ai-fe',
  center: 'Flex--ai-c',
};

export type FlexProps = {
  as?: React.ElementType;
  className?: string;
  center?: boolean;
  inline?: boolean;
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around';
  align?: 'flex-start' | 'flex-end' | 'center';
  alignItems?: 'flex-start' | 'flex-end' | 'center';
  children?: React.ReactNode;
};

export const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  (props, ref) => {
    const {
      as: Element = 'div',
      className,
      inline,
      center,
      direction,
      wrap,
      justifyContent,
      justify = justifyContent,
      alignItems,
      align = alignItems,
      children,
      ...other
    } = props;

    return (
      <Element
        className={clsx(
          'Flex',
          direction && mapDirection[direction],
          justify && mapJustify[justify],
          align && mapAlign[align],
          wrap && mapWrap[wrap],
          {
            'Flex--inline': inline,
            'Flex--center': center,
          },
          className,
        )}
        ref={ref}
        {...other}
      >
        {children}
      </Element>
    );
  },
);
