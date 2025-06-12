import React from 'react';
import './ShopByCategory.css';

interface Category {
  name: string;
  icon: string;
  link: string;
}

const categories: Category[] = [
  {
    name: 'T-Shirts',
    icon: 'fas fa-tshirt',
    link: '/categories/T-Shirts',
  },
];

const ShopByCategory: React.FC = () => {
  return (
    <section className="shop-by-category-section">
      <h1 className="shop-by-category-heading">Shop by Category</h1>
      <div className="category-list">
        {categories.map((category) => (
          <a href={category.link} key={category.name} className="category-item">
            <div className="category-icon">
              <i className={category.icon}></i>
            </div>
            <div className="category-name">{category.name}</div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ShopByCategory; 