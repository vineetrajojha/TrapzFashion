import React from 'react';
import './Collections.css';

const collections = [
  {
    title: `IT'S KNIT AF`,
    subtitle: 'Limited Edition · Autumn Winter Collection',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80',
    link: '/collections/knit-af',
  },
  {
    title: 'DENIM HUES',
    subtitle: 'DARE TO DENIM',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
    link: '/collections/denim-hues',
  },
  {
    title: 'SUMMER ENDS',
    subtitle: 'New Collection Just Dropped',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80',
    link: '/collections/summer-ends',
  },
  {
    title: 'FESTIVAL FLAIR',
    subtitle: 'Celebrate in Style',
    image: 'https://images.unsplash.com/photo-1469398715555-76331a6c7c9b?auto=format&fit=crop&w=900&q=80',
    link: '/collections/festival-flair',
  },
  {
    title: 'MERCH MADNESS',
    subtitle: 'Exclusive Merchandise Drop',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80',
    link: '/collections/merch-madness',
  },
];

const Collections: React.FC = () => {
  const topRow = collections.slice(0, 3);
  const bottomRow = collections.slice(3);

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
      <div className="collections-bottom-row">
        {bottomRow.map((col) => (
          <div className="collection-poster small" key={col.title}>
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