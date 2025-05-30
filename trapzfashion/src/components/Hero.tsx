import React from 'react';
import './Hero.css';
import summer from '../assets/images/sports.jpg';

const Hero: React.FC = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${summer})` }}>
      <div className="hero-content">
        <a href="/shop" className="hero-shop-btn">SHOP NOW</a>
      </div>
    </section>
  );
};

export default Hero; 