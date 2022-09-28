import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from 'redux/hooks';
import { playPause, setActiveSong } from 'redux/player/playerSlice';

import type { WorldChartResponse } from 'interface';
import { PlayPause } from './PlayPause';

interface Props {
  song: WorldChartResponse;
  index: number;
  isPlaying: boolean;
  data: WorldChartResponse[];
  activeSong: WorldChartResponse;
}

export const SongCard: FC<Props> = ({
  song,
  index,
  isPlaying,
  data,
  activeSong,
}) => {
  const dispatch = useAppDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i: index }));
    dispatch(playPause(true));
  };

  return (
    <div className='flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer'>
      <div className='relative w-full h-56 group'>
        <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
            activeSong?.title === song.title
              ? 'flex bg-black bg-opacity-70'
              : 'hidden'
          }`}
        >
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <img src={song.images?.coverart} alt={song.title} />
      </div>
      <div className='mt-4 flex flex-col'>
        <p className='font-semibold text-lg text-white truncate'>
          <Link to={`/songs/${song.key}`}>{song.title}</Link>
        </p>
        <p className='text-sm truncate text-gray-300 mt-1'>
          <Link
            to={
              song.artists
                ? `/artist/${song?.artists[0].adamid}`
                : '/top-artists'
            }
          >
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
};
