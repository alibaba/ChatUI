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
        {title && <p className="Step-title">{title}</p>}
        {desc && <p className="Step-desc">{desc}</p>}
        {children}
      </div>
    </li>
  );
});
