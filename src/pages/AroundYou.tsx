import { Error, Loader, SongCard } from 'components';
import { useEffect, useState } from 'react';
import { useAppSelector } from 'redux/hooks';
import { useGetSongsByCountryQuery } from 'redux/services';

export const AroundYou = () => {
  const [country, setCountry] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const { activeSong, isPlaying } = useAppSelector(state => state.player);
  const { data, isFetching, isError } = useGetSongsByCountryQuery(country);

  useEffect(() => {
    fetch(
      `https://geo.ipify.org/api/v2/country?apiKey=${
        import.meta.env.VITE_GEO_API_KEY
      }`
    )
      .then(response => response.json())
      .then(data => setCountry(data.location.country))
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false));
  }, [country]);

  if (isFetching && isLoading)
    return <Loader title='Loading songs around you' />;

  if (isError && !country) return <Error />;

  return (
    <div className='flex flex-col'>
      <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>
        Around You <span className='font-black'>{country}</span>
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
