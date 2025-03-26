import React, { useState } from 'react';
import clsx from 'clsx';
import { Button } from '../Button';

export type SystemMessageProps = {
  className?: string;
  content: string;
  action?: {
    text: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    once?: boolean;
    disabled?: boolean;
  };
};

export const SystemMessage = (props: SystemMessageProps) => {
  const { className, content, action } = props;
  const { onClick, once } = action || {};
  const [disabled, setDisabled] = useState(action && action.disabled);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (onClick) {
      onClick(e);
    }
    if (once) {
      setDisabled(true);
    }
  };

  return (
    <div className={clsx('Message SystemMessage', className)}>
      <div className="SystemMessage-inner">
        <span>{content}</span>
        {action && (
          <Button variant="text" disabled={disabled} onClick={handleClick}>
            {action.text}
          </Button>
        )}
      </div>
    </div>
  );
};
