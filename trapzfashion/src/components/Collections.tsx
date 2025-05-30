import React from 'react';
import './Collections.css';

const collections = [
  {
    title: `Support Your Favourite Team`,
    subtitle: 'Fan Merch Edition · IPL 2025',
    image: '',
    link: '/collections/knit-af',
  },
  {
    title: 'Hoodies House',
    subtitle: 'Limited Edition Hoodies',
    image: '',
    link: '/collections/denim-hues',
  },
  {
    title: 'Summer Ends',
    subtitle: 'New Collection Just Dropped',
    image: '',
    link: '/collections/summer-ends',
  },
  {
    title: 'FESTIVAL FLAIR',
    subtitle: 'Celebrate in Style',
    image: '',
    link: '/collections/festival-flair',
  },
  {
    title: 'MERCH MADNESS',
    subtitle: 'Exclusive Merchandise Drop',
    image: '',
    link: '/collections/merch-madness',
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