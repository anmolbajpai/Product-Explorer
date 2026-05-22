// import React, { useEffect } from 'react';
// import { Product } from '../types/Product';

// interface ProductModalProps {
//   product: Product;
//   onClose: () => void;
// }

// export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
//   useEffect(() => {
//     const handleEscape = (e: KeyboardEvent) => {
//       if (e.key === 'Escape') onClose();
//     };
    
//     document.addEventListener('keydown', handleEscape);
//     document.body.style.overflow = 'hidden';
    
//     return () => {
//       document.removeEventListener('keydown', handleEscape);
//       document.body.style.overflow = 'unset';
//     };
//   }, [onClose]);

//   const renderStars = (rating: number) => {
//     const stars = [];
//     const fullStars = Math.floor(rating);
//     const hasHalfStar = rating % 1 >= 0.5;

//     for (let i = 0; i < 5; i++) {
//       if (i < fullStars) {
//         stars.push(<span key={i} className="star filled">★</span>);
//       } else if (i === fullStars && hasHalfStar) {
//         stars.push(<span key={i} className="star half">★</span>);
//       } else {
//         stars.push(<span key={i} className="star empty">★</span>);
//       }
//     }
//     return stars;
//   };

//   return (
//     <div className="modal-overlay" onClick={onClose}>
//       <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//         <button className="modal-close" onClick={onClose} aria-label="Close modal">
//           ×
//         </button>
        
//         <div className="modal-body">
//           <div className="modal-image-container">
//             <img
//               src={product.image}
//               alt={product.title}
//               className="modal-image"
//             />
//           </div>
          
//           <div className="modal-details">
//             <span className="product-category">{product.category}</span>
//             <h2 className="modal-title">{product.title}</h2>
            
//             <div className="product-rating modal-rating">
//               <div className="stars">{renderStars(product.rating.rate)}</div>
//               <span className="rating-text">
//                 {product.rating.rate.toFixed(1)} ({product.rating.count} reviews)
//               </span>
//             </div>
            
//             <p className="modal-price">${product.price.toFixed(2)}</p>
            
//             <div className="modal-description">
//               <h4>Description</h4>
//               <p>{product.description}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };




import React, { useEffect } from 'react';
import { Product } from '../types/Product';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<span key={i} className="star filled">★</span>);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<span key={i} className="star half">★</span>);
      } else {
        stars.push(<span key={i} className="star empty">★</span>);
      }
    }
    return stars;
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          ×
        </button>
        
        <div className="modal-body">
          <div className="modal-image-container">
            <img
              src={product.image}
              alt={product.title}
              className="modal-image"
            />
          </div>
          
          <div className="modal-details">
            <span className="product-category">{product.category}</span>
            <h2 className="modal-title">{product.title}</h2>
            
            <div className="product-rating modal-rating">
              <div className="stars">{renderStars(product.rating.rate)}</div>
              <span className="rating-text">
                {product.rating.rate.toFixed(1)} ({product.rating.count} reviews)
              </span>
            </div>
            
            <p className="modal-price">${product.price.toFixed(2)}</p>
            
            <div className="modal-description">
              <h4>Description</h4>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};