import mario from '../assets/Tshirts/Bring your Childhood/Mario/Mario.png'

export interface Product {
  id: number;
  name: string;
  brandLogo: string;
  image: string;
  rating: number;
  price: string;
  availability: string;
  category: string;
  collection?: string;
  description: string;
  sizes: string[];
  colors: string[];
  isFeatured?: boolean;
  isNewArrival?: boolean;
  isBestSeller?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Mario T-Shirt',
    brandLogo: mario,
    image: mario,
    rating: 4.5,
    price: '$99.99',
    availability: 'A nostalgic Mario-themed t-shirt that brings back childhood memories.',
    category: 'T-Shirts',
    collection: 'Bring your Childhood',
    description: 'A nostalgic Mario-themed t-shirt that brings back childhood memories.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Red', 'Blue'],
    isFeatured: true,
    isNewArrival: true
  },
  {
    id: 2,
    name: 'CSK T-Shirt',
    brandLogo: '/assets/images/default-featured.png',
    image: '/assets/images/default-featured.png',
    rating: 4.0,
    price: '$59.99',
    availability: 'Available online only',
    category: 'T-Shirts',
    collection: 'Sports',
    description: 'Official CSK team t-shirt with team colors and logo.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Yellow', 'Blue'],
    isFeatured: true
  },
  {
    id: 3,
    name: 'Vintage Denim Jacket',
    brandLogo: '/assets/images/default-featured.png',
    image: '/assets/images/default-featured.png',
    rating: 4.8,
    price: '$129.99',
    availability: 'Available in all stores',
    category: 'Jackets',
    collection: 'Vintage Collection',
    description: 'Classic denim jacket with a modern twist, perfect for any casual occasion.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Blue', 'Black'],
    isFeatured: true,
    isBestSeller: true
  },
  {
    id: 4,
    name: 'Premium Hoodie',
    brandLogo: '/assets/images/default-featured.png',
    image: '/assets/images/default-featured.png',
    rating: 4.6,
    price: '$79.99',
    availability: 'Available in all stores',
    category: 'Hoodies',
    collection: 'Winter Collection',
    description: 'Comfortable and stylish hoodie made from premium materials.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Gray', 'Black', 'White'],
    isFeatured: true
  },
  {
    id: 5,
    name: 'Slim Fit Jeans',
    brandLogo: '/assets/images/default-featured.png',
    image: '/assets/images/default-featured.png',
    rating: 4.3,
    price: '$89.99',
    availability: 'Available online only',
    category: 'Jeans',
    collection: 'Essential Collection',
    description: 'Modern slim fit jeans with stretch comfort technology.',
    sizes: ['28', '30', '32', '34', '36'],
    colors: ['Blue', 'Black'],
    isFeatured: true
  },
  {
    id: 6,
    name: 'Casual Sneakers',
    brandLogo: '/assets/images/default-featured.png',
    image: '/assets/images/default-featured.png',
    rating: 4.7,
    price: '$119.99',
    availability: 'Available in all stores',
    category: 'Footwear',
    collection: 'Street Style',
    description: 'Versatile sneakers perfect for everyday wear.',
    sizes: ['7', '8', '9', '10', '11'],
    colors: ['White', 'Black'],
    isFeatured: true,
    isNewArrival: true
  },
  {
    id: 7,
    name: 'Graphic Print T-Shirt',
    brandLogo: '/assets/images/default-featured.png',
    image: '/assets/images/default-featured.png',
    rating: 4.4,
    price: '$49.99',
    availability: 'Available online only',
    category: 'T-Shirts',
    collection: 'Art Collection',
    description: 'Unique graphic print t-shirt with artistic design.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Black'],
    isFeatured: true
  },
  {
    id: 8,
    name: 'Leather Backpack',
    brandLogo: '/assets/images/default-featured.png',
    image: '/assets/images/default-featured.png',
    rating: 4.9,
    price: '$149.99',
    availability: 'Available in all stores',
    category: 'Accessories',
    collection: 'Premium Collection',
    description: 'Handcrafted genuine leather backpack with multiple compartments.',
    sizes: ['One Size'],
    colors: ['Brown', 'Black'],
    isFeatured: true,
    isBestSeller: true
  },
  {
    id: 9,
    name: 'Wool Beanie',
    brandLogo: '/assets/images/default-featured.png',
    image: '/assets/images/default-featured.png',
    rating: 4.2,
    price: '$29.99',
    availability: 'Available online only',
    category: 'Accessories',
    collection: 'Winter Collection',
    description: 'Warm and stylish wool beanie for cold weather.',
    sizes: ['One Size'],
    colors: ['Gray', 'Black', 'Navy'],
    isFeatured: true
  },
  {
    id: 10,
    name: 'Cargo Pants',
    brandLogo: '/assets/images/default-featured.png',
    image: '/assets/images/default-featured.png',
    rating: 4.5,
    price: '$69.99',
    availability: 'Available in all stores',
    category: 'Pants',
    collection: 'Urban Collection',
    description: 'Functional cargo pants with multiple pockets.',
    sizes: ['28', '30', '32', '34', '36'],
    colors: ['Khaki', 'Black', 'Olive'],
    isFeatured: true
  },
  {
    id: 11,
    name: 'Summer Shorts',
    brandLogo: '/assets/images/default-featured.png',
    image: '/assets/images/default-featured.png',
    rating: 4.1,
    price: '$39.99',
    availability: 'Available online only',
    category: 'Shorts',
    collection: 'Summer Collection',
    description: 'Lightweight and comfortable summer shorts.',
    sizes: ['28', '30', '32', '34'],
    colors: ['Blue', 'White', 'Black'],
    isNewArrival: true
  },
  {
    id: 12,
    name: 'Formal Shirt',
    brandLogo: '/assets/images/default-featured.png',
    image: '/assets/images/default-featured.png',
    rating: 4.4,
    price: '$89.99',
    availability: 'Available in all stores',
    category: 'Shirts',
    collection: 'Formal Collection',
    description: 'Classic formal shirt for professional settings.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Blue', 'Black'],
    isBestSeller: true
  },
  {
    id: 13,
    name: 'Running Shoes',
    brandLogo: '/assets/images/default-featured.png',
    image: '/assets/images/default-featured.png',
    rating: 4.6,
    price: '$129.99',
    availability: 'Available online only',
    category: 'Footwear',
    collection: 'Sports Collection',
    description: 'High-performance running shoes with advanced cushioning.',
    sizes: ['7', '8', '9', '10', '11'],
    colors: ['Red', 'Black', 'White']
  },
  {
    id: 14,
    name: 'Knit Sweater',
    brandLogo: '/assets/images/default-featured.png',
    image: '/assets/images/default-featured.png',
    rating: 4.3,
    price: '$79.99',
    availability: 'Available in all stores',
    category: 'Sweaters',
    collection: 'Winter Collection',
    description: 'Cozy knit sweater for cold weather.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Gray', 'Navy', 'Burgundy']
  },
  {
    id: 15,
    name: 'Leather Belt',
    brandLogo: '/assets/images/default-featured.png',
    image: '/assets/images/default-featured.png',
    rating: 4.7,
    price: '$49.99',
    availability: 'Available online only',
    category: 'Accessories',
    collection: 'Premium Collection',
    description: 'Genuine leather belt with classic buckle.',
    sizes: ['S', 'M', 'L'],
    colors: ['Brown', 'Black']
  },
  {
    id: 16,
    name: 'Track Pants',
    brandLogo: '/assets/images/default-featured.png',
    image: '/assets/images/default-featured.png',
    rating: 4.2,
    price: '$59.99',
    availability: 'Available in all stores',
    category: 'Pants',
    collection: 'Sports Collection',
    description: 'Comfortable track pants for casual wear.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Gray', 'Black', 'Navy']
  },
  {
    id: 17,
    name: 'Polo Shirt',
    brandLogo: '/assets/images/default-featured.png',
    image: '/assets/images/default-featured.png',
    rating: 4.5,
    price: '$45.99',
    availability: 'Available online only',
    category: 'Shirts',
    collection: 'Casual Collection',
    description: 'Classic polo shirt for casual occasions.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Blue', 'White', 'Black']
  },
  {
    id: 18,
    name: 'Winter Gloves',
    brandLogo: '/assets/images/default-featured.png',
    image: '/assets/images/default-featured.png',
    rating: 4.4,
    price: '$34.99',
    availability: 'Available in all stores',
    category: 'Accessories',
    collection: 'Winter Collection',
    description: 'Warm and waterproof winter gloves.',
    sizes: ['S', 'M', 'L'],
    colors: ['Black', 'Gray']
  },
  {
    id: 19,
    name: 'Swim Shorts',
    brandLogo: '/assets/images/default-featured.png',
    image: '/assets/images/default-featured.png',
    rating: 4.1,
    price: '$29.99',
    availability: 'Available online only',
    category: 'Swimwear',
    collection: 'Summer Collection',
    description: 'Quick-dry swim shorts for beach and pool.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Blue', 'Red', 'Black']
  },
  {
    id: 20,
    name: 'Baseball Cap',
    brandLogo: '/assets/images/default-featured.png',
    image: '/assets/images/default-featured.png',
    rating: 4.3,
    price: '$24.99',
    availability: 'Available in all stores',
    category: 'Accessories',
    collection: 'Street Style',
    description: 'Classic baseball cap with adjustable strap.',
    sizes: ['One Size'],
    colors: ['Black', 'Navy', 'Red']
  }
];

// Helper functions to get products by different criteria
export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.isFeatured);
};

export const getNewArrivals = (): Product[] => {
  return products.filter(product => product.isNewArrival);
};

export const getBestSellers = (): Product[] => {
  return products.filter(product => product.isBestSeller);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductsByCollection = (collection: string): Product[] => {
  return products.filter(product => product.collection === collection);
}; 