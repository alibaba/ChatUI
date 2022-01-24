import React from 'react';
import clsx from 'clsx';

export type StepProps = {
  className?: string;
  active?: boolean;
  completed?: boolean;
  disabled?: boolean;
  index?: number;
  title?: string;
  desc?: string;
  children?: React.ReactNode;
};

export const Step = React.forwardRef<HTMLLIElement, StepProps>((props, ref) => {
  const {
    className,
    active = false,
    completed = false,
    disabled = false,
    index,
    title,
    desc,
    children,
    ...other
  } = props;

  return (
    <li
      className={clsx(
        'Step',
        {
          'Step--active': active,
          'Step--completed': completed,
          'Step--disabled': disabled,
        },
        className,
      )}
      ref={ref}
      {...other}
    >
      <div className="Step-dot" />
      <div className="Step-line" />
      <div className="Step-content">
        {title && <div className="Step-title">{title}</div>}
        {desc && <div className="Step-desc">{desc}</div>}
        {children}
      </div>
    </li>
  );
});
