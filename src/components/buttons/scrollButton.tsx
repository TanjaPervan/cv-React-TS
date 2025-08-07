import React, { useEffect, useState } from 'react';
import './ScrollButton.css';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 250);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      className="scrollToTop "
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    ></button>
  );
};

export default ScrollToTopButton;
