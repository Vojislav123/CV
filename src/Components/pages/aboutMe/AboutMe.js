import { useState, useEffect } from 'react';

import { basicText } from './aboutMeText';
import { fullText } from './aboutMeText';

import mephoto from '../../../images/me.png';
import Portfolio from './AboutMePortfolio';
import WorkExpirience from './AboutMeWorkExpirience';
import ContentLoader from 'react-content-loader';


const AboutMe = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setLoading(false);
		}, 3000);

		return () => {
			clearTimeout(timeout);
		};
	}, []);

	return (
		<div className='flex-col justify-center'>
			<h1 className='flex justify-center leading-normal text-4xl lg:text-8xl font-bold mb-8'>
				Welcome to my portfolio website!
			</h1>
			<div className={`flex flex-col lg:flex-row mx-auto lg:justify-between max-w-4xl space-y-8`}>
				{loading ? (
					<ContentLoader speed={2} width={400} height={350}>
						<rect x='10' y='55' rx='5' ry='5' width='800' height='350' />
					</ContentLoader>
				) : (
					<img src={mephoto} alt='' className='w-64 mx-auto h-auto rounded-xl' />
				)}
				<div className='max-w-xl text-left'>{basicText}</div>
			</div>
			<div className='flex-row mx-auto text-left justify-center mt-[60px] max-w-[768px] '>

			{fullText}
			</div>

			<div className='flex justify-center mx-auto'>
				<Portfolio />
			</div>

			<div className='flex justify-center mx-auto'>
				<WorkExpirience />
			</div>
		</div>
	);
};

export default AboutMe;
