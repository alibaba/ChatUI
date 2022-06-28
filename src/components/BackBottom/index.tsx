import React, { useEffect } from 'react';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { useLocale } from '../LocaleProvider';

interface BackBottomProps {
  count: number;
  onClick: () => void;
  onDidMount?: () => void;
}

export const BackBottom = ({ count, onClick, onDidMount }: BackBottomProps) => {
  const { trans } = useLocale('BackBottom');
  let text = trans('bottom');
  if (count) {
    text = trans(count === 1 ? 'newMsgOne' : 'newMsgOther').replace('{n}', count);
  }

  useEffect(() => {
    if (onDidMount) {
      onDidMount();
    }
  }, [onDidMount]);

  return (
    <div className="BackBottom">
      <Button className="slide-in-right-item" onClick={onClick}>
        {text}
        <Icon type="chevron-double-down" />
      </Button>
    </div>
  );
};
