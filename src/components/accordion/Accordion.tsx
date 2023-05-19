// Importing required modules and components
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Importing CSS
import './Accordion.css';

// Props for Accordion component
export interface AccordionProps {
  title: string;
  children?: React.ReactNode;
}

// Accordion component
const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
}: AccordionProps) => {
  // State hooks and refs
  const [isOpen, setIsOpen] = useState(false);
  const accordionRef = useRef<HTMLDivElement>(null);

  // Toggles the state of the accordion
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  // Handle clicks outside the accordion
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        accordionRef.current &&
        !accordionRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [accordionRef]);

  // Rotates the icon
  const iconVariants = {
    open: { rotate: 90 },
    closed: { rotate: 0 },
  };

  // Rendering the accordion component
  return (
    <div className="accordion" ref={accordionRef}>
      <button onClick={toggleAccordion}>
        {title}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>Keyboard Arrow Right</title>
          <motion.path
            d="M9.29 15.88 13.17 12 9.29 8.12a.996.996 0 1 1 1.41-1.41l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3a.996.996 0 0 1-1.41 0c-.38-.39-.39-1.03 0-1.42Z"
            variants={iconVariants}
            animate={isOpen ? 'open' : 'closed'}
          />
          <metadata>arrow, arrows, keyboard, right</metadata>
        </svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`content ${isOpen ? 'open' : ''}`}
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="child">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
