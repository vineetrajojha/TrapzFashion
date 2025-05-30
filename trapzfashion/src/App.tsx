import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Collections from './components/Collections';
import FeaturedProducts from './components/FeaturedProducts';
import ShopByCategory from './components/ShopByCategory';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      < ShopByCategory />
      < Collections />
      < FeaturedProducts />
      <Footer />
    </div>
  );
}

export default App;
