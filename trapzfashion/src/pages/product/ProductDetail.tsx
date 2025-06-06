import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FiShoppingCart, FiHeart, FiTruck, FiRefreshCw } from 'react-icons/fi';
import { IconBaseProps } from 'react-icons';
import { getProductById } from '../../data/products';
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

  const handleAddToCart = () => {
    // Add to cart logic
  };

  const handleWishlist = () => {
    setIsWishlist(!isWishlist);
  };

  return (
    <div className="product-detail-container">
      <div className="product-detail-grid">
        {/* Image Gallery Section */}
        <div className="product-images-section">
          <div className="main-image">
            <img src={product.images[selectedImage]} alt={product.name} />
          </div>
          <div className="thumbnail-images">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.name} view ${index + 1}`}
                className={selectedImage === index ? 'selected' : ''}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
        </div>

        {/* Product Info Section */}
        <div className="product-info-section">
          <div className="product-header">
            <h1 className="product-name">{product.name}</h1>
            <div className="product-brand">
              <img src={product.brandLogo} alt="Brand Logo" className="brand-logo" />
            </div>
          </div>

          <div className="product-price">{product.price}</div>
          
          {product.isBestSeller && <div className="badge bestseller">Best Seller</div>}
          {product.isNewArrival && <div className="badge new-arrival">New Arrival</div>}
          
          <div className="product-description">
            <p>{product.description}</p>
          </div>

          {/* Size Selection */}
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

          {/* Availability */}
          <div className="product-availability">
            <p>{product.availability}</p>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">
            <button className="add-to-cart" onClick={handleAddToCart}>
              {React.createElement(FiShoppingCart as React.ComponentType<IconBaseProps>, { size: 20 })} Add to Cart
            </button>
            <button className="wishlist" onClick={handleWishlist}>
              {React.createElement(FiHeart as React.ComponentType<IconBaseProps>, { 
                size: 20, 
                className: isWishlist ? 'active' : '' 
              })}
            </button>
          </div>

          {/* Delivery Info */}
          {product.deliveryInfo && (
            <div className="delivery-info">
              <div className="delivery-details">
                {React.createElement(FiTruck as React.ComponentType<IconBaseProps>, { size: 20 })} {product.deliveryInfo.standardDelivery}
                {product.deliveryInfo.expressDelivery && ' • Express Delivery Available'}
              </div>
            </div>
          )}

          {/* Key Highlights */}
          {product.keyHighlights && (
            <div className="key-highlights">
              <h3>Key Highlights</h3>
              <ul>
                {Object.entries(product.keyHighlights).map(([key, value]) => (
                  value && (
                    <li key={key}>
                      <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                    </li>
                  )
                ))}
              </ul>
            </div>
          )}

          {/* Full Description */}
          {product.fullDescription && (
            <div className="full-description">
              <h3>Product Details</h3>
              <p>{product.fullDescription}</p>
            </div>
          )}

          {/* Manufacture & Care */}
          {product.manufactureAndCare && (
            <div className="manufacture-care">
              <h3>Manufacture & Care</h3>
              <p>{product.manufactureAndCare}</p>
            </div>
          )}

          {/* Return Policy */}
          {product.returnPolicy && (
            <div className="return-policy">
              <h3>Return Policy</h3>
              <p>
                {React.createElement(FiRefreshCw as React.ComponentType<IconBaseProps>, { size: 20 })} {product.returnPolicy}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 