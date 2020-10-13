import React from 'react';
import clsx from 'clsx';

export type StepperProps = {
  className?: string;
  current?: number;
  children?: React.ReactNode;
};

export const Stepper = React.forwardRef<HTMLUListElement, StepperProps>((props, ref) => {
  const { className, current = 0, children, ...other } = props;

  const childrenArray = React.Children.toArray(children);
  const steps = childrenArray.map((child, index) => {
    const state = {
      index,
      active: false,
      completed: false,
      disabled: false,
    };

    if (current === index) {
      state.active = true;
    } else if (current > index) {
      state.completed = true;
    } else {
      state.disabled = true;
    }

    return React.isValidElement(child)
      ? React.cloneElement(child, { ...state, ...child.props })
      : null;
  });

  return (
    <ul className={clsx('Stepper', className)} ref={ref} {...other}>
      {steps}
    </ul>
  );
});
