import { Product } from '../types/Product';

const API_URL = 'https://fakestoreapi.com/products';

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch(API_URL);

  console.log('Fetching products from API:', API_URL);
  console.log('API response status:', response.status);
  console.log('API response body:', response.body);

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.status}`);
  }

  const data = await response.json();
  console.log('Products:', data);

  return data;
};

export const extractCategories = (products: Product[]): string[] => {
  const categories = new Set(products.map(product => product.category));
  return Array.from(categories).sort();
};