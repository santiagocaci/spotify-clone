import { useParams } from 'react-router-dom';

import { useGetSongDetailsQuery, useGetSongRelatedQuery } from 'redux/services';
import { DetailsHeader, Error, Loader, RelatedSongs } from 'components';

export const SongDetails = () => {
  const { songId } = useParams();
  console.log(songId);
  const { data: songData, isFetching: isFetchingSongDetails } =
    useGetSongDetailsQuery(songId!);
  const {
    data,
    isFetching: isFetchingRelatedSongs,
    isError: isErrorSongRelated,
  } = useGetSongRelatedQuery(songId!);

  if (isFetchingRelatedSongs || isFetchingSongDetails)
    return <Loader title='Searching song details' />;

  if (isErrorSongRelated) return <Error />;

  return (
    <div className='flex flex-col'>
      <DetailsHeader artistId={''} songData={songData!} />

      <div className='mb-10'>
        <h2 className='text-white text-3xl font-bold'>Lyrics:</h2>
        <div className='mt-5'>
          {songData?.sections[1].type === 'LYRICS' ? (
            songData.sections[1].text?.map((line, index) => (
              <p className='text-gray-400 text-base my-1' key={index}>
                {line}
              </p>
            ))
          ) : (
            <p className='text-gray-400 text-base my-1'>
              Sorry, no lyrics found!{' '}
            </p>
          )}
        </div>
      </div>
      <RelatedSongs data={data!} />
    </div>
  );
};
