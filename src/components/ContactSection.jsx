import React from 'react';

export default function ContactSection() {
  return (
    <section className="section contact" id="contact">
      <div className="container contact-grid">
        <div>
          <span className="eyebrow">CONTACT</span>
          <p>
            Un besoin spécifique, une commande ou une demande de devis ? Contactez-nous directement, notre équipe est à votre écoute.
          </p>
          <div className="contact-items">
            <div>
              <strong><i className="fa-solid fa-phone"></i> Téléphone</strong>
              <a href="tel:+213555057722"><span>+213 555 05 77 22</span></a>
              <a href="tel:+213555057723"><span>+213 555 05 77 23</span></a>
            </div>
            <div>
              <strong><i className="fa-regular fa-envelope"></i> Email</strong>
              <a href="mailto:sarlghardaiaflacons16@yahoo.fr"><span>sarlghardaiaflacons16@yahoo.fr</span></a>
              <a href="mailto:mousselmal@yahoo.fr"><span>mousselmal@yahoo.fr</span></a>
            </div>
            <a href="https://maps.app.goo.gl/YLTzKMHWcd4EFDhXA" target="_blank" rel="noreferrer">
              <strong><i className="fa-solid fa-location-dot"></i> Showroom</strong>
              <span>Lot N° 135, ZI, Oued Smar - Alger, Algérie</span>
            </a>
            <a href="https://maps.app.goo.gl/rvr1vYCUCsZ7KywCA" target="_blank" rel="noreferrer">
              <strong><i className="fa-solid fa-location-dot"></i> Siège social et usine</strong>
              <span>BP.79, Z.I Bounoua - Ghardaïa, Algérie</span>
            </a>
            
          </div>
        </div>

        <form id="quoteForm" className="quote-form" action="https://formsubmit.co/jiri.had2000@gmail.com" method="POST">
          <h3>contactez-nous</h3>
          <label className="form-label">
            Nom /Entreprise
            <input type="text" name="name" required placeholder="Votre nom ou entreprise" autoComplete="username" />
          </label>
          <label>
            Téléphone
            <input type="tel" name="phone" required placeholder="Votre numéro" autoComplete="tel" />
          </label>
          <label>
            E-mail
            <input type="email" name="mail" required placeholder="Votre adresse mail" autoComplete="email" />
          </label>
          <label>
            Sujet
            <input type="text" name="sujet" required placeholder="Votre sujet" autoComplete="off" />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" required placeholder="Votre message..." autoComplete="off"></textarea>
          </label>
          <button className="btn-sub" type="submit">
            <i className="fa-solid fa-paper-plane"></i> Envoyer
          </button>
        </form>
      </div>
    </section>
  );
}