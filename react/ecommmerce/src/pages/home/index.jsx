import Navbar from "components/navbar";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "redux/slice/cart";
import { addProductToFavorites } from "redux/slice/favorites";
import { getProducts } from "service/getProducts";

export const Home = () => {
  const [products, setProducts] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    getProducts().then((res) => {
      if (res.status === 200) {
        setProducts(res.data);
        console.log(res.data);
      }
    });
  }, []);

  return (
    <div>
      <Navbar />
      {products &&
        products.map((product) => (
          <div key={product.id}>
            <span>{product.name}</span>
            <button
              onClick={() => {
                dispatch(addProduct(product));
              }}
            >
              Add
            </button>
            <button
              onClick={() => {
                dispatch(addProductToFavorites(product));
              }}
            >
              Add to Favorite
            </button>
          </div>
        ))}
    </div>
  );
};

export default Home;
