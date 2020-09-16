import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import { Icon } from '../Icon';
import { IconButton } from '../IconButton';
import { reflow } from '../../utils';

export interface NoticeProps {
  content: string;
  url?: string;
  hasClose?: boolean;
  onClose?: (event: React.MouseEvent) => void;
  onLinkClick?: (url: string) => void;
}

export const Notice: React.FC<NoticeProps> = (props) => {
  const { content, url, hasClose = true, onLinkClick, onClose } = props;

  // 展开还是收起状态
  const [collapsed, setCollapsed] = useState(false);
  // 是否需要展开收起
  const [hasMore, setHasMore] = useState(false);
  const contentRef = useRef<HTMLParagraphElement>(null);

  function handleToggle(e: React.MouseEvent) {
    setCollapsed(!collapsed);
    e.stopPropagation();
  }

  function handleLinkClick() {
    if (url && onLinkClick) {
      onLinkClick(url);
    }
  }

  useEffect(() => {
    if (contentRef.current && reflow(contentRef.current) > 42) {
      setHasMore(true);
      setCollapsed(true);
    }
  }, [content]);

  return (
    <div className="Notice" role="alert" aria-atomic aria-live="assertive">
      <Icon className="Notice-icon" type="bullhorn" />
      <div className="Notice-content" role="link" tabIndex={0} onClick={handleLinkClick}>
        <p className={clsx({ collapsed })} ref={contentRef}>
          {content}
        </p>
        {hasMore && (
          <div className="Notice-actions">
            <IconButton
              className="Notice-more"
              icon="chevron-down"
              aria-expanded={!collapsed}
              onClick={handleToggle}
            />
          </div>
        )}
      </div>
      {hasClose && (
        <IconButton className="Notice-close" icon="close" onClick={onClose} aria-label="关闭通知" />
      )}
    </div>
  );
};
