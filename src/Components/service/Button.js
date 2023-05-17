import styles from './css/Button.module.css';
import gitHubIcon from "../../images/github.svg";

const Button = () => {
  return (
    <button className={styles.button}>
      <a
        href="https://github.com/Vojislav123/CV-Page/tree/main/cv-page"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        View on GIT <img src={gitHubIcon} alt="GitHub Icon" />
      </a>{" "}
    </button>
  );
};

export default Button;
