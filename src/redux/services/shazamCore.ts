import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  WorldChartResponse,
  TrackDetailsResponse,
  ArtistDetailsResponse,
  SongsBySearchResponse,
} from 'interface';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1/',
    prepareHeaders: (headers, { getState }) => {
      headers.set(
        'X-RapidAPI-Key',
        import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY
      );
      return headers;
    },
  }),
  endpoints: builder => ({
    getTopCharts: builder.query<WorldChartResponse[], void>({
      query: () => 'charts/world',
    }),
    getSongsByGenre: builder.query<WorldChartResponse[], string>({
      query: genre => `charts/genre-world?genre_code=${genre}`,
    }),
    getSongDetails: builder.query<TrackDetailsResponse, string>({
      query: songid => `tracks/details?track_id=${songid}`,
    }),
    getSongRelated: builder.query<WorldChartResponse[], string>({
      query: songId => `tracks/related?track_id=${songId}`,
    }),
    getArtistDetails: builder.query<ArtistDetailsResponse, string>({
      query: artistId => `artists/details?artist_id=${artistId}`,
    }),
    getSongsByCountry: builder.query<WorldChartResponse[], string>({
      query: countryCode => `charts/country?country_code=${countryCode}`,
    }),
    getSongsBySearch: builder.query<SongsBySearchResponse, string>({
      query: term => `search/multi?search_type=SONGS_ARTISTS&query=${term}`,
    }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailsQuery,
  useGetSongsByCountryQuery,
  useGetSongsByGenreQuery,
  useGetSongsBySearchQuery,
} = shazamCoreApi;
