import React from 'react';
import './ShopByCategory.css';
import {
  FiCircle, // Using simple circle as placeholder or abstract icon
  FiTrello, // Represents a collection/grid
  FiPackage, // Represents items/products
  FiTag, // Represents categories/labels
  FiSquare, // Another simple shape
} from 'react-icons/fi';
import { IconType } from 'react-icons';

interface Category {
  name: string;
  icon: IconType; // Use IconType for icon components
  link: string;
}

const categories: Category[] = [
  {
    name: 'T-Shirts',
    icon: FiCircle, // Store component directly
    link: '/categories/sneakers',
  },
  {
    name: 'Hoodies',
    icon: FiTrello, // Store component directly
    link: '/categories/sandals',
  },
  {
    name: 'IPL Merches',
    icon: FiPackage, // Store component directly
    link: '/categories/boots',
  },
  {
    name: 'Jackets',
    icon: FiTag, // Store component directly
    link: '/categories/heels',
  },
  {
    name: 'Denims',
    icon: FiSquare, // Store component directly
    link: '/categories/flats',
  },
  {
    name: 'Sportswear',
    icon: FiCircle, // Store component directly
    link: '/categories/sportswear',
  },
];

const ShopByCategory: React.FC = () => {
  return (
    <section className="shop-by-category-section">
      <h1 className="shop-by-category-heading">Shop by Category</h1>
      <div className="category-list">
        {categories.map((category) => (
          <a href={category.link} key={category.name} className="category-item">
            <div className="category-icon">{React.createElement(category.icon as any, { size: 36 })}</div>
            <div className="category-name">{category.name}</div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ShopByCategory; 