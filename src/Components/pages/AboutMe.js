import styles from './css/Aboutme.module.css'
import mephoto from '../../images/me.png'
import Portfolio from './AboutMePortfolio';
import WorkExpirience from './AboutMeWorkExpirience';


let text = (
  <>
    <p>
      My name is Vojislav, and I am an ambitious and naturally curious individual who is constantly seeking opportunities to improve myself. I have a strong passion for web development and am dedicated to honing my skills in this dynamic field.
    </p>
    <p>
      I recently completed the prequalification program at BIT School, where I focused on web development. This program provided me with a solid foundation in various technologies, including JavaScript and React fundamentals, as well as HTML, CSS, Bootstrap, JQuery, Git, and more. Through hands-on projects and practical exercises, I gained valuable experience in building responsive and user-friendly web applications.
    </p>
    <p>
      My journey into the world of web development has been an exciting one. I am fascinated by the endless possibilities that technology offers and enjoy the process of turning ideas into functional and visually appealing websites. The ever-evolving nature of this field drives me to stay updated with the latest trends and best practices, ensuring that I deliver high-quality and modern solutions.
    </p>
    <p>
      Apart from technical skills, I am a team player with excellent communication skills. I thrive in collaborative environments where I can contribute my ideas and work alongside others to achieve common goals. I believe in the power of effective communication and appreciate the importance of active listening and understanding different perspectives.
    </p>
    <p>
      In addition to my technical expertise, I possess strong problem-solving abilities and attention to detail. I approach challenges with a positive mindset and enjoy finding innovative solutions to complex problems. I am highly adaptable and comfortable working in fast-paced environments, where I can learn and grow alongside experienced professionals.
    </p>
    <p>
      I am currently seeking an opportunity to apply my knowledge and skills in a practical setting. I am eager to join a dynamic team where I can contribute and further develop my abilities. If you are looking for a motivated and dedicated individual with a passion for web development, I would be thrilled to discuss potential opportunities with you.
    </p>
    <p>
      Thank you for visiting my portfolio website, and I look forward to connecting with you soon.
    </p>
  </>
);



const AboutMe = () => {


  
  return (
    <>
      <h1 className={styles.h1}>Welcome to my portfolio website!</h1>
      <div className={styles.aboutmeContainer}>
        <img src={mephoto} alt="" />
        <div className={styles.aboutMeText}>
          {text}
        </div>
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