import React from 'react';
import { motion } from 'framer-motion';

// Importing CSS
import './Search.css';

// Props for Dropdown component
type SearchBarProps = {
  children: React.ReactNode;
};

const SearchBar = ({ children }: React.PropsWithChildren<SearchBarProps>) => {
  return (
    <div className="search">
      <label htmlFor="search-bar" className="search-bar__label">
        Search
      </label>
      <div className="search-bar">
        <input
          type="text"
          id="search-bar"
          className="search-bar__input"
          placeholder="Search"
          aria-label="search"
        />
        <button className="search-bar__submit" aria-label="submit search">
          {children}
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
