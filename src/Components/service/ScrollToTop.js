import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { scrollActions } from '../../store/scroll-slice';


import styles from './css/ScrollToTop.module.css';
import scrollIcon from '../../images/scrollUp.svg';

const ScrollToTop = () => {
  const dispach= useDispatch();
  const scrollState= useSelector((state)=>state.scroll.showButton);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const headerHeight = 80;

    if (scrollY > headerHeight) {
      dispach(scrollActions.showButtonHandler())
    } else {
      dispach(scrollActions.hideButtonHandler())
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {scrollState && (
        <button className={styles.topButton} onClick={scrollToTop}>
          <img src={scrollIcon} alt='back to top' />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
