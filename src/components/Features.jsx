import React from 'react';

export default function Features() {
  return (
    <section className="hero-points">
      <div className="feature-item">
        <i className="fa-solid fa-shield feature-icon"></i>
        <div className="text">
          <h3 className="feature-title">Qualité controlee</h3>
          <p className="feature-desc">Fiabilite & performance.</p>
        </div>
      </div>
      <div className="feature-item">
        <i className="fa-solid fa-industry feature-icon"></i>
        <div className="text">
          <h3 className="feature-title">production locale</h3>
          <p className="feature-desc">En Algérie, a Ghardaia</p>
        </div>
      </div>
      <div className="feature-item">
        <i className="fa-solid fa-gear feature-icon"></i>
        <div className="text">
          <h3 className="feature-title">formats personnalisables</h3>
          <p className="feature-desc">selon vos besoins.</p>
        </div>
      </div>
    </section>
  );
}