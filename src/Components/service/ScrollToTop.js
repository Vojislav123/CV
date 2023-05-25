import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import styles from './css/ScrollToTop.module.css';
import scrollIcon from '../../images/scrollUp.svg';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    handleScroll(); // Check initial scroll position

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const headerHeight = 80;

    if (scrollY > headerHeight) {
      setShowButton(true);
    } else {
      setShowButton(false);
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
      {showButton && (
        <button className={styles.topButton} onClick={scrollToTop}>
          <img src={scrollIcon} alt='back to top' />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
