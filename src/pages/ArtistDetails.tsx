import { useParams } from 'react-router-dom';

import { useGetArtistDetailsQuery } from 'redux/services';
import { DetailsHeader, Error, Loader, RelatedSongs } from 'components';

export const ArtistDetails = () => {
  const { id: artistId } = useParams();

  const {
    data: artistData,
    isError,
    isFetching,
  } = useGetArtistDetailsQuery(artistId!);

  if (isFetching) return <Loader title='Searching song details' />;

  if (isError) return <Error />;

  return (
    <div className='flex flex-col'>
      <DetailsHeader artistId={artistId!} artistData={artistData} />

      <RelatedSongs
        data={Object.values(artistData?.songs!)}
        artistId={artistId}
      />
    </div>
  );
};
