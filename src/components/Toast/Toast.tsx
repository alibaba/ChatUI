import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { Icon } from '../Icon';

interface ToastProps {
  content: React.ReactNode;
  type: string;
  duration: number;
  onUnmount?: () => void;
}

function renderIcon(type: string) {
  switch (type) {
    case 'success':
      return <Icon type="check-circle" />;
    case 'error':
      return <Icon type="close-circle" />;
    case 'loading':
      return <Icon type="spinner" spin />;
    default:
      return null;
  }
}

export const Toast: React.FC<ToastProps> = (props) => {
  const { content, type, duration, onUnmount } = props;
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

  function handleClick() {
    if (onUnmount) {
      onUnmount();
    }
  }

  return (
    <div className={clsx('Toast', { show })} data-type={type} role="alert">
      <div className="Toast-content" role="presentation" onClick={handleClick}>
        {renderIcon(type)}
        <p className="Toast-message">{content}</p>
      </div>
    </div>
  );
};
