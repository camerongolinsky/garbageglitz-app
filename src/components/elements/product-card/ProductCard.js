import React from "react";
import styles from "./ProductCard.module.css";
import { addToCart } from "../../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className={styles.productCardContainer}>
      <div>
        <div className={styles.productCardBody}>
          <img width="200px" height="200px" src={product.image} alt="" />
          <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
          <button
            onClick={() => handleAddToCart(product)}
            style={
              product.type === "noms"
                ? { backgroundColor: "#6B5C53" }
                : product.type === "stuff"
                ? { backgroundColor: "#BCD4E0" }
                : { backgroundColor: "#A1C7B9" }
            }
            className={styles.productCardButton}
          >
            Add to Kart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
