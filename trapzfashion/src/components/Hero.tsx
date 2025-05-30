import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Discover Your Style</h1>
        <p>Explore our latest collection of trendy fashion items</p>
        <div className="hero-buttons">
          <a href="/shop" className="btn btn-primary">Shop Now</a>
          <a href="/collections" className="btn btn-secondary">View Collections</a>
        </div>
      </div>
    </section>
  );
};

export default Hero; 