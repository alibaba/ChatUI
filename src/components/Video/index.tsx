/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState, useRef, useImperativeHandle } from 'react';
import clsx from 'clsx';
import { formatTime } from '../../utils/formatTime';

export interface VideoHandle {
  wrapperRef: React.RefObject<HTMLDivElement>;
}

export type VideoProps = React.VideoHTMLAttributes<HTMLVideoElement> & {
  className?: string;
  src?: string;
  cover?: string;
  duration?: string | number;
  style?: React.CSSProperties;
  videoRef?: React.RefObject<HTMLVideoElement>;
  onClick?: (paused: boolean, event: React.MouseEvent) => void;
  onCoverLoad?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
};

export const Video = React.forwardRef<VideoHandle, VideoProps>((props, ref) => {
  const {
    className,
    src,
    cover,
    duration,
    onClick,
    onCoverLoad,
    style,
    videoRef: outerVideoRef,
    children,
    ...other
  } = props;

  const wrapperRef = useRef<HTMLDivElement>(null!);
  const localVideoRef = useRef<HTMLVideoElement>(null!);
  const videoRef = outerVideoRef || localVideoRef;

  const [isPlayed, setIsPlayed] = useState(false);
  const [paused, setPaused] = useState(true);

  function handleClick(e: React.MouseEvent) {
    setIsPlayed(true);
    const video = videoRef.current;

    if (video) {
      if (video.ended || video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
    if (onClick) {
      onClick(paused, e);
    }
  }

  function handlePlay() {
    setPaused(false);
  }

  function handlePause() {
    setPaused(true);
  }

  const hasCover = !isPlayed && !!cover;
  const hasDuration = hasCover && !!duration;

  useImperativeHandle(ref, () => ({
    wrapperRef,
  }));

  return (
    <div
      className={clsx('Video', `Video--${paused ? 'paused' : 'playing'}`, className)}
      style={style}
      ref={wrapperRef}
    >
      {hasCover && <img className="Video-cover" src={cover} onLoad={onCoverLoad} alt="" />}
      {hasDuration && <span className="Video-duration">{formatTime(+duration)}</span>}
      <video
        className="Video-video"
        src={src}
        ref={videoRef}
        hidden={hasCover}
        controls
        onPlay={handlePlay}
        onPause={handlePause}
        onEnded={handlePause}
        {...other}
      >
        {children}
      </video>
      {hasCover && (
        <button className={clsx('Video-playBtn', { paused })} type="button" onClick={handleClick}>
          <span className="Video-playIcon" />
        </button>
      )}
    </div>
  );
});
