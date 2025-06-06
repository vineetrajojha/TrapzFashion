import React from 'react';
import './ShopByCategory.css';
import {
  FiCircle, // Using simple circle as placeholder or abstract icon
  FiTrello, // Represents a collection/grid
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
    link: '/categories/T-Shirts',
  },
  {
    name: 'Hoodies',
    icon: FiTrello, // Store component directly
    link: '/categories/Hoodies',
  },
  {
    name: 'Sportswear',
    icon: FiCircle, // Store component directly
    link: '/categories/Sportswear',
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