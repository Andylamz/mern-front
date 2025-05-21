import { useState } from "react";
import styles from "./Create.module.css";
import { useCreateProductMutation } from "../Redux/api.js";

function Create({ dark, setIsCreating }) {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const [createNewProduct] = useCreateProductMutation();
  // Fetching data from backend with proper error and loading states

  //   useEffect(() => {
  //     dispatch(getAllProducts(data), [data]);
  //   });

  async function handleAddProduct(e, product) {
    e.preventDefault();
    if (!product.name || !product.price || !product.image) {
      alert("Please fill in all fields");
      return { sucess: false, message: "Please fill in all fields" };
    }
    try {
      // creating
      const result = await createNewProduct(product).unwrap();
      // adding to Redux
      console.log("Product created successfully:", result);
      // Clear form after successful creation
      setNewProduct({
        name: "",
        price: "",
        image: "",
      });
      setIsCreating(false);
    } catch (err) {
      console.error("Failed to create product:", err);
    }
  }

  return (
    <div className={styles.createContainer}>
      <div className={styles.header}>
        <h3>Create Product</h3>
      </div>
      <div
        className={`${styles.formContainer} ${
          dark ? styles.dark : styles.light
        }`}
      >
        <form
          className={styles.form}
          //   method="POST"
          //   action="/"
          onSubmit={(e) => handleAddProduct(e, newProduct)}
        >
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Product name"
            // value={newProduct.name || ""}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
          />
          <input
            type="text"
            name="price"
            id="price"
            placeholder="Price"
            // value={newProduct.price || ""}
            onChange={(e) =>
              setNewProduct({
                ...newProduct,
                price: Number(e.target.value).toFixed(2),
              })
            }
          />
          <input
            type="text"
            name="image"
            id="image"
            placeholder="Image URL"
            // value={newProduct.image || ""}
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.value })
            }
          />
          <button className={`${dark ? styles.darkBtn : styles.lightBtn}`}>
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default Create;
