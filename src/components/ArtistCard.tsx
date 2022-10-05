import type { FC } from 'react';
import { WorldChartResponse } from 'interface';
import { useNavigate } from 'react-router-dom';

interface Props {
  track: WorldChartResponse;
}

export const ArtistCard: FC<Props> = ({ track }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/artists/${track?.artists[0].adamid}`)}
      className='flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer'
    >
      <img
        src={track?.images?.coverart}
        alt='artist'
        className='w-full h-5/6 rounded-lg'
      />
      <p className='mt-4 font-semibold text-lg text-white truncate'>
        {track?.subtitle}
      </p>
    </div>
  );
};
