import { useEffect, useState } from 'react';

const ScrollDirectionScanner = () => {
  const [scrollDirection, setScrollDirection] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollDirection(false);
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return scrollDirection;
};

export default ScrollDirectionScanner;
