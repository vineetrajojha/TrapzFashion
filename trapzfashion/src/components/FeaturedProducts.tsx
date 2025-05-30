import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './FeaturedProducts.css';

interface Product {
  id: number;
  name: string;
  brandLogo: string;
  image: string;
  rating: number;
  price: string;
  availability: string;
}

// Placeholder data for featured products
const featuredProducts: Product[] = [
  {
    id: 1,
    name: 'Athletic Shoe',
    brandLogo: '/assets/images/puma-logo.png', // Placeholder path
    image: '/assets/images/product-1.png', // Placeholder path
    rating: 4.5,
    price: '$99.99',
    availability: 'Available in all stores',
  },
  {
    id: 2,
    name: 'Nike Air Force',
    brandLogo: '/assets/images/nike-logo.png', // Placeholder path
    image: '/assets/images/product-2.png', // Placeholder path
    rating: 4.0,
    price: '$59.99',
    availability: 'Available online only',
  },
  {
    id: 3,
    name: 'Nike Athletic',
    brandLogo: '/assets/images/reebok-logo.png', // Placeholder path
    image: '/assets/images/product-3.png', // Placeholder path
    rating: 4.5,
    price: '$29.99',
    availability: 'Available online only',
  },
  {
    id: 4,
    name: 'PowerPace',
    brandLogo: '/assets/images/adidas-logo.png', // Placeholder path
    image: '/assets/images/product-4.png', // Placeholder path
    rating: 4.0,
    price: '$240.00 USD',
    availability: 'Available in all stores',
  },
    {
    id: 5,
    name: 'SwiftStep',
    brandLogo: '/assets/images/puma-logo.png', // Placeholder path
    image: '/assets/images/product-5.png', // Placeholder path
    rating: 4.5,
    price: '$220.00 USD',
    availability: 'Available online only',
  },
  {
    id: 6,
    name: 'MetroWalk',
    brandLogo: '/assets/images/nike-logo.png', // Placeholder path
    image: '/assets/images/product-6.png', // Placeholder path
    rating: 4.0,
    price: '$210.00 USD',
    availability: 'Available in all stores',
  },
  {
    id: 7,
    name: 'TrailBlazer',
    brandLogo: '/assets/images/reebok-logo.png', // Placeholder path
    image: '/assets/images/product-7.png', // Placeholder path
    rating: 4.5,
    price: '$260.00 USD',
    availability: 'Available online only',
  },
  {
    id: 8,
    name: 'StreetRunner',
    brandLogo: '/assets/images/adidas-logo.png', // Placeholder path
    image: '/assets/images/product-8.png', // Placeholder path
    rating: 4.0,
    price: '$230.00 USD',
    availability: 'Available in all stores',
  },
    {
    id: 9,
    name: 'PeakPerformer',
    brandLogo: '/assets/images/puma-logo.png', // Placeholder path
    image: '/assets/images/product-9.png', // Placeholder path
    rating: 4.5,
    price: '$250.00 USD',
    availability: 'Available online only',
  },
  {
    id: 10,
    name: 'CityGlide',
    brandLogo: '/assets/images/nike-logo.png', // Placeholder path
    image: '/assets/images/product-10.png', // Placeholder path
    rating: 4.0,
    price: '$200.00 USD',
    availability: 'Available in all stores',
  },
];

const FeaturedProducts: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 products at a time based on the new image
    slidesToScroll: 1,
    arrows: false, // Remove arrows
    autoplay: true, // Enable auto-scroll
    autoplaySpeed: 3000, // Set auto-scroll speed (3 seconds)
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
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-wrapper">
                 <img src={product.image} alt={product.name} className="product-image" />
              </div>
              <div className="product-info">
                <div className="product-name">{product.name}</div>
                <div className="product-availability">{product.availability}</div>
                <div className="product-price">{product.price}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default FeaturedProducts; 