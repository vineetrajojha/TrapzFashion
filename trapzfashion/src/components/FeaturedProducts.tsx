import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './FeaturedProducts.css';
import mario from '../assets/Tshirts/Bring your Childhood/Mario/Mario.png'

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
    name: 'RCB T-Shirt',
    brandLogo: mario,
    image: mario,
    rating: 4.5,
    price: '$99.99',
    availability: 'Available in all stores',
  },
  {
    id: 2,
    name: 'CSK T-Shirt',
    brandLogo: '/assets/images/default-featured.png', // Updated placeholder path
    image: '/assets/images/default-featured.png', // Updated placeholder path
    rating: 4.0,
    price: '$59.99',
    availability: 'Available online only',
  },
  {
    id: 3,
    name: 'Striped Polo',
    brandLogo: '/assets/images/default-featured.png', // Updated placeholder path
    image: '/assets/images/default-featured.png', // Updated placeholder path
    rating: 4.5,
    price: '$29.99',
    availability: 'Available online only',
  },
  {
    id: 4,
    name: 'Graphic Tee',
    brandLogo: '/assets/images/default-featured.png', // Updated placeholder path
    image: '/assets/images/default-featured.png', // Updated placeholder path
    rating: 4.0,
    price: '$240.00 USD',
    availability: 'Available in all stores',
  },
    {
    id: 5,
    name: 'V-Neck Sweater',
    brandLogo: '/assets/images/default-featured.png', // Updated placeholder path
    image: '/assets/images/default-featured.png', // Updated placeholder path
    rating: 4.5,
    price: '$220.00 USD',
    availability: 'Available online only',
  },
  {
    id: 6,
    name: 'Hooded Jacket',
    brandLogo: '/assets/images/default-featured.png', // Updated placeholder path
    image: '/assets/images/default-featured.png', // Updated placeholder path
    rating: 4.0,
    price: '$210.00 USD',
    availability: 'Available in all stores',
  },
  {
    id: 7,
    name: 'Denim Shirt',
    brandLogo: '/assets/images/default-featured.png', // Updated placeholder path
    image: '/assets/images/default-featured.png', // Updated placeholder path
    rating: 4.5,
    price: '$260.00 USD',
    availability: 'Available online only',
  },
  {
    id: 8,
    name: 'Casual Trousers',
    brandLogo: '/assets/images/default-featured.png', // Updated placeholder path
    image: '/assets/images/default-featured.png', // Updated placeholder path
    rating: 4.0,
    price: '$230.00 USD',
    availability: 'Available in all stores',
  },
    {
    id: 9,
    name: 'Sports Shorts',
    brandLogo: '/assets/images/default-featured.png', // Updated placeholder path
    image: '/assets/images/default-featured.png', // Updated placeholder path
    rating: 4.5,
    price: '$250.00 USD',
    availability: 'Available online only',
  },
  {
    id: 10,
    name: 'Running Shoes',
    brandLogo: '/assets/images/default-featured.png', // Updated placeholder path
    image: '/assets/images/default-featured.png', // Updated placeholder path
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