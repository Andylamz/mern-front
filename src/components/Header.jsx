import styles from "./Header.module.css";
function Header({ dark, setDark, setIsCreating, isCreating }) {
  function handleDark() {
    setDark((dark) => !dark);
  }
  function handleIsCreating() {
    setIsCreating((state) => !state);
  }
  return (
    <header className={styles.header}>
      <button
        className={`${styles.button}  ${dark ? styles.dark : styles.light}`}
        onClick={handleDark}
      >
        <i
          className="fa-solid fa-sun"
          style={{ backgroundColor: "inherit" }}
        ></i>
        {/* <i className="fa-solid fa-moon"></i> */}
      </button>
      <h1> Andy Store</h1>
      <button
        onClick={handleIsCreating}
        className={`${styles.button}  ${dark ? styles.dark : styles.light}`}
      >
        <i
          className={!isCreating ? "fa-solid fa-plus" : "fa-solid fa-minus"}
          style={{ backgroundColor: "inherit" }}
        ></i>
      </button>
    </header>
  );
}

export default Header;
