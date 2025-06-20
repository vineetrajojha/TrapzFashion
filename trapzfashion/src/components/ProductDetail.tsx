import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../data/products';
import './ProductDetail.css';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(Number(id));
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [isWishlist, setIsWishlist] = useState<boolean>(false);

  if (!product) {
    return <div className="product-not-found">Product not found</div>;
  }

  return (
    <div className="product-detail-container">
      <div className="product-detail-grid">
        <div className="product-image-section">
          <img src={product.images[0]} alt={product.name} className="product-detail-image" />
        </div>
        
        <div className="product-info-section">
          <h1 className="product-name">{product.name}</h1>
          <div className="product-price">{product.price}</div>
          
          <div className="product-description">
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>

          <div className="product-sizes">
            <h3>Select Size</h3>
            <div className="size-options">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`size-button ${selectedSize === size ? 'selected' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="product-availability">
            <p>{product.availability}</p>
          </div>

          <button className="add-to-cart-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 