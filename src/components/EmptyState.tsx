import React from "react";

type EmptyStateProps = {
  searchTerm?: string;
  category?: string;
};

export const EmptyState: React.FC<EmptyStateProps> = (props) => {

  let message = "No products found.";

  if (props.searchTerm && props.category) {
    message = `No products found for ${props.searchTerm} in ${props.category}`;
  }

  else if (props.searchTerm) {
    message = `No products found for ${props.searchTerm}`;
  }

  else if (props.category) {
    message = `No products found in ${props.category}`;
  }

  return (
    <div>

      <h2>No Products Found</h2>

      <p>{message}</p>

    </div>
  );
};