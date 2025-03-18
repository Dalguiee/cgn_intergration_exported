import { useEffect, useState, useRef } from 'react';

const IntersectionObserverScanner = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const intersectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // observer.unobserve(entry.target);
        } else {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    if (intersectionRef?.current) observer.observe(intersectionRef?.current);

    return () => observer.disconnect();
  }, [threshold]);

  return { intersectionRef, isVisible };
};

export default IntersectionObserverScanner;
