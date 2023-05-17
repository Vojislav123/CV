import styles from './css/Aboutme.module.css'
import mephoto from '../../images/me.png'
import Portfolio from './AboutMePortfolio';
import WorkExpirience from './AboutMeWorkExpirience';



const AboutMe = () => {
  return (
    <>
      <div className={styles.aboutmeContainer}>
        <h1>So, who's Vojislav?</h1>
        <img src={mephoto} alt="" />
        <p>
          Ambitious and naturally curious, I am constantly seeking opportunities
          to improve myself.
        </p>
        <p>
          I completed the prequalification program at BIT
          School, which focused on web development and covered JavaScript and
          React fundamentals, as well as HTML, CSS, Bootstrap, JQuery, Git, and
          more.
        </p>
      </div>

      <div className={styles.portfolio}>
        <Portfolio />
      </div>

      <div className={styles.expirience}>
    <WorkExpirience />

      </div>
    </>
  );
};

export default AboutMe;