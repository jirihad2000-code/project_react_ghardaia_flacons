import React, { useState, useEffect } from 'react';

function CategoryCard({ title, images }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="category-card">
      <div className="slider-container">
        <div className="slider-track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {images.map((img, i) => (
            <img key={i} src={import.meta.env.BASE_URL +img} alt={`${title} ${i + 1}`} />
          ))}
        </div>
        <div className="dots-container">
          {images.map((_, i) => (
            <span key={i} className={`dot ${i === index ? 'active' : ''}`} onClick={() => setIndex(i)}></span>
          ))}
        </div>
      </div>
      <h2 className="category-title">{title}</h2>
    </div>
  );
}

export default function CategoriesSection() {
  const categories = [
    { title: 'Cosmétique', images: ['/assets/image/12.jpg', '/assets/image/13.jpg', '/assets/image/14.jpg'] },
    { title: 'Pharmaceutique', images: ['/assets/image/15.jpg', '/assets/image/16.jpg', '/assets/image/17.jpg'] },
    { title: 'Agro-alimentaire', images: ['/assets/image/18.jpg', '/assets/image/16.jpg', '/assets/image/10.jpg'] },
    { title: 'Boissons', images: ['/assets/image/12.jpg', '/assets/image/13.jpg', '/assets/image/14.jpg'] },
    { title: 'Détergents', images: ['/assets/image/23.jpg', '/assets/image/24.jpg', '/assets/image/26.jpg'] },
  ];

  return (
    <section className="section categories" id="categories">
      <div className="container">
        <h2 className="main-title">Application</h2>
        <div className="categories-grid">
          {categories.map((cat, idx) => (
            <CategoryCard key={idx} title={cat.title} images={cat.images} />
          ))}
        </div>
      </div>
    </section>
  );
}