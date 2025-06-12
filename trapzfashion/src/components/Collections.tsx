import React from 'react';
import './Collections.css';
import tshirt from '../assets/Tshirts/Bring your Childhood/Mario/Mario.png'
import hoodie from '../assets/Tshirts/Trap Themed/Trap Red Snake/BG.png'
import third from '../assets/Tshirts/Other Designs/Dream/main image.png'

const collections = [
  {
    title: `Bring Your Childhood`,
    subtitle: 'The Real OGs',
    image: tshirt,
    link: '/collections/knit-af',
  },
  {
    title: 'Trap Themed',
    subtitle: 'Choose your own superhero',
    image: hoodie,
    link: '/collections/denim-hues',
  },
  {
    title: 'Other Designs',
    subtitle: 'Your favourite Games collection',
    image: third,
    link: '/collections/summer-ends',
  },
];

const Collections: React.FC = () => {
  const topRow = collections.slice(0, 3);

  return (
    <section className="collections-section">
      <h1 className="collections-heading">Our Collections</h1>
      <div className="collections-top-row">
        {topRow.map((col) => (
          <div className="collection-poster big" key={col.title}>
            <a href={col.link} className="collection-image-link">
              <img 
                src={col.image} 
                alt={col.title}
                className="collection-image"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div className="collection-overlay">
                <div className="collection-text">
                  <h2 className="collection-title">{col.title}</h2>
                  <div className="collection-subtitle">{col.subtitle}</div>
                </div>
              </div>
            </a>
            <a href={col.link} className="collection-btn-below">VIEW COLLECTION</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collections; 