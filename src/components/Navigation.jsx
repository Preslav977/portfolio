import { useState } from "react";
import styles from "./Navigation.module.css";
import { TypewriteAnimation } from "./TypewriterAnimation";

export function Navigation() {
  const [hamburgerMenuOpen, setHamburgerMenu] = useState(false);

  const toggleHamburgerMenu = () => {
    setHamburgerMenu(!hamburgerMenuOpen);
  };

  return (
    <header className={styles.headerNavWrapper} id="home">
      <nav aria-label="navigation" className={styles.navContainer}>
        <h1 className={styles.navHeaderName}>Preslav Tsvetanov</h1>

        <button
          aria-label="toggle hamburger mobile menu button"
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

        <ul aria-label="ul navigation" className={styles.ulNavigation}>
          <a href="#home">Home</a>

          <a href="#about">About</a>

          <a href="#skills">Skills</a>

          <a href="#projects">Projects</a>

          <a href="#contact">Contact</a>
        </ul>

        <ul
          aria-label="hamburger menu navigation"
          className={
            !hamburgerMenuOpen
              ? styles.hamburgerMobileMenuHidden
              : styles.hamburgerMobileMenuShow
          }
        >
          <a href="#home">Home</a>

          <a href="#about">About</a>

          <a href="#skills">Skills</a>

          <a href="#projects">Projects</a>

          <a href="#contact">Contact</a>
        </ul>
      </nav>
      <TypewriteAnimation />
    </header>
  );
}
