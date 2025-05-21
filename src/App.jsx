import Header from "./components/Header";
import styles from "./App.module.css";
import Products from "./components/Products";
import { useEffect, useState } from "react";
import Create from "./components/Create";
function App() {
  const [dark, setDark] = useState(true);
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    document.documentElement.className = dark === true ? "dark" : "light";
  }, [dark]);
  return (
    <div
      className={`${styles.background} ${dark ? styles.dark : styles.light}`}
    >
      <div className={styles.container}>
        <Header
          setDark={setDark}
          dark={dark}
          setIsCreating={setIsCreating}
          isCreating={isCreating}
        />
        {!isCreating && <Products />}
        {isCreating && (
          <Create
            dark={dark}
            isCreating={isCreating}
            setIsCreating={setIsCreating}
          />
        )}
      </div>
    </div>
  );
}

export default App;
