import React from 'react';
import { Icon } from '../Icon';
import { IconButton } from '../IconButton';
import { Text } from '../Text';

export interface NoticeProps {
  content: string;
  closable?: boolean;
  leftIcon?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onClose?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Notice = (props: NoticeProps) => {
  const { content, closable = true, leftIcon = 'bullhorn', onClick, onClose } = props;

  return (
    <div className="Notice" role="alert" aria-atomic aria-live="assertive">
      {leftIcon && <Icon className="Notice-icon" type={leftIcon} />}
      <div className="Notice-content" onClick={onClick}>
        <Text className="Notice-text" truncate>
          {content}
        </Text>
      </div>
      {closable && (
        <IconButton className="Notice-close" icon="close" onClick={onClose} aria-label="关闭通知" />
      )}
    </div>
  );
};
