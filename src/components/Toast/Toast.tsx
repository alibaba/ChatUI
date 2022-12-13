import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { Icon } from '../Icon';

export interface ToastProps {
  content: React.ReactNode;
  type?: 'success' | 'error' | 'loading';
  duration?: number;
  onUnmount?: () => void;
}

function renderIcon(type: ToastProps['type']) {
  switch (type) {
    case 'success':
      return <Icon type="check-circle" />;
    case 'error':
      return <Icon type="warning-circle" />;
    case 'loading':
      return <Icon type="spinner" spin />;
    default:
      return null;
  }
}

export const Toast = (props: ToastProps) => {
  const { content, type, duration = 2000, onUnmount } = props;
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);

    if (duration !== -1) {
      setTimeout(() => {
        setShow(false);
      }, duration);

      setTimeout(() => {
        if (onUnmount) {
          onUnmount();
        }
      }, duration + 300);
    }
  }, [duration, onUnmount]);

  return (
    <div
      className={clsx('Toast', { show })}
      data-type={type}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="Toast-content" role="presentation">
        {renderIcon(type)}
        <p className="Toast-message">{content}</p>
      </div>
    </div>
  );
};
