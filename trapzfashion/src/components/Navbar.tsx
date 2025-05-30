import React, { useState } from 'react';
import './Navbar.css';
import {
  FiMenu, FiX, FiHome, FiUser, FiTrendingUp, FiStar, FiGrid, FiLayers, FiHeart, FiBriefcase, FiInfo, FiHelpCircle, FiUserCheck, FiInstagram, FiTwitter, FiSearch, FiShoppingCart, FiCircle
} from 'react-icons/fi';

const menuItems = [
  { label: 'Home', icon: FiHome, link: '/' },
  { label: 'Profile', icon: FiUser, link: '/profile' },
  { label: 'Best Seller', icon: FiTrendingUp, link: '/best-seller' },
  { label: 'Just Landed', icon: FiStar, link: '/just-landed' },
  { label: 'Categories', icon: FiGrid, link: '/categories' },
  { label: 'Collections', icon: FiLayers, link: '/collections' },
  { label: 'Favourites', icon: FiHeart, link: '/favourites' },
  { label: 'Career', icon: FiBriefcase, link: '/career' },
  { label: 'About Us', icon: FiInfo, link: '/about' },
  { label: 'Help & Support', icon: FiHelpCircle, link: '/help' },
  { label: 'Account', icon: FiUserCheck, link: '/account' },
];

const Navbar: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Hamburger/Close Button */}
        <button className="hamburger" onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen
            ? React.createElement(FiX as any, { size: 28 })
            : React.createElement(FiMenu as any, { size: 26 })}
        </button>

        {/* Sidebar */}
        <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}> 
          <ul className="sidebar-menu">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a href={item.link} onClick={() => setSidebarOpen(false)}>
                  <span className="sidebar-icon">{React.createElement(item.icon as any, { size: 22 })}</span>
                  <span className="sidebar-label">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="sidebar-social">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">{React.createElement(FiInstagram as any, { size: 22 })}</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">{React.createElement(FiTwitter as any, { size: 22 })}</a>
          </div>
        </div>
        {/* Overlay */}
        {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>}

        {/* Center Logo */}
        <div className="navbar-logo">
          <h1>Trapz Fashion</h1>
        </div>

        {/* Right Icons */}
        <div className="nav-icons">
          <a href="/search">{React.createElement(FiSearch as any, { size: 22 })}</a>
          <a href="/favourites">{React.createElement(FiHeart as any, { size: 22 })}</a>
          <a href="/cart">{React.createElement(FiShoppingCart as any, { size: 22 })}</a>
          <a href="/coins" aria-label="trapz coins">{React.createElement(FiCircle as any, { size: 22 })}</a>
          <a href="/profile">{React.createElement(FiUser as any, { size: 22 })}</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
