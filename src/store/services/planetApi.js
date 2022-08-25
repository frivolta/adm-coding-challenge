import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const planetApi = createApi({
    reducerPath: 'planetApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://swapi.dev/api/'}),
    endpoints: (builder) => ({
        getPlanet: builder.query({
            query: (planet=1) => `planets/${planet?.toString() ?? '1'}`,
        }),
    }),
    tagTypes: ['Planet'],
})
export const { useGetPlanetQuery } = planetApi

