import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Collections from './components/Collections';
import FeaturedProducts from './components/FeaturedProducts';
import ShopByCategory from './components/ShopByCategory';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import ComingSoon from './components/ComingSoon';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <ShopByCategory />
                <Collections />
                <FeaturedProducts />
              </>
            } />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<ComingSoon title="Profile" />} />
            <Route path="/best-seller" element={<ComingSoon title="Best Seller" />} />
            <Route path="/just-landed" element={<ComingSoon title="Just Landed" />} />
            <Route path="/categories" element={<ComingSoon title="Categories" />} />
            <Route path="/collections" element={<ComingSoon title="Collections" />} />
            <Route path="/favourites" element={<ComingSoon title="Favourites" />} />
            <Route path="/career" element={<ComingSoon title="Career" />} />
            <Route path="/about" element={<ComingSoon title="About Us" />} />
            <Route path="/help" element={<ComingSoon title="Help & Support" />} />
            <Route path="/account" element={<ComingSoon title="Account" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
