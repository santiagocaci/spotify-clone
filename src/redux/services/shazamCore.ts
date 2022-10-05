import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  WorldChartResponse,
  TrackDetailsResponse,
  ArtistDetailsResponse,
} from 'interface';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1/',
    prepareHeaders: (headers, { getState }) => {
      headers.set(
        'X-RapidAPI-Key',
        '46a53f5ba6mshe1c19e56d6350edp142f36jsn69d7bb7452bf'
      );
      return headers;
    },
  }),
  endpoints: builder => ({
    getTopCharts: builder.query<WorldChartResponse[], void>({
      query: () => 'charts/world',
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
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailsQuery,
  useGetSongsByCountryQuery,
} = shazamCoreApi;
