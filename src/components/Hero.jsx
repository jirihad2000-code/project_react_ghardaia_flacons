import React, { useEffect } from 'react';

export default function Hero() {
  useEffect(() => {
    const pc = document.getElementById('particles');
    if (pc && pc.children.length === 0) {
      for (let i = 0; i < 25; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.cssText =
          'left:' + (Math.random() * 100) + '%;top:' + (Math.random() * 100) + '%;' +
          'width:' + (Math.random() * 6 + 2) + 'px;height:' + (Math.random() * 6 + 2) + 'px;' +
          'animation-duration:' + (Math.random() * 10 + 6) + 's;' +
          'animation-delay:' + (Math.random() * 5) + 's;' +
          'opacity:' + (Math.random() * 0.4 + 0.1) + ';';
        pc.appendChild(p);
      }
    }
  }, []);

  return (
    <section className="hero" id="accueil">
      <div className="hero-particles" id="particles"></div>
      <div className="container hero-grid">
        <div className="hero-card">
          <h1 className="txt-main">
            Production d'articles en PET<br />
            <span className="eyebrow">& solutions pour vos besoins.</span>
          </h1>
          <p>
            Soufflage des flacons en PET, et l'Injection des préformes. Découvrez notre produits et demandez un devis selon vos besoins.
          </p>
          <div className="buttons">
            <a className="btn primary" href="#produits">
              <i className="fa-solid fa-chevron-right"></i> Découvrir nos produits
            </a>
            <a className="btn secondary" href="#contact">
              <i className="fa-brands fa-telegram feature-icon"></i> Demander un devis
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/assets/image/51.jpg" alt="SARL Ghardaia Flacons" className="hero-logo" />
        </div>
      </div>
    </section>
  );
}