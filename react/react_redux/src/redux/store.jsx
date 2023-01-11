import {  configureStore } from '@reduxjs/toolkit'
import FavoritesSlice from './slice/Favorites/FavoritesSlice'


export const store = configureStore({
  reducer: FavoritesSlice.reducer
})