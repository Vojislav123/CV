import ProjectModal from '../../service/ProjectModal';

import pokemonImg from '../../../images/pokeApp.png';
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
					projectTitle={'CDT Hub'}
					text={'Webpage created during internship with Trust Digital'}
					techUsed={'Next.JS, Typescript, Tailwind CSS'}
					img={cdtHub}
					bgColor={'blue2'}
				/>

				<ProjectModal
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
					projectTitle={'Pokemon Application'}
					text={
						'Pokemon application is used for searching pokemons, checking their specification and it is posible to select favorite Pokemon. The data persists event after closing.'
					}
					techUsed={'React, Tailwind CSS'}
					gitLink={'https://github.com/Vojislav123/pokemonAPI-project'}
					buttonText={'View Online'}
					img={pokemonImg}
					bgColor={'grey'}
				/>
			</div>
		</div>
	);
};

export default Portfolio;
