import React, { useCallback, useEffect, useMemo, useState } from "react";
import "assets/table.css";
import { getCoin } from "service/getCoin";
import { useDispatch } from "react-redux";
import { addCoinToFavorites } from "redux/slice/Favorites/FavoritesSlice";

export const Table = () => {
  const [coins, setCoins] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const dispatch = useDispatch();

  const getCoinFromApi = useCallback(() => {
    getCoin(pageCount).then((res) => {
      if (res.status === 200) {
        setCoins(res.data);
      }
    });
  }, [pageCount]);

  useEffect(() => {
    getCoinFromApi();
  }, [pageCount, getCoinFromApi]);

  const goToPrevious = useCallback(() => {
    setPageCount(pageCount - 1);
  }, [pageCount]);

  const goToNext = useCallback(() => {
    setPageCount(pageCount + 1);
  }, [pageCount]);

  let shownCoins = useMemo(
    () => coins.sort((a, b) => a.current_price - b.current_price),
    [coins]
  );

  return (
    <>
      <div className="stol">
        <table className="table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Coin Name</th>
              <th>Price</th>
              <th>Price Change</th>
              <th>market Cap</th>
              <th>Add to favorites</th>
            </tr>
          </thead>
          <tbody>
            {shownCoins &&
              shownCoins.map((coin) => (
                <tr>
                  <th>{coin.market_cap_rank}</th>
                  <td>
                    <img className="imgIcons" alt="yoxdu" src={coin.image} />
                    {coin.name}
                  </td>
                  <td>${coin.current_price}</td>
                  <td
                    style={
                      coin.price_change_percentage_24h > 0
                        ? { color: "green" }
                        : { color: "red" }
                    }
                  >
                    {coin.price_change_percentage_24h}
                    {coin.price_change_percentage_24h > 0 ? (
                      <i className="fa-solid fa-arrow-trend-up" />
                    ) : (
                      <i className="fa-solid fa-arrow-trend-down" />
                    )}
                  </td>
                  <td style={{ color: "grey" }}>{coin.market_cap}</td>
                  <td>
                    <button
                      className="addBtn"
                      onClick={() => {
                        dispatch(addCoinToFavorites(coin));
                      }}
                    >
                      Add to Favorites
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="mainHomebtn">
        <button disabled={pageCount === 1} onClick={goToPrevious}>
          Previous page
        </button>
        <p>Page {pageCount}</p>
        <button disabled={coins.length < 100} onClick={goToNext}>
          Next Page
        </button>
      </div>
    </>
  );
};
