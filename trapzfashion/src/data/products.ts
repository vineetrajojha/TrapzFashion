import mario from '../assets/Tshirts/Bring your Childhood/Mario/Mario.png'
import { Product } from '../types';

export interface SizeChart {
  size: string;
  chest: string;
  length: string;
  shoulder: string;
  sleeve: string;
}

export interface DeliveryInfo {
  standardDelivery: string;
  expressDelivery: string;
  pincodeDelivery: boolean;
}

export interface KeyHighlights {
  design?: string;
  fit?: string;
  neck?: string;
  occasion?: string;
  sleeveStyle?: string;
  washCare?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Mario T-Shirt',
    brandLogo: mario,
    images: [
      mario,
      '/assets/Tshirts/Bring your Childhood/Mario/Mario-back.png',
      '/assets/Tshirts/Bring your Childhood/Mario/Mario-detail.png',
      '/assets/Tshirts/Bring your Childhood/Mario/Mario-wear.png'
    ],
    price: '599 Rs.',
    availability: 'In Stock',
    category: 'T-Shirts',
    collection: 'Bring your Childhood',
    description: 'A nostalgic Mario-themed t-shirt that brings back childhood memories.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    isFeatured: true,
    isNewArrival: true,
    keyHighlights: {
      design: 'Graphic Print',
      fit: 'Regular Fit',
      neck: 'Round Neck',
      occasion: 'Casual Wear',
      sleeveStyle: 'Half Sleeve',
      washCare: 'Gentle Machine Wash'
    },
    fullDescription: 'Relive your childhood memories with this officially licensed Mario-themed t-shirt. Made from 100% premium cotton, this comfortable t-shirt features vibrant graphics of the iconic Nintendo character. The regular fit ensures comfort while maintaining style, making it perfect for casual outings or gaming sessions.',
    manufactureAndCare: 'Made from 100% premium cotton. Machine wash cold, tumble dry low. Do not bleach. Iron on reverse side if needed.',
    returnPolicy: '15 Days Returns & Exchange available. Items must be unworn, unwashed, and with original tags attached.',
    deliveryInfo: {
      standardDelivery: '3-5 business days',
      expressDelivery: '1-2 business days',
      pincodeDelivery: true
    },
    youMayAlsoLike: [2, 7, 11]
  },
  {
    id: 2,
    name: 'CSK T-Shirt',
    brandLogo: '/assets/images/default-featured.png',
    images: ['/assets/images/default-featured.png'],
    price: '$59.99',
    availability: 'Available online only',
    category: 'T-Shirts',
    collection: 'Sports',
    description: 'Official CSK team t-shirt with team colors and logo.',
    sizes: ['S', 'M', 'L', 'XL'],
    isFeatured: true,
    keyHighlights: {
      design: 'Official Team Merchandise',
      fit: '100% Cotton',
      neck: 'Round Neck',
      occasion: 'Casual Wear',
      sleeveStyle: 'Half Sleeve',
      washCare: 'Machine Washable'
    },
    fullDescription: 'Show your support for Chennai Super Kings with this official team t-shirt. Features the team logo and colors, made from high-quality cotton for comfort and durability.',
    manufactureAndCare: 'Machine wash cold. Tumble dry low. Do not bleach.',
    returnPolicy: '30 days return policy. Items must be unworn and in original condition with tags attached.',
    deliveryInfo: {
      standardDelivery: '3-5 business days',
      expressDelivery: '1-2 business days',
      pincodeDelivery: true
    },
    youMayAlsoLike: [1, 7, 12]
  },
  {
    id: 3,
    name: 'Vintage Denim Jacket',
    brandLogo: '/assets/images/default-featured.png',
    images: ['/assets/images/default-featured.png'],
    price: '$129.99',
    availability: 'Available in all stores',
    category: 'Jackets',
    collection: 'Vintage Collection',
    description: 'Classic denim jacket with a modern twist, perfect for any casual occasion.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    isFeatured: true,
    isBestSeller: true,
    keyHighlights: {
      design: 'Classic Denim',
      fit: 'Regular Fit',
      neck: 'Collar',
      occasion: 'Casual Wear',
      sleeveStyle: 'Full Sleeve',
      washCare: 'Machine Washable'
    },
    fullDescription: 'A timeless denim jacket that combines classic style with modern comfort. Perfect for layering in any season, this jacket features a regular fit and premium denim construction.',
    manufactureAndCare: 'Machine wash cold. Tumble dry low. Do not bleach.',
    returnPolicy: '30 days return policy. Items must be unworn and in original condition with tags attached.',
    deliveryInfo: {
      standardDelivery: '2-4 business days',
      expressDelivery: '1-2 business days',
      pincodeDelivery: true
    },
    youMayAlsoLike: [4, 8, 12]
  },
  {
    id: 4,
    name: 'Premium Hoodie',
    brandLogo: '/assets/images/default-featured.png',
    images: ['/assets/images/default-featured.png'],
    price: '$79.99',
    availability: 'Available in all stores',
    category: 'Hoodies',
    collection: 'Winter Collection',
    description: 'Comfortable and stylish hoodie made from premium materials.',
    sizes: ['S', 'M', 'L', 'XL'],
    isFeatured: true
  },
  {
    id: 5,
    name: 'Slim Fit Jeans',
    brandLogo: '/assets/images/default-featured.png',
    images: ['/assets/images/default-featured.png'],
    price: '$89.99',
    availability: 'Available online only',
    category: 'Jeans',
    collection: 'Essential Collection',
    description: 'Modern slim fit jeans with stretch comfort technology.',
    sizes: ['28', '30', '32', '34', '36'],
    isFeatured: true
  },
  {
    id: 6,
    name: 'Casual Sneakers',
    brandLogo: '/assets/images/default-featured.png',
    images: ['/assets/images/default-featured.png'],
    price: '$119.99',
    availability: 'Available in all stores',
    category: 'Footwear',
    collection: 'Street Style',
    description: 'Versatile sneakers perfect for everyday wear.',
    sizes: ['7', '8', '9', '10', '11'],
    isFeatured: true,
    isNewArrival: true
  },
  {
    id: 7,
    name: 'Graphic Print T-Shirt',
    brandLogo: '/assets/images/default-featured.png',
    images: ['/assets/images/default-featured.png'],
    price: '$49.99',
    availability: 'Available online only',
    category: 'T-Shirts',
    collection: 'Art Collection',
    description: 'Unique graphic print t-shirt with artistic design.',
    sizes: ['S', 'M', 'L', 'XL'],
    isFeatured: true
  },
  {
    id: 8,
    name: 'Leather Backpack',
    brandLogo: '/assets/images/default-featured.png',
    images: ['/assets/images/default-featured.png'],
    price: '$149.99',
    availability: 'Available in all stores',
    category: 'Accessories',
    collection: 'Premium Collection',
    description: 'Handcrafted genuine leather backpack with multiple compartments.',
    sizes: ['One Size'],
    isFeatured: true,
    isBestSeller: true
  },
  {
    id: 9,
    name: 'Wool Beanie',
    brandLogo: '/assets/images/default-featured.png',
    images: ['/assets/images/default-featured.png'],
    price: '$29.99',
    availability: 'Available online only',
    category: 'Accessories',
    collection: 'Winter Collection',
    description: 'Warm and stylish wool beanie for cold weather.',
    sizes: ['One Size'],
    isFeatured: true
  },
  {
    id: 10,
    name: 'Cargo Pants',
    brandLogo: '/assets/images/default-featured.png',
    images: ['/assets/images/default-featured.png'],
    price: '$69.99',
    availability: 'Available in all stores',
    category: 'Pants',
    collection: 'Urban Collection',
    description: 'Functional cargo pants with multiple pockets.',
    sizes: ['28', '30', '32', '34', '36'],
    isFeatured: true
  },
  {
    id: 11,
    name: 'Summer Shorts',
    brandLogo: '/assets/images/default-featured.png',
    images: ['/assets/images/default-featured.png'],
    price: '$39.99',
    availability: 'Available online only',
    category: 'Shorts',
    collection: 'Summer Collection',
    description: 'Lightweight and comfortable summer shorts.',
    sizes: ['28', '30', '32', '34'],
    isNewArrival: true
  },
  {
    id: 12,
    name: 'Formal Shirt',
    brandLogo: '/assets/images/default-featured.png',
    images: ['/assets/images/default-featured.png'],
    price: '$89.99',
    availability: 'Available in all stores',
    category: 'Shirts',
    collection: 'Formal Collection',
    description: 'Classic formal shirt for professional settings.',
    sizes: ['S', 'M', 'L', 'XL'],
    isBestSeller: true
  },
  {
    id: 13,
    name: 'Running Shoes',
    brandLogo: '/assets/images/default-featured.png',
    images: ['/assets/images/default-featured.png'],
    price: '$129.99',
    availability: 'Available online only',
    category: 'Footwear',
    collection: 'Sports Collection',
    description: 'High-performance running shoes with advanced cushioning.',
    sizes: ['7', '8', '9', '10', '11']
  },
  {
    id: 14,
    name: 'Knit Sweater',
    brandLogo: '/assets/images/default-featured.png',
    images: ['/assets/images/default-featured.png'],
    price: '$79.99',
    availability: 'Available in all stores',
    category: 'Sweaters',
    collection: 'Winter Collection',
    description: 'Cozy knit sweater for cold weather.',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 15,
    name: 'Leather Belt',
    brandLogo: '/assets/images/default-featured.png',
    images: ['/assets/images/default-featured.png'],
    price: '$49.99',
    availability: 'Available online only',
    category: 'Accessories',
    collection: 'Premium Collection',
    description: 'Genuine leather belt with classic buckle.',
    sizes: ['S', 'M', 'L']
  },
  {
    id: 16,
    name: 'Track Pants',
    brandLogo: '/assets/images/default-featured.png',
    images: ['/assets/images/default-featured.png'],
    price: '$59.99',
    availability: 'Available in all stores',
    category: 'Pants',
    collection: 'Sports Collection',
    description: 'Comfortable track pants for casual wear.',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 17,
    name: 'Polo Shirt',
    brandLogo: '/assets/images/default-featured.png',
    images: ['/assets/images/default-featured.png'],
    price: '$45.99',
    availability: 'Available online only',
    category: 'Shirts',
    collection: 'Casual Collection',
    description: 'Classic polo shirt for casual occasions.',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 18,
    name: 'Winter Gloves',
    brandLogo: '/assets/images/default-featured.png',
    images: ['/assets/images/default-featured.png'],
    price: '$34.99',
    availability: 'Available in all stores',
    category: 'Accessories',
    collection: 'Winter Collection',
    description: 'Warm and waterproof winter gloves.',
    sizes: ['S', 'M', 'L']
  },
  {
    id: 19,
    name: 'Swim Shorts',
    brandLogo: '/assets/images/default-featured.png',
    images: ['/assets/images/default-featured.png'],
    price: '$29.99',
    availability: 'Available online only',
    category: 'Swimwear',
    collection: 'Summer Collection',
    description: 'Quick-dry swim shorts for beach and pool.',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 20,
    name: 'Baseball Cap',
    brandLogo: '/assets/images/default-featured.png',
    images: ['/assets/images/default-featured.png'],
    price: '$24.99',
    availability: 'Available in all stores',
    category: 'Accessories',
    collection: 'Street Style',
    description: 'Classic baseball cap with adjustable strap.',
    sizes: ['One Size'],
    keyHighlights: {
      design: 'Adjustable Strap',
      fit: 'Classic Design',
      neck: 'One Size Fits Most',
      occasion: 'Casual Wear',
      sleeveStyle: 'N/A',
      washCare: 'UV Protection'
    },
    fullDescription: 'A timeless baseball cap featuring an adjustable strap for the perfect fit. The classic design makes it versatile for any casual outfit.',
    manufactureAndCare: 'Hand wash cold. Air dry. Do not bleach.',
    returnPolicy: '30 days return policy. Items must be unworn and in original condition with tags attached.',
    deliveryInfo: {
      standardDelivery: '2-4 business days',
      expressDelivery: '1-2 business days',
      pincodeDelivery: true
    },
    youMayAlsoLike: [8, 9, 15]
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
  return products.filter(product => 
    product.category.toLowerCase() === category.toLowerCase()
  );
};

export const getProductsByCollection = (collection: string): Product[] => {
  return products.filter(product => 
    product.collection?.toLowerCase() === collection.toLowerCase()
  );
};

export const getSimilarProducts = (productId: number): Product[] => {
  const product = getProductById(productId);
  if (!product?.youMayAlsoLike) return [];
  return product.youMayAlsoLike.map(id => getProductById(id)).filter(Boolean) as Product[];
};

export const getAllProducts = (): Product[] => {
  return products;
}; 