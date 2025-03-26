import React, { useState } from 'react';
import clsx from 'clsx';
import { Icon } from '../Icon';

export type TreeNodeProps = {
  title: string;
  content?: string;
  link?: string;
  onClick: (data: any) => void;
  onExpand: (title: string, isFolded: boolean) => void;
  children: any[]; // FIXME
};

export const TreeNode: React.FC<TreeNodeProps> = (props) => {
  const { title, content, link, children = [], onClick, onExpand } = props;
  const [expand, setExpand] = useState(false);
  const hasChildren = children.length > 0;

  function handleTitleClick() {
    if (hasChildren) {
      setExpand(!expand);
      onExpand(title, !expand);
    } else {
      onClick({
        title,
        content,
        link,
      });
    }
  }
  return (
    <div className="TreeNode" role="treeitem" aria-expanded={expand}>
      {
        <div
          className="TreeNode-title"
          onClick={handleTitleClick}
          role="treeitem"
          aria-expanded={expand}
          tabIndex={0}
        >
          <span className="TreeNode-title-text">{title}</span>
          {hasChildren ? (
            <Icon className="TreeNode-title-icon" type={expand ? 'chevron-up' : 'chevron-down'} />
          ) : null}
        </div>
      }
      {hasChildren
        ? children.map((t, j) => (
            <div
              className={clsx('TreeNode-children', {
                'TreeNode-children-active': expand,
              })}
              key={j}
            >
              <div
                className="TreeNode-title TreeNode-children-title"
                onClick={() =>
                  onClick({
                    ...t,
                    ...{
                      index: j,
                    },
                  })
                }
                role="treeitem"
              >
                <span className="TreeNode-title-text">{t.title}</span>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};
