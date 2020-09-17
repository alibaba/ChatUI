import React from 'react';
import clsx from 'clsx';

export type SystemMessageProps = {
  className?: string;
  content: string;
  action?: {
    text: string;
    onClick: (event: React.MouseEvent) => void;
  };
};

export const SystemMessage: React.FC<SystemMessageProps> = (props) => {
  const { className, content, action } = props;
  return (
    <div className={clsx('Message SystemMessage', className)}>
      <span>{content}</span>
      {action && (
        <a href="javascript:;" onClick={action.onClick}>
          {action.text}
        </a>
      )}
    </div>
  );
};
