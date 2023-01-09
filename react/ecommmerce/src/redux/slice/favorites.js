import { createSlice } from '@reduxjs/toolkit'

const FavoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    products: []
  },
  reducers:{
    addProductToFavorites: (state,action)=>{
      state.products.push(action.payload)
    },
    removeProductFromFavorites: (state,action) => {
      state.products.splice(state.products.findIndex(product=>product.id===action.payload),1)
    },
    clearFavorites: (state)=>{
      console.log(state);
      state.products=[];
    }
  }
})


export const { addProductToFavorites, removeProductFromFavorites, clearFavorites } = FavoritesSlice.actions
export default FavoritesSlice;