import Navbar from "components/navbar";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearFavorites,
  removeProductFromFavorites,
} from "redux/slice/favorites";

const Favorites = () => {
  const { products } = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  return (
    <div>
      <Navbar />
      Favorites
      <button onClick={() => dispatch(clearFavorites())}>Clear</button>
      {products &&
        products.map((product) => (
          <div key={product.id}>
            <span>{product.name}</span>
            <button
              onClick={() => dispatch(removeProductFromFavorites(product.id))}
            >
              Remove
            </button>
          </div>
        ))}
    </div>
  );
};

export default Favorites;
