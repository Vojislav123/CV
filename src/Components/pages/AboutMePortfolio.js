
import projectImage from "../../images/BitFinal.png";
import projectImage2 from "../../images/tvShows.png";
import projectImage3 from "../../images/Movie.png";
import projectImage4 from "../../images/Chucky.png";
import projectImage5 from "../../images/pokeApp.png";
import nasaImage from '../../images/nasaProject.png'
import ProjectModal from "../service/ProjectModal";


const Portfolio = () => {


  return (
<div className="my-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Want to see my work in action?</h2>
        <h2 className="text-3xl font-bold">Take a look at my portfolio</h2>
      </div>
      <div className="flex flex-col items-center space-y-8">
        <ProjectModal
          projectName={"Nasa Apis Project"}
          projectTitle={"Nasa Apis"}
          text={
            "Webpage created using using Nasa Api's. User can search through Nasa's galery and much more"
          }
          techUsed={"Next.JS, Typescript, Tailwind CSS"}
          gitLink={"https://github.com/Vojislav123/nasa-apis"}
          online={'https://nasa-apis-zeta.vercel.app/'}
          buttonText={'View Online'}
          img={nasaImage}
        />
        <ProjectModal
          projectName={"Pokemon database"}
          projectTitle={"Pokemon Application"}
          text={
            "Pokemon application is used for searching pokemons, checking their specification and it is posible to select favorite Pokemon. The data persists event after closing."
          }
          techUsed={"React, Tailwind CSS"}
          gitLink={"https://github.com/Vojislav123/pokemonAPI-project"}
          online={'https://pokemon-vojislavalic.netlify.app/'}
          buttonText={'View Online'}
          img={projectImage5}
        />

        <ProjectModal
          projectName={"Data Entry"}
          projectTitle={"Final project in BIT bootcamp"}
          text={
            " Bit Final is a Interview reports application built using a REST api provided by the school"
          }
          techUsed={"React, CSS"}
          gitLink={"https://github.com/Vojislav123/Projects/tree/main/bitFinal"}
          img={projectImage}
        />

        <ProjectModal
          projectName={"Search Engine"}
          projectTitle={"TV Shows"}
          text={"Tv Shows search engine made using an open source api"}
          techUsed={"HTML, SCSS, Bootstrap, JavaScript"}
          gitLink={"https://github.com/Vojislav123/Projects/tree/main/bit-show"}
          img={projectImage2}
        />

        <ProjectModal
          projectName={"Movie Notepad"}
          projectTitle={"Personal Movie database"}
          text={"Movie database where the user can add or remove movies"}
          techUsed={"HTML, CSS, JavaScript"}
          gitLink={
            "https://github.com/Vojislav123/Projects/tree/main/Movie%20thingy"
          }
          img={projectImage3}
        />

        <ProjectModal
          projectName={"Joke Generator"}
          projectTitle={"Chucky jokes"}
          text={"Application made using open source API"}
          techUsed={"HTML, CSS, JavaScript"}
          gitLink={
            "https://github.com/Vojislav123/Projects/tree/main/chuckNorris"
          }
          img={projectImage4}
        />
      </div>
    </div>
  );
};

export default Portfolio;
