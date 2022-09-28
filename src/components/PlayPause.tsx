import type { FC } from 'react';

import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

import type { WorldChartResponse } from 'interface';

interface Props {
  isPlaying: boolean;
  activeSong: WorldChartResponse;
  song: WorldChartResponse;
  handlePause: () => void;
  handlePlay: () => void;
}

export const PlayPause: FC<Props> = ({
  activeSong,
  isPlaying,
  song,
  handlePause,
  handlePlay,
}) =>
  isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle size={35} className='text-gray-300' onClick={handlePause} />
  ) : (
    <FaPlayCircle size={35} className='text-gray-300' onClick={handlePlay} />
  );
