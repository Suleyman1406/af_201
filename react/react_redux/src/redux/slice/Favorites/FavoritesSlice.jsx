import { createSlice } from '@reduxjs/toolkit'

const FavoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    coins: []
  },
  reducers:{
    addCoinToFavorites: (state,action)=>{
      console.log(action.payload);
      state.coins.push(action.payload)
    },
    removeCoinFromFavorites: (state,action) => {
      state.coins.splice(state.coins.findIndex(coin=>coin.id===action.payload),1)
    },
    clearFavorites: (state)=>{
      console.log(state);
      state.coins=[];
    }
  }
})


export const { addCoinToFavorites,removeCoinFromFavorites,clearFavorites } = FavoritesSlice.actions
export default FavoritesSlice;