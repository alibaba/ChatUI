import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Icon } from '../Icon';
import { IconButton } from '../IconButton';

export type IMessageStatus = 'pending' | 'sent' | 'fail';

type StatusType = '' | 'loading' | 'fail';

export interface MessageStatusProps {
  status: IMessageStatus;
  delay?: number;
  maxDelay?: number;
  onRetry?: () => void;
  onChange?: (type: StatusType) => void;
}

export const MessageStatus = ({
  status,
  delay = 1500,
  maxDelay = 5000,
  onRetry,
  onChange,
}: MessageStatusProps) => {
  const [type, setType] = useState<StatusType>('');
  const loadingTimerRef = useRef<ReturnType<typeof setTimeout>>();
  const failTimerRef = useRef<ReturnType<typeof setTimeout>>();

  const doTimeout = useCallback(() => {
    loadingTimerRef.current = setTimeout(() => {
      setType('loading');
    }, delay);

    failTimerRef.current = setTimeout(() => {
      setType('fail');
    }, maxDelay);
  }, [delay, maxDelay]);

  function clear() {
    if (loadingTimerRef.current) {
      clearTimeout(loadingTimerRef.current);
    }
    if (failTimerRef.current) {
      clearTimeout(failTimerRef.current);
    }
  }

  useEffect(() => {
    clear();
    if (status === 'pending') {
      doTimeout();
    } else if (status === 'sent') {
      setType('');
    } else if (status === 'fail') {
      setType('fail');
    }

    return clear;
  }, [status, doTimeout]);

  useEffect(() => {
    if (onChange) {
      onChange(type);
    }
  }, [onChange, type]);

  function handleRetry() {
    setType('loading');
    doTimeout();
    if (onRetry) {
      onRetry();
    }
  }

  if (type) {
    return (
      <div className="MessageStatus" data-status={type}>
        {type === 'fail' ? (
          <IconButton icon="warning-circle-fill" onClick={handleRetry} />
        ) : (
          <Icon type="spinner" spin onClick={handleRetry} />
        )}
      </div>
    );
  }

  return null;
};
