import { useState, useEffect } from 'react';
import ContentLoader from 'react-content-loader';
import Button from './Button';

const ProjectModal = ({
	projectName,
	projectTitle,
	text,
	techUsed,
	gitLink,
	online,
	buttonText,
	img,
	bgColor,
}) => {
	const [loading, setLoading] = useState(true);

	const bgColorHandler =
		bgColor === 'blue'
			? 'bg-[#EDEDED]'
			: bgColor === 'pink'
			? 'bg-[#ECE6F5]'
			: bgColor === 'blue2'
			? 'bg-[#EDF3FC]'
			: bgColor === 'grey'
			? 'bg-[#EAEBEC]'
			: 'bg-white';


	useEffect(() => {
		const timeout = setTimeout(() => {
			setLoading(false);
		}, 3000);

		return () => {
			clearTimeout(timeout);
		};
	});

	return (
		<div
			className={`flex flex-col text-center md:text-left md:flex-row items-center ${bgColorHandler} border border-black rounded-2xl p-[50px] md:py-[50px] md:pr-[50px] md:pl-[0px] space-y-4 md:space-y-0 md:space-x-4 w-full h-3/4 mx-auto my-4`}>
			<div className='flex flex-col w-full md:w-72 pl-4'>
				<p className='text-black leading-loose mb-2'>Project: {projectName}</p>
				<h2 className='text-2xl text-black font-bold mb-2'>{projectTitle}</h2>

				<section className='text-black'>{text}</section>

				<p className='mt-4 text-black'>Technologies used: {techUsed}</p>
				{gitLink && (
					<div className='mt-4'>
						<Button href={gitLink} />
						<div className='text-lg w-40 mx-auto'>
							{online && <Button href={online} text={buttonText} />}
						</div>
					</div>
				)}
			</div>
			{loading ? (
				<ContentLoader speed={2} width={900} height={350}>
					<rect x='50' y='15' rx='50' ry='50' width='800' height='350' />
				</ContentLoader>
			) : (
				<img
					src={img}
					className='w-full md:w-3/4 mx-auto'
					alt='Project'
				/>
			)}
		</div>
	);
};

export default ProjectModal;
