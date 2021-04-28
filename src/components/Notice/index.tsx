import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import { Icon } from '../Icon';
import { IconButton } from '../IconButton';

export interface NoticeProps {
  content: string;
  url?: string;
  hasClose?: boolean;
  onClose?: (event: React.MouseEvent) => void;
  onLinkClick?: (url: string) => void;
}

const COLLAPSED_MAX_HEIGHT = 48;

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

  function handleLinkClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (url && onLinkClick) {
      onLinkClick(url);
    }
    e.preventDefault();
  }

  useEffect(() => {
    if (contentRef.current && contentRef.current.offsetHeight > COLLAPSED_MAX_HEIGHT) {
      setHasMore(true);
      setCollapsed(true);
    }
  }, [content]);

  return (
    <div className="Notice" role="alert" aria-atomic aria-live="assertive">
      {hasClose && (
        <IconButton className="Notice-close" icon="close" onClick={onClose} aria-label="关闭通知" />
      )}
      <div className="Notice-content">
        <p className={clsx('Notice-text', { collapsed })} ref={contentRef}>
          <Icon className="Notice-icon" type="bullhorn" />
          {url ? (
            <a href={url} onClick={handleLinkClick}>
              {content}
            </a>
          ) : (
            content
          )}
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
    </div>
  );
};
