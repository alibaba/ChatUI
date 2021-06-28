import React, { useState } from 'react';
import clsx from 'clsx';
import { IconButton } from '../IconButton';
import { useLocale } from '../LocaleProvider';

const UP = 'up';
const DOWN = 'down';

export type RateActionsProps = {
  upTitle?: string;
  downTitle?: string;
  onClick: (value: string) => void;
};

export const RateActions: React.FC<RateActionsProps> = (props) => {
  const { trans } = useLocale('RateActions', {
    up: '赞同',
    down: '反对',
  });

  const { upTitle = trans('up'), downTitle = trans('down'), onClick } = props;
  const [value, setValue] = useState('');

  function handleClick(val: string) {
    if (!value) {
      setValue(val);
      onClick(val);
    }
  }

  function handleUpClick() {
    handleClick(UP);
  }

  function handleDownClick() {
    handleClick(DOWN);
  }

  return (
    <div className="RateActions">
      {value !== DOWN && (
        <IconButton
          className={clsx('RateBtn', { active: value === UP })}
          title={upTitle}
          data-type={UP}
          icon="thumbs-up"
          onClick={handleUpClick}
        />
      )}
      {value !== UP && (
        <IconButton
          className={clsx('RateBtn', { active: value === DOWN })}
          title={downTitle}
          data-type={DOWN}
          icon="thumbs-down"
          onClick={handleDownClick}
        />
      )}
    </div>
  );
};
