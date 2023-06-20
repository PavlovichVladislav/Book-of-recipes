import { configureStore } from '@reduxjs/toolkit'

import favourites from './favourites/favouritesSlice';

export const store = configureStore({
  reducer: {favourites},
  devTools: true,
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch