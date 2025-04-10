import React from 'react';
import clsx from 'clsx';
import type { StepProps, StepStatus } from './Step';

export type StepperProps = {
  className?: string;
  current?: number;
  status?: StepStatus;
  inverted?: boolean;
  children?: React.ReactNode;
};

export const Stepper = React.forwardRef<HTMLUListElement, StepperProps>((props, ref) => {
  const { className, current = 0, status, inverted, children, ...other } = props;

  const childrenArray = React.Children.toArray(children);
  const steps = childrenArray.map((child, index) => {
    const state: StepProps = {
      index,
      active: false,
      completed: false,
      disabled: false,
    };

    if (current === index) {
      state.active = true;
      state.status = status;
    } else if (current > index) {
      state.completed = true;
    } else {
      state.disabled = !inverted;
      state.completed = inverted;
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
