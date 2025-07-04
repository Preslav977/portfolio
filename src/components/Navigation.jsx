import { useState } from "react";
import styles from "./Navigation.module.css";

export function Navigation() {
  const [hamburgerMenuOpen, setHamburgerMenu] = useState(false);

  const toggleHamburgerMenu = () => {
    setHamburgerMenu(!hamburgerMenuOpen);
  };

  return (
    <nav className={styles.navContainer}>
      <h1 className={styles.navHeader}>Preslav Tsvetanov</h1>

      <button
        className={
          !hamburgerMenuOpen
            ? styles.openHamburgerMenu
            : styles.closeHamburgerMenu
        }
        onClick={toggleHamburgerMenu}
      >
        <div className={styles.hamburgerMenuBarOne}></div>
        <div className={styles.hamburgerMenuBarTwo}></div>
        <div className={styles.hamburgerMenuBarThree}></div>
      </button>

      <ul className={styles.ulNavigation}>
        <a href="/">Home</a>

        <a href="/about">About</a>

        <a href="/skills">Skills</a>

        <a href="/projects">Projects</a>

        <a href="/contact">Contact</a>
      </ul>

      <ul
        className={
          !hamburgerMenuOpen
            ? styles.hamburgerMobileMenuHidden
            : styles.hamburgerMobileMenuShow
        }
      >
        <a href="/">Home</a>

        <a href="/about">About</a>

        <a href="/skills">Skills</a>

        <a href="/projects">Projects</a>

        <a href="/contact">Contact</a>
      </ul>
    </nav>
  );
}
