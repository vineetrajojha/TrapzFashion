import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../data/products';
import './ProductDetail.css';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(Number(id));
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');

  if (!product) {
    return <div className="product-not-found">Product not found</div>;
  }

  return (
    <div className="product-detail-container">
      <div className="product-detail-grid">
        <div className="product-image-section">
          <img src={product.image} alt={product.name} className="product-detail-image" />
        </div>
        
        <div className="product-info-section">
          <h1 className="product-name">{product.name}</h1>
          <div className="product-price">{product.price}</div>
          <div className="product-rating">Rating: {product.rating}/5</div>
          
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

          <div className="product-colors">
            <h3>Select Color</h3>
            <div className="color-options">
              {product.colors.map((color) => (
                <button
                  key={color}
                  className={`color-button ${selectedColor === color ? 'selected' : ''}`}
                  onClick={() => setSelectedColor(color)}
                  style={{ backgroundColor: color.toLowerCase() }}
                >
                  {color}
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