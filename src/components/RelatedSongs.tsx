import type { WorldChartResponse } from 'interface';
import SongBar from './SongBar';

interface Props {
  data: WorldChartResponse[];
  artistId?: string;
}

export const RelatedSongs = ({ data, artistId = '' }: Props) => {
  return (
    <div className='flex flex-col'>
      <h1 className='font-bold text-3xl text-white'>Related Songs:</h1>
      <div className='mt-6 w-full flex flex-col'>
        {data?.map((song, i) => (
          <SongBar
            key={`${song.key}-${artistId}`}
            song={song}
            i={i}
            artistId={artistId}
            data={data}
          />
        ))}
      </div>
    </div>
  );
};
