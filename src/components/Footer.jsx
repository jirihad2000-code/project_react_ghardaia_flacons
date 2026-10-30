import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a className="brand" href="#accueil" aria-label="SARL Ghardaia Flacons">
            <img src={import.meta.env.BASE_URL +"assets/image/logo.png"} alt="Logo SARL Ghardaia Flacons" />
          </a>
          <strong>GO FAR WITH US</strong>
          <p>
            Chez GHARDAIA FLACONS, nous spécialisons dans le soufflage des flacons en PET, et l'injection des préforme, et l'importation de matériels. bienvenue chez nous.
          </p>
          <div className="social-icons">
            <a href="https://www.facebook.com/ghardaiaflacons" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/ghardaiaflacons/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://www.linkedin.com/company/sarl-ghardaia-flacons/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="https://wa.me/213555057722" target="_blank" rel="noreferrer"><i className="fa-brands fa-whatsapp"></i></a>
          </div>
        </div>
        <div className="footer-links-grid">
          <div className="footer-column">
            <h4 className="footer-title">Informations</h4>
            <ul className="men">
              <li><a href="#accueil"><span className="arrow-icon">›</span>Accueil</a></li>
              <li><a href="#entreprise"><span className="arrow-icon">›</span>Notre entreprise</a></li>
              <li><a href="#categories"><span className="arrow-icon">›</span>Catégories</a></li>
              <li><a href="#produits"><span className="arrow-icon">›</span>Produits</a></li>
              <li><a href="#qualite"><span className="arrow-icon">›</span>Qualité</a></li>
              <li><a href="#contact"><span className="arrow-icon">›</span>Contact</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="footer-title">Contact</h4>
            <a href="tel:+213555057722">
              <strong><i className="fa-solid fa-phone"></i> +213 555 05 77 22</strong>
            </a>
            <a href="tel:+213555057723">
              <strong><i className="fa-solid fa-phone"></i> +213 555 05 77 23</strong>
            </a>
            <a href="mailto:sarlghardaiaflacons16@yahoo.fr">
              <strong><i className="fa-brands fa-yahoo"></i> sarlghardaiaflacons16@yahoo.fr</strong>
            </a>
            <a href="mailto:mousselmal@yahoo.fr">
              <strong><i className="fa-brands fa-yahoo"></i> mousselmal@yahoo.fr</strong>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          © 2026 SARL Ghardaia Flacons — Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}