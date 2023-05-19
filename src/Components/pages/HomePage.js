import { Link } from "react-router-dom";

import cv from "../../sources/VojislavAlic-CV.pdf";
import downloadIcon from "../../images/download.svg";
import gitHubIcon from "../../images/github.svg";

import styles from "./css/HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.homepageContainer}>
      <div className={styles.typingContainer}>
        <h1>
          Hello <span>world</span>!
        </h1>
      </div>

      <h2>I'm Vojislav</h2>
      <div className={styles.spinnyWrapper}>
        <p>
          A
          <span className={styles.spinnyWords}>
            <span>Front-End Developer</span>
            <span>Programmer</span>
            <span>CSS ninja!</span>
            <span>Web developer</span>
            <span>Coder</span>
            <span>Chill colleague</span>
          </span>
        </p>
      </div>
      <div className={styles.buttonHolder}>
        <Link className={styles.button} to="/me&mywork">
              Read more about me
        </Link>
      </div>

      <div className={styles.contentContainer}>
        <a href={cv} download>
          <p>
            Download my CV{" "}
            <img
              className={styles.svg}
              src={downloadIcon}
              alt="download icon"
            />
          </p>
        </a>
        <a
          href="https://github.com/Vojislav123/CV-Page/tree/main/cv-page"
          target="_blank"
          rel="noreferrer"
        >
          <p>
            GitHub <img src={gitHubIcon} alt="download icon" />
          </p>
        </a>
      </div>
    </div>
  );
};

export default HomePage;
