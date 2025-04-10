import React from 'react';
import clsx from 'clsx';
import { Icon } from '../Icon';

export type StepStatus = 'success' | 'fail' | 'abort';

export type StepProps = {
  className?: string;
  active?: boolean;
  completed?: boolean;
  disabled?: boolean;
  status?: StepStatus;
  index?: number;
  title?: string;
  subTitle?: string;
  desc?: React.ReactNode;
  children?: React.ReactNode;
};

function renderDot(status?: StepStatus) {
  if (status) {
    const iconMap: Record<string, string> = {
      success: 'check-circle-fill',
      fail: 'warning-circle-fill',
      abort: 'dash-circle-fill',
    };
    return <Icon type={iconMap[status]} />;
  }
  return <div className="Step-dot" />;
}

export const Step = React.forwardRef<HTMLLIElement, StepProps>((props, ref) => {
  const {
    className,
    active = false,
    completed = false,
    disabled = false,
    status,
    index,
    title,
    subTitle,
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
      data-status={status}
      {...other}
    >
      <div className="Step-icon">{renderDot(status)}</div>
      <div className="Step-line" />
      <div className="Step-content">
        {title && (
          <div className="Step-title">
            {title && <span>{title}</span>}
            {subTitle && <small>{subTitle}</small>}
          </div>
        )}
        {desc && <div className="Step-desc">{desc}</div>}
        {children}
      </div>
    </li>
  );
});
