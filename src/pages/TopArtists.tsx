import { Error, Loader, ArtistCard } from 'components';
import { useGetTopChartsQuery } from 'redux/services';

export const TopArtists = () => {
  const { data, isFetching, isError } = useGetTopChartsQuery();

  if (isFetching) return <Loader title='Loading songs around you' />;

  if (isError) return <Error />;

  return (
    <div className='flex flex-col'>
      <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>
        Top Artists
      </h2>
      <div className='flex flex-wrap justify-start md:justify-center gap-8'>
        {data?.map(track => (
          <ArtistCard key={track.key} track={track} />
        ))}
      </div>
    </div>
  );
};
