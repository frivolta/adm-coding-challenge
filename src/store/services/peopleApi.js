import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const peopleApi = createApi({
    reducerPath: 'peopleApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://swapi.dev/api/people'}),
    endpoints: (builder) => ({
        getPeopleByPage: builder.query({
            query: (page=1) => `?page=${page?.toString() ?? '1'}`,
        }),
    }),
    tagTypes: ['People'],
})
export const { useGetPeopleByPageQuery, useLazyGetPeopleByPageQuery } = peopleApi

