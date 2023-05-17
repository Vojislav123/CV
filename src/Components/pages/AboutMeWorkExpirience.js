import EtihadLogo from "../../images/EtihadLogo.png";
import PahuljicaLogo from '../../images/PahuljicaLogo.png'
import styles from "./css/AboutMeWorkexpirience.module.css";

const WorkExpirience = () => {
  return (
    <div className={styles.workExpContainer}>
      <div className={styles.title}>
        <h1>Work Expirience</h1>
      </div>
      <div className={styles.companyContainer}>
        <div className={styles.companyContent}>
          <h2>Pahuljica MVN</h2>
          <p>Local company in Belgrade selling frozen food products.</p>
          <p>Founder, Manager, Salesperson.</p>
        </div>
        <img src={PahuljicaLogo} alt="Pahuljica Logo" />
      </div>

      <div className={styles.companyContainer}>
        <div className={styles.companyContent}>
          <h2>Etihad Airways</h2>
          <p>National airline of the United Arab Emirates.</p>
          <p>Call center operator, ticketing, training new recruits.</p>
        </div>
        <img src={EtihadLogo} alt="Etihad Logo" />
      </div>
      <p>
        For over 10 years, I was in sales or customer service and have learned
        how to be a team player and transfer my knowledge to others.
      </p>
      <p>
        Other companies I worked for include Telenor and some others, which
        can be found in my CV.
      </p>

    </div>
  );
};

export default WorkExpirience;
