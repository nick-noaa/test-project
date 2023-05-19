// Importing required modules and components
import React, { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isMenuOpen } from '../../Store';
import { motion, AnimatePresence } from 'framer-motion';

// Importing CSS
import './DropdownMenu.css';

// Props Imports
import { linkProps } from '../Link.astro';

// Props for Dropdown component
export interface DropdownButtonProps extends linkProps {
  children: React.ReactNode;
}

// DropdownButton component
export const DropdownButton = ({
  children,
  href,
  ariaLabel,
  style,
  classes,
  type,
}: React.PropsWithChildren<DropdownButtonProps>) => {
  // State hooks and refs
  const [clicks, setClicks] = useState(0);
  const isOpen = useStore(isMenuOpen);
  const dropdownRef = useRef<HTMLAnchorElement>(null);
  const timerRef = useRef<number | null>(null);

  // Click event handler
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault(); // prevent the default behavior of the click event
    setClicks(clicks + 1); // increment the clicks count

    switch (clicks) {
      case 0:
        // if it's the first click, set a timeout to open the menu
        timerRef.current = window.setTimeout(() => {
          isMenuOpen.set(!isOpen);
          setClicks(0);
          timerRef.current = null;
        }, 250);
        break;
      case 1:
        // if it's the second click, check if the timeout is still active
        if (timerRef.current !== null) {
          clearTimeout(timerRef.current); // cancel the timeout
          timerRef.current = null;
        }
        // navigate to the specified link
        window.location.href = href;
        setClicks(0); // reset the clicks count
        break;
      default:
        // if there are more than 2 clicks, reset the clicks count
        setClicks(0);
        break;
    }
  };

  // Focus event handler
  const handleFocus = () => {
    // check if a timeout is active and cancel it
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    if (clicks === 0) {
      // if it's the first click, set a timeout to open the menu
      timerRef.current = window.setTimeout(() => {
        isMenuOpen.set(true);
        timerRef.current = null;
      }, 250);
    } else {
      // if there are more than 2 clicks, open the menu immediately
      isMenuOpen.set(true);
    }
  };

  // Rendering the DropdownButton component
  return (
    <a
      href={href}
      className={`${classes} filled ${type} ${style}`}
      aria-label={ariaLabel}
      ref={dropdownRef}
      onClick={handleClick}
      onFocus={handleFocus}
    >
      {children}
    </a>
  );
};

// Props for DropdownMenu component
type DropdownMenuProps = {
  children: React.ReactNode;
};

// DropdownMenu component
export const DropdownMenu = ({ children }: DropdownMenuProps) => {
  // State hooks and refs
  const isOpen = useStore(isMenuOpen);
  const [menuHeight, setMenuHeight] = useState(0);
  const dropdownRef = useRef<HTMLUListElement>(null);

  // Set menu height on open
  useEffect(() => {
    if (isOpen && dropdownRef.current) {
      setMenuHeight(dropdownRef.current.scrollHeight);
    }
  }, [isOpen]);

  // Calculate menu height
  const calcHeight = () => {
    setMenuHeight(dropdownRef.current?.scrollHeight || 0);
  };

  // Handle clicks outside the menu
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node) &&
      event.target !== event.currentTarget
    ) {
      isMenuOpen.set(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    // Remove event listener when component is unmounted
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Rendering the DropdownMenu component
  return (
    <ul
      className={`dropdown ${isOpen ? 'open' : ''}`}
      style={{ height: isOpen ? menuHeight : 0 }}
      ref={dropdownRef}
      role="menu"
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            onAnimationStart={calcHeight}
            onAnimationComplete={() => {
              if (!isOpen) {
                setMenuHeight(0);
              }
            }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </ul>
  );
};
