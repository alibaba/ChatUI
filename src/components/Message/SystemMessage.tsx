import React from 'react';
import clsx from 'clsx';

export interface SystemMessageProps {
  className?: string;
  content: string;
  action?: {
    text: string;
    onClick: (event: React.MouseEvent) => void;
  };
}

export const SystemMessage = (props: SystemMessageProps) => {
  const { className, content, action } = props;
  return (
    <div className={clsx('Message SystemMessage', className)}>
      <div className="SystemMessage-inner">
        <span>{content}</span>
        {action && (
          <a href="javascript:;" onClick={action.onClick}>
            {action.text}
          </a>
        )}
      </div>
    </div>
  );
};
