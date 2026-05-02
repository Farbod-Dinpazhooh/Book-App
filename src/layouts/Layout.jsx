import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Book App</h1>
        <p>Farboddp | Practice Project</p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Farboddp</p>
      </footer>
    </>
  );
}

export default Layout;
