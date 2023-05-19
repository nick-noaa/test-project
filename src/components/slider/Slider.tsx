// Importing required modules and components
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Importing CSS
import './Slider.css';

// Props for Slider component
interface SliderProps {
  children: React.ReactNode[];
  numSlides?: number;
}

// Slider component
const Slider: React.FC<SliderProps> = ({ children, numSlides = 6 }) => {
  // State hooks and refs
  const [sliderWidth, setSliderWidth] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sets the slider width on window resize
  useEffect(() => {
    const handleResize = () => {
      setSliderWidth(sliderRef.current!.offsetWidth - 2);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Updates the slider width when current slide changes
  useEffect(() => {
    setSliderWidth(sliderRef.current!.offsetWidth - 2);
  }, [currentSlide]);

  // Navigate to next slide
  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === children.length - 1 ? currentSlide : currentSlide + 1
    );
  };

  // Navigate to previous slide
  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? children.length - 1 : currentSlide - 1
    );
  };

  // Go back to the first slide
  const backToStart = () => {
    setCurrentSlide(0);
  };

  // rendering the slider component
  return (
    <>
      <motion.div className="slider" ref={sliderRef}>
        <motion.div
          className="inner-slider"
          style={{ width: `${sliderWidth}px` }}
          animate={{ x: -sliderWidth * currentSlide }}
        >
          {React.Children.map(children, child => (
            <motion.div className="item">{child}</motion.div>
          ))}
        </motion.div>
      </motion.div>
      <div className="slider-controls">
        <button disabled={currentSlide === 0} onClick={prevSlide}>
          Prev
        </button>
        <button disabled={currentSlide === numSlides} onClick={nextSlide}>
          Next
        </button>
        <button
          className="backtostart"
          disabled={currentSlide === 0}
          onClick={backToStart}
        >
          Back to Start
        </button>
      </div>
    </>
  );
};

export default Slider;
