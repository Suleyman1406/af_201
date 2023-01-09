import {  configureStore } from '@reduxjs/toolkit'
import Favorites from 'pages/favorites'
import CartSlice from './slice/cart'
import FavoritesSlice from './slice/favorites'


export const store = configureStore({
  reducer: {
    cart: CartSlice.reducer,
    favorites: FavoritesSlice.reducer
  }
})