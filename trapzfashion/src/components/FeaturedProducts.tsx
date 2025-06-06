import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Product } from '../types';
import './FeaturedProducts.css';

interface FeaturedProductsProps {
  products: Product[];
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ products }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="featured-products-section">
      <div className="featured-products-header">
        <h1 className="featured-products-heading">Featured Products</h1>
        <button className="view-all-button">View All</button>
      </div>
      <div className="products-list">
        <Slider {...settings}>
          {products.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id} className="product-card">
              <div className="product-image-wrapper">
                <img src={product.images[0]} alt={product.name} className="product-image" />
              </div>
              <div className="product-info">
                <div className="product-name">{product.name}</div>
                <div className="product-availability">{product.availability}</div>
                <div className="product-price">{product.price}</div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default FeaturedProducts; 