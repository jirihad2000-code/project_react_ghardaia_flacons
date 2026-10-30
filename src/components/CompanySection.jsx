import React, { useState } from 'react';



export default function CompanySection() {
  const images = [
    '/assets/entreprise/6.jpg',
    '/assets/entreprise/7.jpg',
    '/assets/entreprise/8.jpg',
    '/assets/entreprise/9.jpg',
    '/assets/entreprise/10.jpg',
    '/assets/entreprise/11.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="section enterprise" id="entreprise">
      <div className="container intro-grid">
        <div className="intro-text">
          <span className="eyebrow">NOTRE ENTREPRISE</span>
          <h2>SARL GHARDAIA FLACONS</h2>
          <p>
            Est une société à responsabilité limitée crée le 29 Décembre 2002 par son fondateur M. MOUSSELMAL Youb
            spécialisée dans le soufflage des flacons en PET, et l'Injection des préformes, bouchons et autres articles
            ainsi que l'importation de matériels dans le domaine de la transformation, conditionnement et emballage du plastique.
          </p>
        </div>
        <div className="carousel-container" id="carousel-cosmetique">
          <button className="nav-arrow left" onClick={prevSlide}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <div className="carousel-track">
            {images.map((img, idx) => (
              <div
                key={idx}
                className={`card ${idx === currentIndex ? 'center' : 'hidden'}`}
                style={{ display: idx === currentIndex ? 'block' : 'none' }}
              >
                <img src={import.meta.env.BASE_URL +img} alt={`entreprise ${idx + 1}`} />
              </div>
            ))}
          </div>
          <button className="nav-arrow right" onClick={nextSlide}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
          <div className="dots-container">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`dot ${idx === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}