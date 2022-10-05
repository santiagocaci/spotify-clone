import { Error, Loader, SongCard } from 'components';
import { useGetSongsByGenreQuery } from 'redux/services';
import { genres } from 'assets';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { selectGenreListId } from 'redux/player/playerSlice';

export const Discover = () => {
  const dispatch = useAppDispatch();
  const { activeSong, isPlaying, genreListId } = useAppSelector(
    state => state.player
  );

  const { data, isFetching, error } = useGetSongsByGenreQuery(
    genreListId || 'POP'
  );

  const genreTitle = genres.find(genre => genre.value === genreListId)?.title;

  return (
    <>
      {isFetching ? (
        <Loader title='Loading songs...' />
      ) : error ? (
        <Error />
      ) : (
        <div className='flex flex-col'>
          <div className='w-full flex justify-between items-center flex-row md:flex-col mt-4 mb-10'>
            <h2 className='font-bold text-3xl text-white text-left'>
              Discover {genreTitle || 'Pop'}
            </h2>
            <select
              name=''
              id=''
              onChange={e => dispatch(selectGenreListId(e.target.value))}
              value={genreListId || 'pop'}
              className='bg-black text-gray-300 p-3 text-sm rounde-lg outline-none mt-0 md:mt-5'
            >
              {genres.map(genre => (
                <option key={genre.value} value={genre.value}>
                  {genre.title}
                </option>
              ))}
            </select>
          </div>
          <div className='flex flex-wrap justify-center gap-8'>
            {data?.map((song, index: number) => (
              <SongCard
                key={song.key}
                song={song}
                index={index}
                data={data}
                activeSong={activeSong!}
                isPlaying={isPlaying}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
