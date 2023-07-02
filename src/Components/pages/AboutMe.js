import { useState, useEffect } from "react";

import styles from "./css/Aboutme.module.css";
import mephoto from "../../images/me.png";
import Portfolio from "./AboutMePortfolio";
import WorkExpirience from "./AboutMeWorkExpirience";
import ContentLoader from "react-content-loader";

const fullText = (
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
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const truncatedText = fullText.props.children[0];

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Welcome to my portfolio website!</h1>
      <div className={`${styles.aboutMeContainer} flex flex-col items-center space-y-8`}>
        {loading ? (
          <ContentLoader speed={2} width={400} height={350}>
            <rect x="10" y="55" rx="5" ry="5" width="800" height="350" />
          </ContentLoader>
        ) : (
          <img src={mephoto} alt="" className="w-64 h-auto rounded-xl" />
        )}
        <div className="ml-8 max-w-xl">
          {expanded ? fullText : truncatedText}
          {truncatedText && (
            <button
              className="text-blue-500 underline"
              onClick={toggleExpanded}
            >
              {expanded ? "Read less" : "Read more"}
            </button>
          )}
        </div>
      </div>

      <div className="flex justify-center mx-auto">
        <Portfolio />
      </div>

      <div className="flex justify-center mx-auto">
        <WorkExpirience />
      </div>
    </div>
  );
};

export default AboutMe;
