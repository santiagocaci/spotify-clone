import { Error, Loader, SongCard } from 'components';
import { useAppSelector } from 'redux/hooks';
import { useGetTopChartsQuery } from 'redux/services';

export const TopCharts = () => {
  const { activeSong, isPlaying } = useAppSelector(state => state.player);
  const { data, isFetching, isError } = useGetTopChartsQuery();

  if (isFetching) return <Loader title='Loading songs around you' />;

  if (isError) return <Error />;

  return (
    <div className='flex flex-col'>
      <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>
        Discover Top Charts
      </h2>
      <div className='flex flex-wrap justify-start md:justify-center gap-8'>
        {data?.map((song, i) => (
          <SongCard
            key={song.key}
            activeSong={activeSong!}
            isPlaying={isPlaying}
            data={data}
            index={i}
            song={song}
          />
        ))}
      </div>
    </div>
  );
};
