import React, { useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { basicText } from './aboutMeText';
import { fullText } from './aboutMeText';
import mephoto from '../../../images/me.png';
import imgLoading from '../../../images/imgLoading.jpg';
import Portfolio from './AboutMePortfolio';
import WorkExpirience from './AboutMeWorkExpirience';
import { aboutMeActions } from '../../../store/aboutMe-slice';

const LazyImage = React.lazy(() => import('../../service/LoadingImage'));

const AboutMe = () => {
	const dispatch= useDispatch()
	const loading= useSelector((state)=> state.aboutState.loading);
	const mainImageLoaded=useSelector((state)=>state.aboutState.mainImageLoaded);

	useEffect(() => {
		const image = new Image();
		image.src = mephoto;

		image.onload = () => {
			dispatch(aboutMeActions.aboutMeHander())
		};

		return () => {
			image.onload = null;
		};
	}, []);

	return (
		<div className='flex-col justify-center'>
			<h1 className='flex justify-center leading-normal text-4xl lg:text-8xl font-bold mb-8'>
				Welcome to my portfolio website!
			</h1>
			<div
				className={`flex flex-col lg:flex-row mx-auto lg:justify-between max-w-4xl space-y-8`}>
				{loading && (
					<img
						src={imgLoading}
						alt=''
						className='w-64 mx-auto h-[300px] rounded-xl'
					/>
				)}
				<Suspense
					fallback={
						<img
							src={imgLoading}
							alt=''
							className='w-64 mx-auto h-auto rounded-xl'
						/>
					}>
					{!loading && mainImageLoaded && (
						<LazyImage
							src={mephoto}
							alt=''
							className='w-64 mx-auto h-auto rounded-xl'
						/>
					)}
				</Suspense>
				<div className='max-w-3xl lg:max-w-xl mx-auto text-xs lg:text-base text-left'>
					{basicText}
				</div>
			</div>
			<div className='flex-row mx-auto text-xs lg:text-base text-left justify-center mt-0 lg:mt-[60px] max-w-3xl '>
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
