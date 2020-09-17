import React, { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';

export interface VideoProps {
  className?: string;
  src: string;
  cover?: string;
  duration?: string | number;
  style?: React.CSSProperties;
  onClick?: (paused: boolean, event: React.MouseEvent) => void;
  onCoverLoad?: (event: React.SyntheticEvent) => void;
}

export const Video: React.FC<VideoProps> = (props) => {
  const { className, src, cover, duration, onClick, onCoverLoad, style, ...other } = props;

  const [isPlayed, setIsPlayed] = useState(false);
  const [paused, setPaused] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

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

  useEffect(() => {
    const video = videoRef.current;
    const handlePlay = () => {
      setPaused(false);
    };
    const handlePause = () => {
      setPaused(true);
    };

    if (video) {
      video.addEventListener('play', handlePlay);
      video.addEventListener('pause', handlePause);
      video.addEventListener('ended', handlePause);
    }

    return () => {
      if (video) {
        video.removeEventListener('play', handlePlay);
        video.removeEventListener('pause', handlePause);
        video.removeEventListener('ended', handlePause);
      }
    };
  }, []);

  return (
    <div
      className={clsx('Video', `Video--${paused ? 'paused' : 'playing'}`, className)}
      style={style}
    >
      {!isPlayed && (
        <>
          {cover && <img className="Video-cover" src={cover} onLoad={onCoverLoad} alt="" />}
          {duration && <span className="Video-duration">{duration}</span>}
        </>
      )}
      <video
        className="Video-video"
        src={src}
        ref={videoRef}
        hidden={!!cover && !isPlayed}
        controls
        {...other}
      />
      <button className={clsx('Video-playBtn', { paused })} type="button" onClick={handleClick}>
        <span className="Video-playIcon" />
      </button>
    </div>
  );
};
