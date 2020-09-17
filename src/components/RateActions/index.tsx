import React, { useState } from 'react';
import clsx from 'clsx';
import { IconButton } from '../IconButton';

const GOOD = 'good';
const BAD = 'bad';

export type RateActionsProps = {
  goodTitle?: string;
  badTitle?: string;
  onClick: (value: string) => void;
};

export const RateActions: React.FC<RateActionsProps> = (props) => {
  const { goodTitle, badTitle, onClick } = props;
  const [value, setValue] = useState('');

  function handleClick(val: string) {
    if (!value) {
      setValue(val);
      onClick(val);
    }
  }

  function handleGoodClick() {
    handleClick(GOOD);
  }

  function handleBadClick() {
    handleClick(BAD);
  }

  return (
    <div className="RateActions">
      {value !== BAD && (
        <IconButton
          className={clsx('RateBtn', { active: value === GOOD })}
          title={goodTitle}
          data-type="good"
          icon="thumbs-up"
          onClick={handleGoodClick}
        />
      )}
      {value !== GOOD && (
        <IconButton
          className={clsx('RateBtn', { active: value === BAD })}
          title={badTitle}
          data-type="bad"
          icon="thumbs-down"
          onClick={handleBadClick}
        />
      )}
    </div>
  );
};
