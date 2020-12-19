import React from "react";
import ProductCard from "../product-card/ProductCard";
import { useSelector } from "react-redux";
import { selectProducts } from "../../../redux/slices/productsSlice";
import styles from "./ProductList.module.css";

const ProductList = () => {
  const products = useSelector(selectProducts);

  return (
    <div>
      <div className={styles.productsContainer}>
        {products.map((item) => {
          return <ProductCard product={item} />;
        })}
      </div>
    </div>
  );
};

export default ProductList;
