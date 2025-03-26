import { useEffect, useState, useRef } from 'react';

const IntersectionObserverScanner = (
  oneStepActive = false,
  threshold = 0.1
) => {
  const [isVisible, setIsVisible] = useState(false);
  const intersectionRef = useRef(null);

  useEffect(() => {
    let observer;
    if (oneStepActive) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        },
        { threshold }
      );
    } else {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        },
        { threshold }
      );
    }

    if (intersectionRef?.current) observer.observe(intersectionRef?.current);

    return () => observer.disconnect();
  }, [threshold]);

  return { intersectionRef, isVisible };
};

export default IntersectionObserverScanner;
