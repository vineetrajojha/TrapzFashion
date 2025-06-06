import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="product-image">
        <img src={product.images[0]} alt={product.name} />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="price">₹{product.price}</p>
        <div className="product-meta">
          {product.isBestSeller && <span className="badge bestseller">Bestseller</span>}
          {product.isNewArrival && <span className="badge new-arrival">New</span>}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard; 