import styles from "./ProductCard.module.css";

import {
  useDeleteProductMutation,
  useUpdateProductMutation,
} from "../Redux/api";
import { useRef, useState } from "react";

function ProductCard({ product }) {
  const [deleteProduct] = useDeleteProductMutation();
  const [updateProduct] = useUpdateProductMutation();

  const [isEditing, setIsEditing] = useState(false);

  const nameRef = useRef();
  const priceRef = useRef();

  async function handleDeleteItem() {
    try {
      await deleteProduct(product._id).unwrap();
    } catch (err) {
      console.log(err.message);
      return { success: false, message: "Something went wrong" };
    }
  }

  async function handleUpdateItem() {
    const name =
      nameRef.current.value.trim() === ""
        ? product.name
        : nameRef.current.value;
    const price =
      priceRef.current.value.trim() === ""
        ? product.price
        : priceRef.current.value;
    try {
      await updateProduct({
        id: product._id,
        data: {
          name: name,
          price: price,
        },
      }).unwrap();
      handleEditing();
    } catch (err) {
      return { success: false, message: err.message };
    }
  }

  function handleEditing() {
    setIsEditing((state) => !state);
  }

  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <img src={product.image} alt="product image" />
      </div>
      <div className={styles.descriptionContainer}>
        {!isEditing && (
          <>
            <h5>{product.name}</h5>
            <span>£{product.price}</span>
            <div className={styles.buttons}>
              <i
                className="fa-solid fa-pen-to-square"
                onClick={handleEditing}
              ></i>
              <i
                className="fa-solid fa-trash-can"
                onClick={handleDeleteItem}
              ></i>
            </div>
          </>
        )}
        {isEditing && (
          <>
            <input
              type="text"
              name="name"
              placeholder="Item name"
              ref={nameRef}
            />
            <input
              type="text"
              name="price"
              placeholder="Pirce"
              ref={priceRef}
            />
            <div className={styles.buttons}>
              <i onClick={handleEditing}> Cancel </i>
              <i onClick={handleUpdateItem}> Confirm </i>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
