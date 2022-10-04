import { useEffect, useRef } from 'react';
import type { FC } from 'react';

import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { useGetTopChartsQuery } from 'redux/services';
import { playPause, setActiveSong } from 'redux/player/playerSlice';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';

import { PlayPause } from './PlayPause';

import 'swiper/css';
import 'swiper/css/free-mode';
import type { WorldChartResponse } from 'interface';

interface TopChartCardProps {
  song: WorldChartResponse;
  index: number;
  isPlaying: boolean;
  activeSong: WorldChartResponse;
  data: WorldChartResponse[];
}

const TopChartCard: FC<TopChartCardProps> = ({
  song,
  index,
  activeSong,
  isPlaying,
  data,
}) => {
  const dispatch = useAppDispatch();
  const handlePauseClick = () => dispatch(playPause(false));
  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i: index }));
    dispatch(playPause(true));
  };

  return (
    <div className='w-full flex flex-row items-center hover:bg-[#4c426e] p-4 py-2 rounded-lg cursor-pointer mb-2'>
      <h3 className='font-bold text-base text-white mr-3'>{index + 1}.</h3>
      <div className='flex-1 flex flex-row justify-between items-center'>
        <img
          src={song?.images?.coverart}
          alt={song?.title}
          className='w-20 h-20 rounded-lg'
        />
        <div className='flex-1 flex flex-col justify-center mx-3'>
          <Link to={`/songs/${song?.key}`}>
            <p className='text-xl font-bold text-white'>{song?.title}</p>
          </Link>
          <Link to={`/artists/${song?.artists[0].adamid}`}>
            <p className='text-base text-gray-300'>{song?.subtitle}</p>
          </Link>
        </div>
      </div>
      <PlayPause
        isPlaying={isPlaying}
        activeSong={activeSong}
        song={song}
        handlePause={handlePauseClick}
        handlePlay={handlePlayClick}
      />
    </div>
  );
};

export const TopPlay = () => {
  const { activeSong, isPlaying } = useAppSelector(state => state.player);
  const { data } = useGetTopChartsQuery();

  const divRef = useRef<HTMLDivElement>(null);

  const topPlays = data?.slice(0, 5);

  useEffect(() => {
    if (divRef) divRef.current?.scrollIntoView({ behavior: 'smooth' });
  });

  return (
    <div
      ref={divRef}
      className='ml-0 xl:ml-6 mb-6 xl:mb-0 flex-1 max-w-full xl:max-w-[500px] flex flex-col'
    >
      {/* Top Charts  */}
      <div className='w-full flex flex-col mt-10 md:mt-0'>
        <div className='flex flex-row justify-between items-center'>
          <h2 className='text-white font-bold text-2xl'>Top Charts</h2>
          <Link to='/top-charts'>
            <p className='text-gray-300 text-base cursor-pointer'>See more</p>
          </Link>
        </div>
        <div className='mt-4 flex flex-col gap-1'>
          {topPlays?.map((song, index) => (
            <TopChartCard
              key={song.key}
              song={song}
              index={index}
              isPlaying={isPlaying}
              activeSong={activeSong!}
              data={data!}
            />
          ))}
        </div>
      </div>

      {/* Top Artists */}
      <div className='w-full flex flex-col mt-8'>
        <div className='flex flex-row justify-between items-center'>
          <h2 className='text-white font-bold text-2xl'>Top Artists</h2>
          <Link to='/top-artists'>
            <p className='text-gray-300 text-base cursor-pointer hover:underline'>
              See more
            </p>
          </Link>
        </div>
      </div>
      <Swiper
        slidesPerView='auto'
        spaceBetween={15}
        freeMode
        centeredSlidesBounds
        modules={[FreeMode]}
        className='mt-4'
      >
        {topPlays?.map((song, index) => (
          <SwiperSlide
            key={song.key}
            style={{ width: '25%', height: 'auto' }}
            className='shadow-lg rounded-full animate-slideright'
          >
            <Link to={`/artists/${song?.artists[0].adamid}`}>
              <img
                src={song?.images.background}
                alt={song.title}
                className='rounded-full w-full object-cover'
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
