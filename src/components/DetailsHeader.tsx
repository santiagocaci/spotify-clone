import type { FC } from 'react';
import { Link } from 'react-router-dom';
import type { TrackDetailsResponse } from 'interface';

interface Props {
  artistId: string;
  songData: TrackDetailsResponse;
  artistData?: any;
}

export const DetailsHeader: FC<Props> = ({
  artistId,
  songData,
  artistData,
}) => {
  const artist = artistData?.artists[artistId].attributes;

  return (
    <div className='relative w-full flex flex-col'>
      <div className='w-full bg-gradient-to-l from-transparent to-black h-48 md:h-28' />
      <div className='absolute inset-0 flex items-center'>
        <img
          src={
            artistId
              ? artist?.artwork?.url.replace('{w}', '500').replace('{h}', '500')
              : songData.images.coverart
          }
          alt='art'
          className='w-48 md:w-48 h-48 md:h-28 rounded-full object-cover border-2 shadow-xl shadow-black'
        />
        <div className='ml-5'>
          <p className='font-bold text-3xl md:text-xl text-white'>
            {artistId ? artist.name : songData?.title}
          </p>
          {!artistId && (
            <Link to={`/artists/${songData?.artists[0].adamid}`}>
              <p className='text-base text-gray-400 mt-2'>
                {songData?.subtitle}
              </p>
            </Link>
          )}
          <p className='text-base text-gray-400 mt-2'>
            {artistId ? artist.genreNames[0] : songData?.genres?.primary}
          </p>
        </div>
      </div>
      <div className='w-full h-44 md:h-24' />
    </div>
  );
};
