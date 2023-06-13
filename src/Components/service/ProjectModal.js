import { useState, useEffect } from "react";
import ContentLoader from "react-content-loader";


import Button from "./Button";
import styles from './css/ProjectModal.module.css'

const ProjectModal =({projectName, projectTitle, text, techUsed, gitLink, img}) =>{
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
      <div className={styles.project}>
        <div className={styles.projectContent}>
          <p className={styles.aboveText}>Project: {projectName}</p>
          <h2 className={styles.projectTitle}>{projectTitle}</h2>
          <p>{text}</p>
          <p>Technologies used: {techUsed}</p>
          <div className={styles.buttonHolder}>
            <Button href={gitLink} />
          </div>
        </div>
        {loading ? <ContentLoader speed={2} width={700} height={350}>
        <rect x="0" y="15" rx="5" ry="5" width="800" height="350" />
            </ContentLoader> :  <img
            src={img}
            className={styles.projectImg}
            alt="Project"
          />}
      </div>
    );


}

export default ProjectModal;
