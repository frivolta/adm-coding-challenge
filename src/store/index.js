import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { peopleApi } from './services/peopleApi'

export const store = configureStore({
    reducer: {
        // Add the generated reducer as a specific top-level slice
        [peopleApi.reducerPath]: peopleApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(peopleApi.middleware),
})

setupListeners(store.dispatch)