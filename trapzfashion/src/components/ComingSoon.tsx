import React from 'react';
import { Link } from 'react-router-dom';
import './ComingSoon.css';

interface ComingSoonProps {
  title: string;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ title }) => {
  return (
    <div className="coming-soon-container">
      <h1>{title}</h1>
      <div className="coming-soon-content">
        <h2>Coming Soon</h2>
        <p>We're working hard to bring you something amazing!</p>
        <Link to="/" className="back-home">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon; 