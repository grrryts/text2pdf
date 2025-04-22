import { localStorageKeys } from '@/lib/constants/localStorage.constants';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { addConvertedPdf } from '../slices/core.slice';

import { RootState } from '..';

export const transformResponse = (response: Blob) => {
  const url = URL.createObjectURL(response);

  return url;
};

export const convertApi = createApi({
  reducerPath: 'convertApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.BASE_URL }),
  tagTypes: ['convert'],
  endpoints: (builder) => ({
    convert: builder.query<string, string>({
      query: (text) => {
        return {
          url: `/create-pdf?apiKey=${process.env.API_KEY}`,
          method: 'POST',
          responseHandler: (response) => response.blob(),
          body: {
            text,
          },
        };
      },

      transformResponse,

      onQueryStarted(value, { getState, dispatch, queryFulfilled }) {
        queryFulfilled.then(() => {
          const { convertedPdfList } = (getState() as RootState).core;

          if (!convertedPdfList.includes(value)) {
            dispatch(addConvertedPdf(value));
          }

          localStorage.setItem(
            localStorageKeys.convertedPdfList,
            JSON.stringify([...convertedPdfList, value]),
          );
        });
      },
    }),
  }),
});

export const { useLazyConvertQuery } = convertApi;
