import React, { useState, useEffect, useRef, useImperativeHandle, useCallback } from 'react';
import canUse from '../../utils/canUse';
import { ClickOutside } from '../ClickOutside';
import { useLocale } from '../ConfigProvider';
import { Icon } from '../Icon';
import { SoundWave } from './SoundWave';

const canPassive = canUse('passiveListener');
const listenerOpts = canPassive ? { passive: true } : false;
const listenerOptsWithoutPassive = canPassive ? { passive: false } : false;
const MOVE_INTERVAL = 80;

let ts = 0;
let startY = 0;

/** 语音输入状态枚举 */
export const VoiceInputStatus = {
  INITED: 'inited',
  RECORDING: 'recording',
  WILL_CANCEL: 'willCancel',
} as const;

export type VoiceInputStatus = (typeof VoiceInputStatus)[keyof typeof VoiceInputStatus];

/** 状态文案映射 */
const statusTextMap: Record<VoiceInputStatus, string> = {
  [VoiceInputStatus.INITED]: 'hold2talk',
  [VoiceInputStatus.RECORDING]: 'releaseOrSwipe',
  [VoiceInputStatus.WILL_CANCEL]: 'release2send',
};

export interface VoiceInputHandle {
  stop: () => void;
}

export interface VoiceInputProps {
  /** 开始录音回调 */
  onStart?: () => void;
  /** 结束录音回调，返回录音时长 */
  onEnd?: (data: { duration: number }) => void;
  /** 取消录音回调 */
  onCancel?: () => void;
  /** 关闭面板回调 */
  onClose?: () => void;
  /** 语音输入状态变化回调（扩展点），用于联动 Composer 输入框样式变化 */
  onStatusChange?: (status: VoiceInputStatus) => void;
}

export const VoiceInput = React.forwardRef<VoiceInputHandle, VoiceInputProps>((props, ref) => {
  const { onStart, onEnd, onCancel, onClose, onStatusChange } = props;

  const [status, setStatus] = useState<VoiceInputStatus>(VoiceInputStatus.INITED);
  const btnRef = useRef<HTMLDivElement>(null);

  const { trans } = useLocale('VoiceInput');

  const updateStatus = useCallback(
    (newStatus: VoiceInputStatus) => {
      setStatus(newStatus);
      if (onStatusChange) {
        onStatusChange(newStatus);
      }
    },
    [onStatusChange],
  );

  const doEnd = useCallback(() => {
    const duration = Date.now() - ts;
    if (onEnd) {
      onEnd({ duration });
    }
  }, [onEnd]);

  const handleClose = useCallback(() => {
    updateStatus(VoiceInputStatus.INITED);
    if (onClose) {
      onClose();
    }
  }, [onClose, updateStatus]);

  useImperativeHandle(ref, () => ({
    stop() {
      updateStatus(VoiceInputStatus.INITED);
      doEnd();
      ts = 0;
    },
  }));

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    function handleTouchStart(e: TouchEvent) {
      if (e.cancelable) {
        e.preventDefault();
      }
      const touch0 = e.touches[0];
      startY = touch0.pageY;
      ts = Date.now();
      updateStatus(VoiceInputStatus.RECORDING);

      if (onStart) {
        onStart();
      }
    }

    function handleTouchMove(e: TouchEvent) {
      if (!ts) return;
      const nowY = e.touches[0].pageY;
      const isCancel = startY - nowY > MOVE_INTERVAL;
      updateStatus(isCancel ? VoiceInputStatus.WILL_CANCEL : VoiceInputStatus.RECORDING);
    }

    function handleTouchEnd(e: TouchEvent) {
      if (!ts) return;
      const endY = e.changedTouches[0].pageY;
      const isRecording = startY - endY < MOVE_INTERVAL;

      updateStatus(VoiceInputStatus.INITED);

      if (isRecording) {
        doEnd();
      } else if (onCancel) {
        onCancel();
      }
    }

    btn.addEventListener('touchstart', handleTouchStart, listenerOptsWithoutPassive);
    btn.addEventListener('touchmove', handleTouchMove, listenerOpts);
    btn.addEventListener('touchend', handleTouchEnd);
    btn.addEventListener('touchcancel', handleTouchEnd);

    return () => {
      btn.removeEventListener('touchstart', handleTouchStart);
      btn.removeEventListener('touchmove', handleTouchMove);
      btn.removeEventListener('touchend', handleTouchEnd);
      btn.removeEventListener('touchcancel', handleTouchEnd);
    };
  }, [doEnd, onCancel, onStart, updateStatus]);

  const isRecording = status === VoiceInputStatus.RECORDING;
  const isCancel = status === VoiceInputStatus.WILL_CANCEL;

  return (
    <ClickOutside onClick={handleClose}>
      <div className="VoiceInput" data-voice-status={status}>
        <div className="VoiceInput-tip">{trans(statusTextMap[status])}</div>

        <div className="VoiceInput-control">
          {isRecording && <SoundWave />}
          <div
            className="VoiceInput-btn"
            role="button"
            aria-label={trans(statusTextMap[status])}
            ref={btnRef}
          >
            <Icon className="VoiceInput-btnIcon" type={isCancel ? 'cancel' : 'mic'} />
          </div>
        </div>
      </div>
    </ClickOutside>
  );
});
