import styles from "./Header.module.css";
function Header() {
  return (
    <header className={styles.header}>
      <button className={styles.button}>
        <i
          className="fa-solid fa-sun"
          style={{ backgroundColor: "inherit" }}
        ></i>
        {/* <i className="fa-solid fa-moon"></i> */}
      </button>
      <h1> Andy Store</h1>
      <button className={styles.button}>
        <i
          className="fa-solid fa-plus"
          style={{ backgroundColor: "inherit" }}
        ></i>
      </button>
    </header>
  );
}

export default Header;
