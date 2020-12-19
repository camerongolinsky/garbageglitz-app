import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../../redux/slices/cartSlice";
import styles from "./Cart.module.css";

const Cart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.cart);

  const total = cartItems.reduce((prev, curr) => {
    const price = curr.price * curr.quantity;
    return prev + price;
  }, 0);

  const handleDeleteFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleCheckout = () => {
    alert(
      JSON.stringify(
        cartItems.map((item) => ({ name: item.name, price: item.price }))
      )
    );
  };

  console.log(total);

  return (
    <div>
      <div>
        {cartItems.map((item) => {
          return (
            <div className={styles.cartCardContainer} key={item.id}>
              <img width="75px" src={item.image} />
              <div>Item: {item.name} </div>
              <div> Price: {item.price}</div>
              <div> Quantity: {item.quantity}</div>
              <button onClick={() => handleDeleteFromCart(item.id)}>
                Delete Item
              </button>
            </div>
          );
        })}
      </div>
      <div className={styles.checkoutSection}>
        <h3 className={styles.checkoutSectionTotal}>Total: ${total}</h3>
        <button onClick={() => handleCheckout()}>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
