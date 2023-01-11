import Kart from "components/Kart";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearFavorites } from "redux/slice/Favorites/FavoritesSlice";

const Fav = () => {
  const coins = useSelector((state) => state.coins);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(clearFavorites())}>
        Clear All Favorites
      </button>
      <div className="Image">
        {coins && coins.map((coin) => <Kart coin={coin} />)}
      </div>
    </div>
  );
};

export default Fav;
