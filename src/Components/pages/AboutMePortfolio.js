import { useState } from "react";

import projectImage from "../../images/BitFinal.png";
import projectImage2 from "../../images/tvShows.png";
import projectImage3 from "../../images/Movie.png";
import projectImage4 from "../../images/Chucky.png";
import styles from "./css/AboutMePortfolio.module.css";

import ImageModal from "../service/ImageModal";
import Button from "../service/Button";

const Portfolio = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpenModal = (img) => {
    setSelectedImage(img);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };

  return (
    <div className={styles.myWorkContainer}>
      <div className={styles.h2}>
        <h2>Want to see my work in action?</h2>
        <h2>Take a look at my portfolio</h2>
      </div>
      <div className={styles.myWork}>
        <div className={styles.project}>
          <div className={styles.projectContent}>
            <p className={styles.projectTitle}>Final project in BIT bootcamp</p>
            <p>
              Bit Final is a Interview reports application built using a REST
              api provided by the school
            </p>
            <p>Technologies used: React, CSS</p>
            <div className={styles.buttonHolder}>
              <Button />
            </div>
          </div>
          <img
            src={projectImage}
            alt="Project 1"
            onClick={() => handleOpenModal(projectImage)}
          />
        </div>

        <div className={styles.project}>
          <div className={styles.projectContent}>
            <p className={styles.projectTitle}>TV Shows</p>
            <p> Tv Shows search engine made using an open source api </p>
            <p>Technologies used: HTML, SCSS, Bootstrap, JavaScript</p>
            <div className={styles.buttonHolder}>
              <Button />
            </div>
          </div>
          <img
            src={projectImage2}
            alt="Project 2"
            onClick={() => handleOpenModal(projectImage2)}
          />
        </div>

        <div className={styles.project}>
          <div className={styles.projectContent}>
            <p className={styles.projectTitle}>Personal Movie database </p>
            <p>Movie database where a user can add or remove movies </p>
            <p>Technologies used: HTML, CSS, JavaScript</p>
            <div className={styles.buttonHolder}>
              <Button />
            </div>
          </div>
          <img
            src={projectImage3}
            alt="Project 3"
            onClick={() => handleOpenModal(projectImage3)}
          />
        </div>

        <div className={styles.project}>
          <div className={styles.projectContent}>
            <p className={styles.projectTitle}>Chucky jokes</p>
            <p>Application made using open source API </p>
            <p>Technologies used: HTML, CSS, JavaScript</p>
            <div className={styles.buttonHolder}>
              <Button />
            </div>
          </div>
          <img
            src={projectImage4}
            alt="Project 4"
            onClick={() => handleOpenModal(projectImage4)}
          />
        </div>
      </div>
      {modalOpen && (
        <ImageModal img={selectedImage} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Portfolio;
