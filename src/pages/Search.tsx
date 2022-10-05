import { Error, Loader, SongCard } from 'components';
import { useParams } from 'react-router-dom';
import { useAppSelector } from 'redux/hooks';
import { useGetSongsBySearchQuery } from 'redux/services';

export const Search = () => {
  const { searchTerm } = useParams();

  const { activeSong, isPlaying } = useAppSelector(state => state.player);
  const { data, isFetching, isError } = useGetSongsBySearchQuery(searchTerm!);

  const songs = data?.tracks?.hits?.map(song => song.track)!;

  if (isFetching) return <Loader title='Loading songs around you' />;

  if (isError) return <Error />;

  return (
    <div className='flex flex-col'>
      <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>
        Showing results for <span className='font-black'>{searchTerm}</span>
      </h2>
      <div className='flex flex-wrap justify-start md:justify-center gap-8'>
        {songs.map((song, i) => (
          <SongCard
            key={song.key}
            activeSong={activeSong!}
            isPlaying={isPlaying}
            data={songs}
            index={i}
            song={song}
          />
        ))}
      </div>
    </div>
  );
};
