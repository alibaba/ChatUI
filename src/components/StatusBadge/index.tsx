import React from 'react';
import clsx from 'clsx';
import { Text } from '../Text';

export interface StatusBadgeProps {
  className?: string;
  text: string;
}

export const StatusBadge = (props: StatusBadgeProps) => {
  const { className, text } = props;

  return (
    <div className={clsx('StatusBadge', className)}>
      <svg className="StatusBadge-bg" width="48" height="20" fill="none" viewBox="0 0 96 40">
        <path
          fill="var(--status-badge-bg)"
          d="M0 0c6.627 0 12 5.373 12 12V0zm84 28c6.627 0 12 5.373 12 12V28zM12 0h72c6.627 0 12 5.373 12 12v16H24c-6.627 0-12-5.373-12-12Z"
        />
      </svg>
      <Text className="StatusBadge-text" truncate>
        {text}
      </Text>
    </div>
  );
};
