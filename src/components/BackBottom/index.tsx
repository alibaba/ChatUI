import React from 'react';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { useLocale } from '../LocaleProvider';

interface BackBottomProps {
  count: number;
  onClick: () => void;
}

export const BackBottom = ({ count, onClick }: BackBottomProps) => {
  const { trans } = useLocale('BackBottom');
  let text = trans('bottom');
  if (count) {
    text = trans(count === 1 ? 'newMsgOne' : 'newMsgOther').replace('{n}', count);
  }

  return (
    <Button className="BackBottom" onClick={onClick}>
      {text}
      <Icon type="chevron-double-down" />
    </Button>
  );
};
