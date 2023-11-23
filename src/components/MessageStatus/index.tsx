import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Icon } from '../Icon';
import { IconButton } from '../IconButton';

export type IMessageStatus = 'pending' | 'sent' | 'fail';

type StatusType = '' | 'loading' | 'fail';

export interface MessageStatusProps {
  status: IMessageStatus;
  delay?: number;
  maxDelay?: number;
  retryInterval?: number;
  onRetry?: (isAutoRetry?: boolean) => void;
  onChange?: (type: StatusType) => void;
}

export const MessageStatus = ({
  status,
  delay = 800,
  maxDelay = 12000,
  retryInterval = 5000,
  onRetry,
  onChange,
}: MessageStatusProps) => {
  const [type, setType] = useState<StatusType>('');
  const loadingTimerRef = useRef<ReturnType<typeof setTimeout>>();
  const failTimerRef = useRef<ReturnType<typeof setTimeout>>();
  const autoTimerRef = useRef<ReturnType<typeof setTimeout>>();

  function clear() {
    if (loadingTimerRef.current) {
      clearTimeout(loadingTimerRef.current);
    }
    if (failTimerRef.current) {
      clearTimeout(failTimerRef.current);
    }
    if (autoTimerRef.current) {
      clearInterval(autoTimerRef.current);
    }
  }

  const doTimeout = useCallback(() => {
    clear();

    loadingTimerRef.current = setTimeout(() => {
      setType('loading');
    }, delay);

    failTimerRef.current = setTimeout(() => {
      setType('fail');
      clear();
    }, maxDelay);

    autoTimerRef.current = setInterval(() => {
      if (onRetry) {
        onRetry(true);
      }
    }, retryInterval);
  }, [delay, maxDelay, onRetry, retryInterval]);

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
          <Icon type="spinner" spin />
        )}
      </div>
    );
  }

  return null;
};
