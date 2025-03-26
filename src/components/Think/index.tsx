import React, { useState } from 'react';
import clsx from 'clsx';
import { Icon } from '../Icon';

export interface ThinkProps {
  className?: string;
  isDone?: boolean;
  thinkTime?: number;
  children?: React.ReactNode;
}

export const Think = ({ className, isDone, thinkTime, children }: ThinkProps) => {
  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow((s) => !s);
  };

  const getText = () => {
    if (isDone) {
      const time = thinkTime ? `（用时${thinkTime}秒）` : '';
      return `已深度思考${time}`;
    }
    return '思考中...';
  };

  return (
    <div className={clsx('Think', className)} data-collapsed={!show}>
      <div className="Think-toggle" onClick={handleClick}>
        {getText()}
        <Icon type="chevron-up" />
      </div>
      {show && <div className="Think-content">{children}</div>}
    </div>
  );
};
