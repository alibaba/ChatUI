import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import { Icon } from '../Icon';
import { IconButton } from '../IconButton';
import { RichText } from '../RichText';
import countLines from '../../utils/countLines';

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

  const handleToggle = (e: React.MouseEvent) => {
    setCollapsed(!collapsed);
    e.stopPropagation();
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (url && onLinkClick) {
      onLinkClick(url);
    }
    e.preventDefault();
  };

  useEffect(() => {
    const cont = contentRef.current;
    if (cont && countLines(cont) > 2) {
      setHasMore(true);
      setCollapsed(true);
    }
  }, [content]);

  return (
    <div className="Notice" role="alert" aria-atomic aria-live="assertive">
      {hasClose && (
        <IconButton
          className="Notice-close"
          icon="close"
          size="lg"
          onClick={onClose}
          aria-label="关闭通知"
        />
      )}
      <div className="Notice-content">
        <div
          className={clsx('Notice-text', { collapsed })}
          data-overflow={hasMore}
          ref={contentRef}
        >
          <Icon className="Notice-icon" type="bullhorn" />
          <RichText content={content} onClick={handleLinkClick} />
        </div>
        {hasMore && (
          <div className="Notice-actions">
            <IconButton
              className="Notice-more"
              icon="chevron-down"
              size="lg"
              aria-expanded={!collapsed}
              onClick={handleToggle}
              aria-label="Toggle Notice"
            />
          </div>
        )}
      </div>
    </div>
  );
};
