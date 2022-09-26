import { useRef, useEffect } from 'react';
import type { FC } from 'react';

interface Props {
  activeSong: any;
  isPlaying: boolean;
  repeat: boolean;
  volume: number;
  seekTime: number;
  currentIndex: number;
  onEnded: () => void;
  onTimeUpdate: (arg0: any) => void;
  onLoadedData: (arg0: any) => void;
}

export const Player: FC<Props> = ({
  activeSong,
  isPlaying,
  volume,
  seekTime,
  repeat,
  onEnded,
  onTimeUpdate,
  onLoadedData,
}) => {
  const ref = useRef<HTMLAudioElement>(null);
  if (ref.current) {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }

  useEffect(() => {
    if (ref.current) ref.current.volume = volume;
  }, [volume]);
  // updates audio element only on seekTime change (and not on each rerender):
  useEffect(() => {
    if (ref.current) ref.current.currentTime = seekTime;
  }, [seekTime]);

  return (
    <audio
      src={activeSong?.hub?.actions[1]?.uri}
      ref={ref}
      loop={repeat}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
      onLoadedData={onLoadedData}
    />
  );
};
