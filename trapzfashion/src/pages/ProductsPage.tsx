import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getAllProducts } from '../data/products';
import { Product } from '../types';
import ProductCard from '../components/ProductCard';
import './ProductsPage.css';

const ProductsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>(getAllProducts());
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null);

  useEffect(() => {
    // Get filters from URL parameters
    const category = searchParams.get('category');
    const collection = searchParams.get('collection');

    // Update state with URL parameters
    setSelectedCategory(category);
    setSelectedCollection(collection);

    // Filter products based on URL parameters
    let filteredProducts = getAllProducts();
    
    if (category) {
      filteredProducts = filteredProducts.filter((product: Product) => 
        product.category.toLowerCase() === category.toLowerCase()
      );
    }
    
    if (collection) {
      filteredProducts = filteredProducts.filter((product: Product) => 
        product.collection?.toLowerCase() === collection.toLowerCase()
      );
    }

    setProducts(filteredProducts);
  }, [searchParams]);

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    let filteredProducts = getAllProducts();
    
    if (category) {
      filteredProducts = filteredProducts.filter((product: Product) => 
        product.category.toLowerCase() === category.toLowerCase()
      );
    }
    
    if (selectedCollection) {
      filteredProducts = filteredProducts.filter((product: Product) => 
        product.collection?.toLowerCase() === selectedCollection.toLowerCase()
      );
    }

    setProducts(filteredProducts);
  };

  const handleCollectionChange = (collection: string | null) => {
    setSelectedCollection(collection);
    let filteredProducts = getAllProducts();
    
    if (selectedCategory) {
      filteredProducts = filteredProducts.filter((product: Product) => 
        product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }
    
    if (collection) {
      filteredProducts = filteredProducts.filter((product: Product) => 
        product.collection?.toLowerCase() === collection.toLowerCase()
      );
    }

    setProducts(filteredProducts);
  };

  const categories = ['men', 'women', 'kids', 'accessories'];
  const collections = ['summer', 'winter', 'casual', 'formal'];

  return (
    <div className="products-page">
      <div className="filters-section">
        <div className="filter-group">
          <h3>Categories</h3>
          <div className="filter-options">
            <button
              className={`filter-button ${!selectedCategory ? 'active' : ''}`}
              onClick={() => handleCategoryChange(null)}
            >
              All
            </button>
            {categories.map(category => (
              <button
                key={category}
                className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => handleCategoryChange(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-group">
          <h3>Collections</h3>
          <div className="filter-options">
            <button
              className={`filter-button ${!selectedCollection ? 'active' : ''}`}
              onClick={() => handleCollectionChange(null)}
            >
              All
            </button>
            {collections.map(collection => (
              <button
                key={collection}
                className={`filter-button ${selectedCollection === collection ? 'active' : ''}`}
                onClick={() => handleCollectionChange(collection)}
              >
                {collection.charAt(0).toUpperCase() + collection.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="products-grid">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {products.length === 0 && (
        <div className="no-products">
          <h2>No products found</h2>
          <p>Try adjusting your filters to find what you're looking for.</p>
        </div>
      )}
    </div>
  );
};

export default ProductsPage; 