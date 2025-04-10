import React, { useEffect, useRef } from 'react';
import { Button } from '../Button';
import { useLocale } from '../ConfigProvider';

interface SendButtonProps {
  disabled?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const SendButton = ({ disabled, onClick }: SendButtonProps) => {
  const { trans } = useLocale('Composer');
  const wrapRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const btn = btnRef.current;
    if (wrap && btn) {
      wrap.style.setProperty('--send-width', `${btn.offsetWidth}px`);
    }
  }, [])

  return (
    <div className="Composer-actions" data-action="send" ref={wrapRef}>
      <Button
        className="Composer-sendBtn"
        disabled={disabled}
        onMouseDown={onClick}
        color="primary"
        ref={btnRef}
      >
        {trans('send')}
      </Button>
    </div>
  );
};
