import { useState } from "react";

import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import logoOnHover from "../../images/logoOnHover.png";
import styles from "./css/Header.module.css";

const Header = () => {
  const [useLogo, setUseLogo] = useState(logo);
  const [isTransitionActive, setIsTransitionActive] = useState(false);

  const refreshPage = () => {
    window.location.href = "/";
  };

  const animateLogo = () => {
    setUseLogo(logoOnHover);
    setIsTransitionActive(true);
  };

  const resetLogo = () => {
    setUseLogo(logo);
    setIsTransitionActive(false);
  };

  return (
    <div className={styles.headerContainer}>
      <div className={styles.logo}>
        <img
          className={isTransitionActive ? styles.logoAnimated : styles.logo}
          onClick={refreshPage}
          src={useLogo}
          onMouseOver={animateLogo}
          onMouseOut={resetLogo}
          alt="logo"
        />
      </div>
      <nav className={styles.linkContainer}>
        <Link className={styles.link} to="/">
          <p>Home</p>
        </Link>

        <Link className={styles.link} to="/me&MyWork">
          <p>Me & My Work</p>
        </Link>

        <Link className={styles.link} to="/contact">
          <p>Contact</p>
          <span>Hire me</span>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
