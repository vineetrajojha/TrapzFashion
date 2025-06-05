import React from 'react';
import './Footer.css';
import { FiInstagram, FiTwitter, FiMail, FiPhone } from 'react-icons/fi';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Trap Fashion is your destination for trendy and affordable fashion. We bring you the latest styles and collections.</p>
          <ul className="footer-contact">
            <li><span style={{ display: 'inline-flex', alignItems: 'center', marginRight: 6 }}>{React.createElement(FiMail as any, { size: 16 })}</span> <a href="mailto:support@trapfashion.com">support@trapfashion.com</a></li>
            <li><span style={{ display: 'inline-flex', alignItems: 'center', marginRight: 6 }}>{React.createElement(FiPhone as any, { size: 16 })}</span> <a href="tel:+1234567890">+1 234 567 890</a></li>
          </ul>
          <div className="social-links">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">{React.createElement(FiInstagram as any, { size: 20 })}</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">{React.createElement(FiTwitter as any, { size: 20 })}</a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/collections">Collections</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Customer Service</h3>
          <ul>
            <li><a href="/shipping">Shipping Policy</a></li>
            <li><a href="/returns">Returns & Exchanges</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/size-guide">Size Guide</a></li>
            <li><a href="/track-order">Track Order</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Newsletter</h3>
          <p>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {new Date().getFullYear()} Trap Fashion. All rights reserved.</p>
          <div className="payment-methods">
            <i className="fab fa-cc-visa"></i>
            <i className="fab fa-cc-mastercard"></i>
            <i className="fab fa-cc-amex"></i>
            <i className="fab fa-cc-paypal"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
