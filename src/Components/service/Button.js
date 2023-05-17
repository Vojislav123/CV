import styles from './css/Button.module.css';
import gitHubIcon from "../../images/github.svg";

const Button = ({href}) => {
  return (
    <button className={styles.button}>
      <a
        href={href}
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
