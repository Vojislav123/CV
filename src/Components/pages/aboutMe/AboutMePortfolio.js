import ProjectModal from '../../service/ProjectModal';

import projectImage from '../../../images/BitFinal.png';
import projectImage2 from '../../../images/tvShows.png';
import projectImage3 from '../../../images/Movie.png';
import projectImage4 from '../../../images/Chucky.png';
import projectImage5 from '../../../images/pokeApp.png';
import nasaImage from '../../../images/nasaProject.png';
import zastavaCars from '../../../images/zastavaAutomobili.png';
import cdtHub from '../../../images/cdtHub.png';


const Portfolio = () => {
	return (
		<div className='my-8'>
			<div className='text-center'>
				<h2 className='text-6xl font-bold my-8'>
					Want to see my work in action?
				</h2>
				<h2 className='text-3xl font-bold mb-8'>Take a look at my portfolio</h2>
			</div>
			<div className='flex flex-col items-center space-y-8'>
				<ProjectModal
					projectName={'CDT Hub'}
					projectTitle={'CDT Hub'}
					text={'Webpage created during internship with Trust Digital'}
					techUsed={'Next.JS, Typescript, Tailwind CSS'}
					img={cdtHub}
					bgColor={'blue2'}
				/>

				<ProjectModal
					projectName={'Nasa Apis Project'}
					projectTitle={'Nasa Apis'}
					text={
						"Webpage created using using Nasa Api's. User can search through Nasa's galery and much more"
					}
					techUsed={'Next.JS, Typescript, Tailwind CSS'}
					gitLink={'https://github.com/Vojislav123/nasa-apis'}
					online={'https://nasa-apis-zeta.vercel.app/'}
					buttonText={'View Online'}
					img={nasaImage}
					bgColor={'pink'}
				/>
				<ProjectModal
					projectName={'Zastava Cars'}
					projectTitle={'Zastava Cars'}
					text={'Inspired by the people at Zastava forum'}
					techUsed={'Next.JS, Typescript, Tailwind CSS'}
					gitLink={'https://github.com/Vojislav123/zastava-showcase'}
					online={'https://zastava-showcase.vercel.app/'}
					buttonText={'View Online'}
					img={zastavaCars}
					bgColor={'blue'}
				/>
				<ProjectModal
					projectName={'Pokemon database'}
					projectTitle={'Pokemon Application'}
					text={
						'Pokemon application is used for searching pokemons, checking their specification and it is posible to select favorite Pokemon. The data persists event after closing.'
					}
					techUsed={'React, Tailwind CSS'}
					gitLink={'https://github.com/Vojislav123/pokemonAPI-project'}
					buttonText={'View Online'}
					img={projectImage5}
					bgColor={'grey'}
				/>

				<ProjectModal
					projectName={'Data Entry'}
					projectTitle={'Final project in BIT bootcamp'}
					text={
						' Bit Final is a Interview reports application built using a REST api provided by the school'
					}
					techUsed={'React, CSS'}
					gitLink={'https://github.com/Vojislav123/Projects/tree/main/bitFinal'}
					img={projectImage}
					bgColor={'blue2'}
				/>

				<ProjectModal
					projectName={'Search Engine'}
					projectTitle={'TV Shows'}
					text={'Tv Shows search engine made using an open source api'}
					techUsed={'HTML, SCSS, Bootstrap, JavaScript'}
					gitLink={'https://github.com/Vojislav123/Projects/tree/main/bit-show'}
					img={projectImage2}
				/>

				<ProjectModal
					projectName={'Movie Notepad'}
					projectTitle={'Personal Movie database'}
					text={'Movie database where the user can add or remove movies'}
					techUsed={'HTML, CSS, JavaScript'}
					gitLink={
						'https://github.com/Vojislav123/Projects/tree/main/Movie%20thingy'
					}
					img={projectImage3}
					bgColor={'pink'}
				/>

				<ProjectModal
					projectName={'Joke Generator'}
					projectTitle={'Chucky jokes'}
					text={'Application made using open source API'}
					techUsed={'HTML, CSS, JavaScript'}
					gitLink={
						'https://github.com/Vojislav123/Projects/tree/main/chuckNorris'
					}
					img={projectImage4}
					bgColor={'blue'}
				/>
			</div>
		</div>
	);
};

export default Portfolio;
