import React from "react";
import { SortOption } from "../types/Product";

interface FilterBarProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  sortOption: SortOption;
  onSortChange: (option: SortOption) => void;
}

export const FilterBar = (props: FilterBarProps) => {

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    props.onCategoryChange(event.target.value);
  };

  const handleSortChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    props.onSortChange(event.target.value as SortOption);
  };

  return (
    <div className="filter-bar">

      {/* Category Filter */}
      <div className="filter-group">

        <label>Category:</label>

        <select
          value={props.selectedCategory}
          onChange={handleCategoryChange}
          className="filter-select"
        >
          <option value="">All Categories</option>

          {props.categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}

        </select>
      </div>

      {/* Sort Filter */}
      <div className="filter-group">

        <label>Sort By:</label>

        <select
          value={props.sortOption}
          onChange={handleSortChange}
          className="filter-select"
        >
          <option value="default">Default</option>
          <option value="price-asc">Price Low to High</option>
          <option value="price-desc">Price High to Low</option>
        </select>

      </div>

    </div>
  );
};