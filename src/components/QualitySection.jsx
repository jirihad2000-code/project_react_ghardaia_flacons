import React from 'react';

export default function QualitySection() {
  return (
    <section className="section soft" id="qualite">
      <div className="container quality-grid">
        <div>
          <span className="eyebrow">POURQUOI NOUS CHOISIR</span>
          <h2>Une présentation claire pour les clients professionnels.</h2>
          <p>
            Le catalogue permet de présenter les références, les formats disponibles et de préparer une demande de devis sans obliger le client à chercher les informations dans plusieurs pages.
          </p>
        </div>
        <div className="quality-list">
          <div><b>01</b><span><strong>Catalogue structuré</strong>Produits regroupés par activité.</span></div>
          <div><b>02</b><span><strong>Fiches produits</strong>Format, usage et informations principales.</span></div>
          <div><b>03</b><span><strong>Panier de demande</strong>Le client sélectionne plusieurs références.</span></div>
          <div><b>04</b><span><strong>Devis via WhatsApp</strong>La demande est préparée automatiquement.</span></div>
        </div>
      </div>
    </section>
  );
}