
import { Product } from "../types/Product";

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export const ProductCard = ({ product, onViewDetails }: ProductCardProps) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.title} 
          className="product-image" 
        />
      </div>

      <div className="product-info">
        {/* If your product type contains a category field, uncomment the line below */}
        {/* <span className="product-category">{product.category}</span> */}
        
        <h2 className="product-title">{product.title}</h2>

        <p className="product-price">${product.price.toFixed(2)}</p>

        <button
          className="view-details-btn"
          onClick={() => onViewDetails(product)}
        >
          View Details
        </button>
      </div>
    </div>
  );
};