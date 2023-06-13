import { useState, useEffect } from "react";

import styles from "./css/Aboutme.module.css";
import mephoto from "../../images/me.png";
import Portfolio from "./AboutMePortfolio";
import WorkExpirience from "./AboutMeWorkExpirience";
import ContentLoader from "react-content-loader";

let text = (
  <>
    <p>
      I'm Vojislav, an ambitious web developer dedicated to continuous
      improvement. I completed BIT School's web development program, gaining
      expertise in JavaScript, React, HTML, CSS, Bootstrap, and more. I'm
      fascinated by the possibilities of web development and stay updated on the
      latest trends. As a team player with problem-solving skills, I thrive in
      fast-paced environments. I'm now seeking opportunities to apply my skills
      and contribute to a dynamic team.
    </p>
    <p>
      My journey into web development has been exciting and fulfilling. Through
      the prequalification program at BIT School, I acquired a strong foundation
      in various technologies, including JavaScript, React, HTML, CSS,
      Bootstrap, and more. Hands-on projects and practical exercises allowed me
      to gain valuable experience in building responsive and user-friendly web
      applications.
    </p>
    <p>
      Apart from my technical skills, I possess excellent communication skills
      and enjoy collaborating with others to achieve common goals. I value
      effective communication, active listening, and understanding different
      perspectives. Additionally, I bring strong problem-solving abilities and
      attention to detail, approaching challenges with a positive mindset. I am
      highly adaptable and comfortable working in fast-paced environments, where
      I can learn and grow alongside experienced professionals.
    </p>
    <p>
      Currently, I'm eagerly seeking an opportunity to apply my knowledge and
      skills in a practical setting. I'm excited to join a dynamic team where I
      can contribute and further develop my abilities. If you're looking for a
      motivated web developer, I would be thrilled to discuss potential
      opportunities with you.
    </p>
    <p>
      Thank you for visiting my portfolio website, and I look forward to
      connecting with you soon.
    </p>
  </>
);

const AboutMe = () => {

  const [loading, setLoading]= useState(true);

  useEffect(()=>{
      const timeout=setTimeout(()=>{
           setLoading(false);
      },3000);

      return ()=> {
          clearTimeout(timeout);
      }
  })


  return (
    <>
      <h1 className={styles.h1}>Welcome to my portfolio website!</h1>
      <div className={styles.aboutmeContainer}>
      {loading ? <ContentLoader speed={2} width={400} height={350}>
        <rect x="10" y="55" rx="5" ry="5" width="800" height="350" />
            </ContentLoader> : <img src={mephoto} alt="" /> }
        <div className={styles.aboutMeText}>{text}</div>
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
