import { useState } from "react";
import { useProducts } from "./hooks/useProducts";
import { Product } from "./types/Product";

import { SearchBar } from "./components/SearchBar";
import { FilterBar } from "./components/FilterBar";
import { ProductCard } from "./components/ProductCard";
import { ProductModal } from "./components/ProductModal";
import { Loader } from "./components/Loader";
import { EmptyState } from "./components/EmptyState";
import { ErrorState } from "./components/ErrorState";

import "./App.css";

const App = () => {
  const productsData = useProducts();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="app">
      {/* Header aligned with .header CSS styles */}
      <header className="header">
        <div className="header-content">
          <h1 className="logo">🛍️ Product Explorer</h1>
          <p className="tagline">Discover amazing products</p>
        </div>
      </header>

      {/* Primary content area styling wrapper */}
      <main className="main-content">
        <div className="controls">
          <SearchBar
            value={productsData.searchTerm}
            onChange={productsData.setSearchTerm}
          />
          <FilterBar
            categories={productsData.categories}
            selectedCategory={productsData.selectedCategory}
            onCategoryChange={productsData.setSelectedCategory}
            sortOption={productsData.sortOption}
            onSortChange={productsData.setSortOption}
          />
        </div>

        {/* Loading State */}
        {productsData.isLoading && <Loader />}

        {/* Error State */}
        {productsData.error && (
          <ErrorState
            message={productsData.error}
            onRetry={productsData.refetch}
          />
        )}

        {/* Empty State */}
        {!productsData.isLoading &&
          !productsData.error &&
          productsData.filteredProducts.length === 0 && (
            <EmptyState
              searchTerm={productsData.searchTerm}
              category={productsData.selectedCategory}
            />
          )}

        {/* Product List Grid */}
        {!productsData.isLoading &&
          !productsData.error &&
          productsData.filteredProducts.length > 0 && (
            <>
              <p className="results-count">
                Showing {productsData.filteredProducts.length} product
                {productsData.filteredProducts.length !== 1 ? "s" : ""}
              </p>
              <div className="product-grid">
                {productsData.filteredProducts.map((product: Product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onViewDetails={handleViewDetails}
                  />
                ))}
              </div>
            </>
          )}
      </main>

      {/* Sticky layout footer */}
      <footer className="footer">
        <p>© 2026 Product Explorer. Built with React + TypeScript.</p>
      </footer>

      {/* Details Lightbox Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default App;