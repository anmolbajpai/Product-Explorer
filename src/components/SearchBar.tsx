import React from "react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <div className="search-bar">
      {/* Search SVG Graphic Icon wrapper linked with styling positions */}
      <svg
        className="search-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>

      <input
        type="text"
        placeholder="Search products by title..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="search-input"
      />

      {/* Conditionally injected cleanup interaction button */}
      {value !== "" && (
        <button 
          className="clear-button" 
          onClick={() => onChange("")}
          aria-label="Clear search"
        >
          ×
        </button>
      )}
    </div>
  );
};