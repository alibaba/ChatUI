import React, { useState, useEffect, useRef, useImperativeHandle, useCallback } from 'react';
import clsx from 'clsx';
import { Flex } from '../Flex';
import { Icon } from '../Icon';
import { useLocale } from '../LocaleProvider';
import canUse from '../../utils/canUse';

const canPassive = canUse('passiveListener');
const listenerOpts = canPassive ? { passive: true } : false;
const listenerOptsWithoutPassive = canPassive ? { passive: false } : false;
const MOVE_INTERVAL = 80;

interface ButtonTextMap {
  [k: string]: string;
}

const btnTextMap: ButtonTextMap = {
  inited: 'hold2talk',
  recording: 'release2send',
  willCancel: 'release2send',
};

let ts = 0;
let startY = 0;

export interface RecorderHandle {
  stop: () => void;
}

export interface RecorderProps {
  canRecord?: boolean;
  volume?: number;
  Recording?: React.ElementType;
  onStart?: () => void;
  onEnd?: (data: { duration: number }) => void;
  onCancel?: () => void;
  ref?: React.MutableRefObject<RecorderHandle>;
}

export interface RecordingProps {
  /**
   * 语音文案
   */
  text?: string;
  /**
   * 状态
   */
  status?: 'inited' | 'willCancel' | 'recording';
  /**
   * 动画的大小
   */
  volume?: number;
}

function DRecording({ text, status, volume }: RecordingProps) {
  const wavesStyle = { transform: `scale(${(volume || 1) / 100 + 1})` };
  return <Flex className="RecorderToast" direction="column" center>
    <div className="RecorderToast-waves" hidden={status !== 'recording'} style={wavesStyle}>
      <Icon className="RecorderToast-wave-1" type="hexagon" />
      <Icon className="RecorderToast-wave-2" type="hexagon" />
      <Icon className="RecorderToast-wave-3" type="hexagon" />
    </div>
    <Icon className="RecorderToast-icon" type={status === 'willCancel' ? 'cancel' : 'mic'} />
    { text ? <span>{text}</span> : null}
  </Flex>
}

export const Recorder = React.forwardRef<RecorderHandle, RecorderProps>((props, ref) => {
  const { volume, Recording = DRecording, onStart, onEnd, onCancel } = props;
  const [status, setStatus] = useState('inited');
  const btnRef = useRef<HTMLDivElement>(null);
  const { trans } = useLocale('Recorder');

  const doEnd = useCallback(() => {
    const duration = Date.now() - ts;
    if (onEnd) {
      onEnd({ duration });
    }
  }, [onEnd]);

  useImperativeHandle(ref, () => ({
    stop() {
      setStatus('inited');
      doEnd();
      ts = 0;
    },
  }));

  useEffect(() => {
    const wrapper = btnRef.current!;

    function handleTouchStart(e: TouchEvent) {
      if (e.cancelable) {
        e.preventDefault();
      }
      const touch0 = e.touches[0];
      startY = touch0.pageY;
      ts = Date.now();
      setStatus('recording');

      if (onStart) {
        onStart();
      }
    }

    function handleTouchMove(e: TouchEvent) {
      if (!ts) return;
      const nowY = e.touches[0].pageY;
      const isCancel = startY - nowY > MOVE_INTERVAL;
      setStatus(isCancel ? 'willCancel' : 'recording');
    }

    function handleTouchEnd(e: TouchEvent) {
      if (!ts) return;
      const endY = e.changedTouches[0].pageY;
      const isRecording = startY - endY < MOVE_INTERVAL;

      setStatus('inited');

      if (isRecording) {
        doEnd();
      } else if (onCancel) {
        onCancel();
      }
    }

    wrapper.addEventListener('touchstart', handleTouchStart, listenerOptsWithoutPassive);
    wrapper.addEventListener('touchmove', handleTouchMove, listenerOpts);
    wrapper.addEventListener('touchend', handleTouchEnd);
    wrapper.addEventListener('touchcancel', handleTouchEnd);

    return () => {
      wrapper.removeEventListener('touchstart', handleTouchStart);
      wrapper.removeEventListener('touchmove', handleTouchMove);
      wrapper.removeEventListener('touchend', handleTouchEnd);
      wrapper.removeEventListener('touchcancel', handleTouchEnd);
    };
  }, [doEnd, onCancel, onStart]);

  const isCancel = status === 'willCancel';

  return (
    <div className={clsx('Recorder', { 'Recorder--cancel': isCancel })} ref={btnRef}>
      {status !== 'inited' && <Recording
        text={trans(isCancel ? 'release2cancel' : 'releaseOrSwipe')}
        volume={volume}
        status={status}
      />}
      <div className="Recorder-btn" role="button" aria-label={trans('hold2talk')}>
        <span>{trans(btnTextMap[status])}</span>
      </div>
    </div>
  );
});
