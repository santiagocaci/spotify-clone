import type { Song, WorldChartResponse } from 'interface';
import SongBar from './SongBar';

interface Props {
  data?: WorldChartResponse[] | Song[];
  artistId?: string;
}

export const RelatedSongs = ({ data, artistId = '' }: Props) => {
  return (
    <div className='flex flex-col'>
      <h1 className='font-bold text-3xl text-white'>Related Songs:</h1>
      <div className='mt-6 w-full flex flex-col'>
        {data?.map((song, i) => {
          const key = song.type === 'MUSIC' ? song.key : song.id;
          if (song.type === 'MUSIC') {
            return (
              <SongBar
                key={`${key}-${artistId}`}
                song={song}
                i={i}
                artistId={artistId}
                data={data}
              />
            );
          } else {
            return (
              <SongBar
                key={`${key}-${artistId}`}
                artistSong={song}
                i={i}
                artistId={artistId}
                data={data}
              />
            );
          }
        })}
      </div>
    </div>
  );
};
