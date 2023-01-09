import Navbar from "components/navbar";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeProduct } from "redux/slice/cart";

const Cart = () => {
  const { products } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(products);

  return (
    <div>
      <Navbar />
      Cart
      <button onClick={() => dispatch(clearCart())}>Clear</button>
      {products &&
        products.map((product) => (
          <div key={product.id}>
            <span>{product.name}</span>
            <button onClick={() => dispatch(removeProduct(product.id))}>
              Remove
            </button>
          </div>
        ))}
    </div>
  );
};

export default Cart;
