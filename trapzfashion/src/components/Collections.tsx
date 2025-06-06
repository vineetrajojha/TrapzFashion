import React from 'react';
import './Collections.css';
import tshirt from '../assets/Tshirts/Bring your Childhood/Mario/Mario.png'
import hoodie from '../assets/Tshirts/Other Designs/Spiderman/7.png'
import third from '../assets/Tshirts/Bring your Childhood/Temple Run/MAin.png'

const collections = [
  {
    title: `Super Mario`,
    subtitle: 'The Real OGs',
    image: tshirt,
    link: '/collections/knit-af',
  },
  {
    title: 'Spiderman',
    subtitle: 'Choose your own superhero',
    image: hoodie,
    link: '/collections/denim-hues',
  },
  {
    title: 'Temple Run',
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
            <a href={col.link} className="collection-image-link" style={{ backgroundImage: `url(${col.image})` }}>
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