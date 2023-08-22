import React, { useState, useEffect, Suspense } from 'react';
import Button from './Button';
import imgLoading from '../../images/imgLoading.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { aboutMeActions } from '../../store/aboutMe-slice';

const LazyImage = React.lazy(() => import('./LoadingImage'));

const ProjectModal = ({
	projectTitle,
	text,
	techUsed,
	gitLink,
	online,
	buttonText,
	img,
	bgColor,
}) => {
	const dispatch= useDispatch();
	const loading= useSelector((state)=> state.aboutState.loading);
	const mainImageLoaded=useSelector((state)=>state.aboutState.mainImageLoaded);

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
		const image = new Image();
		image.src = img;

		image.onload = () => {
			dispatch(aboutMeActions.aboutMeHander());
		};

		return () => {
			image.onload = null;
		};
	}, [img]);

	return (
		<div
			className={`flex flex-col text-center md:text-left md:flex-row items-center ${bgColorHandler} border border-black rounded-2xl p-[50px] md:py-[50px] md:pr-[50px] md:pl-[0px] space-y-4 md:space-y-0 md:space-x-4 w-full h-3/4 mx-auto my-4`}>
			<div className='flex flex-col w-full md:w-72 pl-4'>
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
			{loading && (
				<img
					src={imgLoading}
					alt=''
					className='w-full md:w-3/4 h-[420px] mx-auto'
				/>
			)}
			<Suspense
				fallback={
					<img src={imgLoading} alt='' className='w-full md:w-3/4 mx-auto' />
				}>
				{!loading && mainImageLoaded && (
					<LazyImage src={img} alt='' className='w-full md:w-3/4 mx-auto' />
				)}
			</Suspense>
		</div>
	);
};

export default ProjectModal;
