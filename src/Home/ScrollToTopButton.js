import React, { useState, useEffect } from 'react';
import { animateScroll } from 'react-scroll';
import { FaArrowUp } from 'react-icons/fa';

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setShowButton(currentScrollPos > 1);
  };

  const handleClick = () => {
    animateScroll.scrollToTop({duration:200, smooth:'easeInOutQuint' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    function handleScroll() {
      const scrolledToBottom =
          window.scrollY + window.innerHeight >= document.body.scrollHeight;
      setShouldRender(!scrolledToBottom);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsSmallScreen(mediaQuery.matches);

    function handleResize(event) {
      setIsSmallScreen(event.matches);
    }

    mediaQuery.addEventListener("change", handleResize);
    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  if (!shouldRender && isSmallScreen) {
    return <></>
  }

  return (
    <button
      type="button"
      className={`fixed z-20 bottom-4 right-4 bg-pink border-1 border-black text-white rounded-full p-2 hover:bg-yellow
      ${
        showButton ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleClick}
    >
      <FaArrowUp />
    </button>
  );
}

export default ScrollToTopButton;
