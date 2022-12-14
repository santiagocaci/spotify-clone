import { useAppDispatch, useAppSelector } from 'redux/hooks';
import type { Song, WorldChartResponse } from 'interface';
import { Link } from 'react-router-dom';
import { PlayPause } from './PlayPause';
import { playPause, setActiveSong } from 'redux/player/playerSlice';

interface Props {
  song?: WorldChartResponse;
  artistSong?: Song;
  data: WorldChartResponse[] | Song[];
  i: number;
  artistId?: string;
}

const SongBar = ({ song, artistSong, i, artistId = '', data }: Props) => {
  const dispatch = useAppDispatch();
  const { activeSong, isPlaying } = useAppSelector(state => state.player);

  const handlePauseClick = () => dispatch(playPause(false));
  const handlePlayClick = () => {
    if (song?.type === 'MUSIC') {
      dispatch(setActiveSong({ song, i, data }));
      dispatch(playPause(true));
    }
  };

  return (
    <div
      className={`w-full flex flex-row items-center hover:bg-[#4c426e] ${
        activeSong?.title === song?.title ? 'bg-[#4c426e]' : 'bg-transparent'
      } py-2 p-4 rounded-lg cursor-pointer mb-2`}
    >
      <h3 className='font-bold text-base text-white mr-3'>{i + 1}.</h3>
      <div className='flex-1 flex flex-row justify-between items-center'>
        <img
          className='w-20 h-20 rounded-lg'
          src={
            artistId
              ? artistSong?.attributes?.artwork?.url
                  .replace('{w}', '125')
                  .replace('{h}', '125')
              : song?.images?.coverart
          }
          alt={song?.title}
        />
        <div className='flex-1 flex flex-col justify-center mx-3'>
          {!artistId ? (
            <Link to={`/songs/${song?.key}`}>
              <p className='text-xl font-bold text-white'>{song?.title}</p>
            </Link>
          ) : (
            <p className='text-xl font-bold text-white'>
              {artistSong?.attributes?.name}
            </p>
          )}
          <p className='text-base text-gray-300 mt-1'>
            {artistId ? artistSong?.attributes?.albumName : song?.subtitle}
          </p>
        </div>
      </div>
      {!artistId ? (
        <PlayPause
          isPlaying={isPlaying}
          activeSong={activeSong!}
          song={song as WorldChartResponse}
          handlePause={handlePauseClick}
          handlePlay={handlePlayClick}
        />
      ) : null}
    </div>
  );
};

export default SongBar;
