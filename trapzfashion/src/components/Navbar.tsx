import React, { useState } from 'react';
import './Navbar.css';
import {
  FiMenu, FiX, FiHome, FiUser, FiTrendingUp, FiStar, FiGrid, FiLayers, FiHeart, FiBriefcase, FiInfo, FiHelpCircle, FiUserCheck, FiInstagram, FiTwitter, FiSearch, FiShoppingCart, FiCircle,
  FiLogIn, FiUserPlus
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { IconBaseProps } from 'react-icons';
import logo from '../assets/images/logo.png';

// Define icon types
const MenuIcon = FiMenu as React.ComponentType<IconBaseProps>;
const XIcon = FiX as React.ComponentType<IconBaseProps>;
const HomeIcon = FiHome as React.ComponentType<IconBaseProps>;
const UserIcon = FiUser as React.ComponentType<IconBaseProps>;
const TrendingUpIcon = FiTrendingUp as React.ComponentType<IconBaseProps>;
const StarIcon = FiStar as React.ComponentType<IconBaseProps>;
const GridIcon = FiGrid as React.ComponentType<IconBaseProps>;
const LayersIcon = FiLayers as React.ComponentType<IconBaseProps>;
const HeartIcon = FiHeart as React.ComponentType<IconBaseProps>;
const BriefcaseIcon = FiBriefcase as React.ComponentType<IconBaseProps>;
const InfoIcon = FiInfo as React.ComponentType<IconBaseProps>;
const HelpCircleIcon = FiHelpCircle as React.ComponentType<IconBaseProps>;
const UserCheckIcon = FiUserCheck as React.ComponentType<IconBaseProps>;
const InstagramIcon = FiInstagram as React.ComponentType<IconBaseProps>;
const TwitterIcon = FiTwitter as React.ComponentType<IconBaseProps>;
const SearchIcon = FiSearch as React.ComponentType<IconBaseProps>;
const ShoppingCartIcon = FiShoppingCart as React.ComponentType<IconBaseProps>;
const CircleIcon = FiCircle as React.ComponentType<IconBaseProps>;
const LogInIcon = FiLogIn as React.ComponentType<IconBaseProps>;
const UserPlusIcon = FiUserPlus as React.ComponentType<IconBaseProps>;

const menuItems = [
  { label: 'Home', icon: HomeIcon, link: '/' },
  { label: 'Profile', icon: UserIcon, link: '/profile' },
  { label: 'Best Seller', icon: TrendingUpIcon, link: '/best-seller' },
  { label: 'Just Landed', icon: StarIcon, link: '/just-landed' },
  { label: 'Categories', icon: GridIcon, link: '/categories' },
  { label: 'Collections', icon: LayersIcon, link: '/collections' },
  { label: 'Favourites', icon: HeartIcon, link: '/favourites' },
  { label: 'Career', icon: BriefcaseIcon, link: '/career' },
  { label: 'About Us', icon: InfoIcon, link: '/about' },
  { label: 'Help & Support', icon: HelpCircleIcon, link: '/help' },
  { label: 'Account', icon: UserCheckIcon, link: '/login' },
];

const Navbar: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Hamburger/Close Button */}
        <button className="hamburger" onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <XIcon size={28} /> : <MenuIcon size={26} />}
        </button>

        {/* Sidebar */}
        <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}> 
          <ul className="sidebar-menu">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link to={item.link} onClick={() => setSidebarOpen(false)}>
                  <span className="sidebar-icon">
                    <item.icon size={22} />
                  </span>
                  <span className="sidebar-label">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="sidebar-social">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <InstagramIcon size={22} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <TwitterIcon size={22} />
            </a>
          </div>
        </div>
        {/* Overlay */}
        {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>}

        {/* Center Logo */}
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="Trap Fashion" className="logo-image" />
          </Link>
        </div>

        {/* Right Icons */}
        <div className="nav-icons">
          <a href="/search"><SearchIcon size={22} /></a>
          <a href="/favourites"><HeartIcon size={22} /></a>
          <a href="/cart"><ShoppingCartIcon size={22} /></a>
          <a href="/coins" aria-label="trapz coins"><CircleIcon size={22} /></a>
          <Link to="/login" className="icon-link">
            <UserIcon size={22} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
