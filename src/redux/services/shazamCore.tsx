import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", "d880821e04msh4c829cb5cc88913p15212ejsn1e2492313947");
      headers.set("X-RapidAPI-Host", "shazam-core.p.rapidapi.com");

      return headers;
    }
  }),
  endpoints: (build) => ({
    getTopCharts: build.query({ query: () => '/charts/world' }),
    getSongDetails: build.query({ query: ({ songid }) => `/tracks/details?track_id=${songid}` })
  })
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery
} = shazamCoreApi;