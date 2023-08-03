import React, { useState, useEffect, Suspense } from 'react';
import { basicText } from './aboutMeText';
import { fullText } from './aboutMeText';
import mephoto from '../../../images/me.png';
import imgLoading from '../../../images/imgLoading.jpg';
import Portfolio from './AboutMePortfolio';
import WorkExpirience from './AboutMeWorkExpirience';

const LazyImage = React.lazy(() => import('./LoadingImage'));

const AboutMe = () => {
  const [loading, setLoading] = useState(true);
  const [mainImageLoaded, setMainImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = mephoto;

    image.onload = () => {
      setLoading(false);
      setMainImageLoaded(true);
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
      <div className={`flex flex-col lg:flex-row mx-auto lg:justify-between max-w-4xl space-y-8`}>
        {loading && <img src={imgLoading} alt='' className='w-64 mx-auto h-auto rounded-xl' />}
        <Suspense fallback={<img src={imgLoading} alt='' className='w-64 mx-auto h-auto rounded-xl' />}>
          {!loading && mainImageLoaded && <LazyImage src={mephoto} alt='' className='w-64 mx-auto h-auto rounded-xl' />}
        </Suspense>
        <div className='max-w-3xl lg:max-w-xl mx-auto text-xs lg:text-base text-left'>{basicText}</div>
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
