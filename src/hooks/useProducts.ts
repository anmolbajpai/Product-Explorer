import { useState, useEffect, useMemo } from 'react';
import { Product, SortOption } from '../types/Product';
import { fetchProducts, extractCategories } from '../Services/productService';

interface UseProductsReturn {
  products: Product[];
  filteredProducts: Product[];
  categories: string[];
  isLoading: boolean;
  error: string | null;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  sortOption: SortOption;
  setSortOption: (option: SortOption) => void;
  refetch: () => void;
}

export const useProducts = (): UseProductsReturn => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOption, setSortOption] = useState<SortOption>('default');

  const loadProducts = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const data = await fetchProducts();
      setProducts(data);
    } catch (err) {
      setError('Unable to load products. Please try again later.');
      console.error('Error fetching products:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
  const fetchData = async () => {
    await loadProducts();
  };

  fetchData();
}, []);

  const categories = useMemo(() => extractCategories(products), [products]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by search term
    if (searchTerm.trim()) {
      const lowerSearch = searchTerm.toLowerCase();
      result = result.filter(product =>
        product.title.toLowerCase().includes(lowerSearch)
      );
    }

    // Filter by category
    if (selectedCategory) {
      result = result.filter(product => product.category === selectedCategory);
    }

    // Sort products
    switch (sortOption) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      default:
        // Keep default order
        break;
    }

    return result;
  }, [products, searchTerm, selectedCategory, sortOption]);

  return {
    products,
    filteredProducts,
    categories,
    isLoading,
    error,
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    sortOption,
    setSortOption,
    refetch: loadProducts,
  };
};
