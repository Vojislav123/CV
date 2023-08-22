import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { headerActions } from "../../store/header-slice";
import styles from "./css/Header.module.css";

const Header = () => {
  const dispach = useDispatch();
  const displayLogo= useSelector((state)=> state.headerState.useLogo)
  const isTransitionActive=useSelector((state)=>state.headerState.isTransitionActive)


  const refreshPage = () => {
    window.location.href = "/";
  };

  const animateLogo = () => {
    dispach(headerActions.otherLogo());
    dispach(headerActions.transitionHandler());
  };

  const resetLogo = () => {
    dispach(headerActions.mainLogo());
    dispach(headerActions.transitionHandler());
  };


  return (
    <div className={styles.headerContainer}>
      <div className={styles.logo}>
        <img
          className={isTransitionActive ? styles.logoAnimated : styles.logo}
          onClick={refreshPage}
          src={displayLogo}
          onMouseOver={animateLogo}
          onMouseOut={resetLogo}
          alt="logo"
        />
      </div>
      <nav className={styles.linkContainer}>
        <ul className={styles.linkList}>
          <li className={styles.linkItem}>
            <Link className={styles.link} to="/">
              Home
            </Link>
          </li>
          <li className={styles.linkItem}>
            <Link className={styles.link} to="/me&MyWork">
              Me &amp; My Work
            </Link>
          </li>
          <li className={styles.linkItem}>
              <span>Hire me</span>
            <Link className={styles.link} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;