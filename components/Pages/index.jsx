import React, { useEffect, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import styles from './Pages.module.css';

const Pages = ({ sections }) => {
  const containerRef = useRef(null);

  const scrollToSection = (index) => {
    const section = containerRef.current.children[index];
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleKeyDown = (e) => {
    const focusedElement = document.activeElement;
    const currentIndex = Array.from(containerRef.current.children).indexOf(focusedElement);

    if (e.key === 'ArrowDown' && currentIndex < sections.length - 1) {
      scrollToSection(currentIndex + 1);
    } else if (e.key === 'ArrowUp' && currentIndex > 0) {
      scrollToSection(currentIndex - 1);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedUp: () => {
      const focusedElement = document.activeElement;
      const currentIndex = Array.from(containerRef.current.children).indexOf(focusedElement);
      if (currentIndex < sections.length - 1) {
        scrollToSection(currentIndex + 1);
      }
    },
    onSwipedDown: () => {
      const focusedElement = document.activeElement;
      const currentIndex = Array.from(containerRef.current.children).indexOf(focusedElement);
      if (currentIndex > 0) {
        scrollToSection(currentIndex - 1);
      }
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className={styles.container} {...swipeHandlers} ref={containerRef}>
      {sections.map((section, index) => (
        <div
          key={index}
          className={styles.section}
          tabIndex="0"
        >
          {section}
        </div>
      ))}
    </div>
  );
};

export default Pages;