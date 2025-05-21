import ProductCard from "./ProductCard";
import styles from "./Products.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useGetAllProductQuery } from "../Redux/api.js";
import { getAllProducts } from "../Redux/productSlice.js";

function Products() {
  const list = useSelector((state) => state.products.products);
  const { data, isLoading } = useGetAllProductQuery();
  console.log(isLoading);
  const dispatch = useDispatch();

  // fetch data from backend
  useEffect(() => {
    if (data?.data) {
      dispatch(getAllProducts(data.data));
    }
  }, [data, dispatch]);

  return (
    <div className={styles.productsContainer}>
      <div className={styles.header}>
        <h3>Products</h3>
      </div>
      <div className={styles.productsBody}>
        {/* {!data && <h2>No items</h2>} */}

        {data &&
          list.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
      </div>
      {isLoading && (
        <i
          className={`fa-solid fa-spinner fa-spin-pulse ${styles.loading}`}
        ></i>
      )}
      {!isLoading && !data?.data.length && (
        <h2 className={styles.message}>No Items</h2>
      )}
    </div>
  );
}

export default Products;
