import React from 'react';
import { Link } from 'react-router-dom';
import { getFeaturedProducts } from '../data/products';
import FeaturedProducts from '../components/FeaturedProducts';
import { ArrowRightIcon } from '../components/Icon';
import './HomePage.css';

const HomePage: React.FC = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to TrapzFashion</h1>
          <p>Discover the latest trends in fashion</p>
          <Link to="/products" className="cta-button">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products-section">
        <div className="section-header">
          <h2>Featured Products</h2>
          <Link to="/products" className="view-all">
            View All <ArrowRightIcon className="icon" />
          </Link>
        </div>
        <FeaturedProducts products={featuredProducts} />
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="section-header">
          <h2>Shop by Category</h2>
          <Link to="/products" className="view-all">
            View All <ArrowRightIcon className="icon" />
          </Link>
        </div>
        <div className="categories-grid">
          <Link to="/products?category=men" className="category-card">
            <img src="/images/categories/men.jpg" alt="Men's Fashion" />
            <h3>Men's Fashion</h3>
          </Link>
          <Link to="/products?category=women" className="category-card">
            <img src="/images/categories/women.jpg" alt="Women's Fashion" />
            <h3>Women's Fashion</h3>
          </Link>
          <Link to="/products?category=kids" className="category-card">
            <img src="/images/categories/kids.jpg" alt="Kids' Fashion" />
            <h3>Kids' Fashion</h3>
          </Link>
          <Link to="/products?category=accessories" className="category-card">
            <img src="/images/categories/accessories.jpg" alt="Accessories" />
            <h3>Accessories</h3>
          </Link>
        </div>
      </section>

      {/* Collections Section */}
      <section className="collections-section">
        <div className="section-header">
          <h2>Our Collections</h2>
          <Link to="/products" className="view-all">
            View All <ArrowRightIcon className="icon" />
          </Link>
        </div>
        <div className="collections-grid">
          <Link to="/products?collection=summer" className="collection-card">
            <img src="/images/collections/summer.jpg" alt="Summer Collection" />
            <h3>Summer Collection</h3>
          </Link>
          <Link to="/products?collection=winter" className="collection-card">
            <img src="/images/collections/winter.jpg" alt="Winter Collection" />
            <h3>Winter Collection</h3>
          </Link>
          <Link to="/products?collection=casual" className="collection-card">
            <img src="/images/collections/casual.jpg" alt="Casual Collection" />
            <h3>Casual Collection</h3>
          </Link>
          <Link to="/products?collection=formal" className="collection-card">
            <img src="/images/collections/formal.jpg" alt="Formal Collection" />
            <h3>Formal Collection</h3>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 