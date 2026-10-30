import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const bouteilles = [
  { id: 1, image: 'assets/photos/23.png', name: 'FLACON EN VERRE AMBRÉ 50ml AVEC POMPE SPRAY', price: 100 },
  { id: 2, image: 'assets/photos/23.png', name: 'Flacons cosmétiques de 250ml à 400ml', price: 250 },
  { id: 3, image: 'assets/photos/B11.png', name: 'FLACON EN VERRE AMBRÉ 50ml AVEC POMPE SPRAY', price: 250 },
];

const bocals = [
  { id: 4, image: 'assets/photos/BOC03.png', name: 'BOCAL003 02 KG', price: 42 },
  { id: 5, image: 'assets/photos/BOC05.png', name: 'BOCAL005 01 KG', price: 250 },
  { id: 6, image: 'assets/photos/BOC08.png', name: 'BOCAL008 02 KG', price: 250 },
  { id: 7, image: 'assets/photos/BOC09.png', name: 'BOCAL009 03 KG', price: 250 },
];

const bouchons = [
  { id: 9, image: 'assets/photos/122.png', name: 'FLACON EN VERRE AMBRÉ 50ml AVEC POMPE SPRAY', price: 250 },
  { id: 10, image: 'assets/photos/134.png', name: 'FLACON EN VERRE AMBRÉ 50ml AVEC POMPE SPRAY', price: 250 },
  { id: 11, image: 'assets/photos/133.png', name: 'FLACON EN VERRE AMBRÉ 50ml AVEC POMPE SPRAY', price: 250 },
  { id: 12, image: 'assets/photos/143.png', name: 'FLACON EN VERRE AMBRÉ 50ml AVEC POMPE SPRAY', price: 250 },
];

const preformes = [
  { id: 13, image: 'assets/photos/B11.png', name: 'PRÉFORME PET 30g STANDARD', price: 250 },
  { id: 14, image: 'assets/photos/B11.png', name: 'PRÉFORME PET 38g LARGE', price: 250 },
  { id: 15, image: 'assets/photos/B11.png', name: 'PRÉFORME PET 48g CONIQUE', price: 250 },
  { id: 16, image: 'assets/photos/B11.png', name: 'PRÉFORME PET 52g SPECIAL', price: 250 },
];

const poignees = [
  { id: 17, image: 'assets/photos/108.jpeg', name: 'POIGNÉE PLASTIQUE POUR BIDON 5L', price: 250 },
  { id: 18, image: 'assets/photos/110.jpeg', name: 'POIGNÉE ERGONOMIQUE 2L - 3L', price: 250 },
  { id: 19, image: 'assets/photos/110.jpeg', name: 'POIGNÉE INDUSTRIELLE RENFORCÉE', price: 250 },
  { id: 20, image: 'assets/photos/108.jpeg', name: 'POIGNÉE CLIPABLE POUR FLACON', price: 250 },
];

export const animateProductToCart = (event) => {
    const button = event.currentTarget;

    // صورة المنتج داخل البطاقة
    const productCard = button.closest('.producte-card');
    const productImage = productCard?.querySelector('.product-image img');

    // أيقونة السلة الموجودة في Header.jsx
    const cartButton = document.querySelector('.cart-container .icon');

    if (!productImage || !cartButton) return;

    const imageRect = productImage.getBoundingClientRect();
    const cartRect = cartButton.getBoundingClientRect();

    // إنشاء نسخة مؤقتة من صورة المنتج
    const flyingImage = productImage.cloneNode(true);

    Object.assign(flyingImage.style, {
      position: 'fixed',
      left: `${imageRect.left}px`,
      top: `${imageRect.top}px`,
      width: `${imageRect.width}px`,
      height: `${imageRect.height}px`,
      objectFit: 'contain',
      zIndex: '99999',
      pointerEvents: 'none',
      margin: '0',
      opacity: '1',
      borderRadius: '10px',
      transition:
        'transform 750ms cubic-bezier(0.22, 1, 0.36, 1), opacity 750ms ease',
      willChange: 'transform, opacity',
    });

    document.body.appendChild(flyingImage);

    // المسافة بين صورة المنتج وأيقونة السلة
    const deltaX =
      cartRect.left + cartRect.width / 2 -
      (imageRect.left + imageRect.width / 2);

    const deltaY =
      cartRect.top + cartRect.height / 2 -
      (imageRect.top + imageRect.height / 2);

    // بدء الحركة بعد رسم الصورة في موضعها الأصلي
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        flyingImage.style.transform =
          `translate(${deltaX}px, ${deltaY}px) scale(0.12)`;

        flyingImage.style.opacity = '0.25';
      });
    });

    // حذف الصورة المؤقتة بعد انتهاء الحركة
    window.setTimeout(() => {
      flyingImage.remove();
    }, 800);
  };

export default function ProductsSection({ addToCart, addToWishlist }) {
  const navigate = useNavigate();
  
  const renderProductGrid = (items) => (
    <div className="product-grid">
      {items.map((prod) => (
        <div className="producte-card" key={prod.id}>
          <button className="btn-save" onClick={() => addToWishlist(prod)}>
            <i className="fa-regular fa-heart"></i>
          </button>
          <div className="product-image" onClick={() => navigate(`/product/${prod.id}`)}>
            <img src={import.meta.env.BASE_URL + prod.image} alt={prod.name} title={prod.name} />
          </div>
          <h2 className="product-title" onClick={() => navigate(`/product/${prod.id}`)} title={prod.name}>
            {prod.name}
          </h2>
          <span className="price">
            <bdi>{prod.price},00 <span className="product-price">DA</span></bdi>
          </span>
          <br />
          <button
            className="btn-add"
            onClick={(event) => {
              animateProductToCart(event);
              addToCart(prod);
            }}
          >
            Ajouter au panier
          </button>
        </div>
      ))}
    </div>
  );

  return (
    <section className="section produits" id="produits">
      <div className="container">
        <h2>Produits</h2>

        {/* Bouteilles */}
        <div className="produit">
          <div className="section-heading product-heading">
            <h1>Bouteilles</h1>
            <button className="btn-discover" onClick={() => navigate('/Bouteilles')}>Découvrir</button>
          </div>
          <div className="content">
            <img className="showcase-banner" src={import.meta.env.BASE_URL + "assets/image/43.jpg"} alt="Bouteilles" />
            {renderProductGrid(bouteilles)}
          </div>
        </div>

        {/* Bocals */}
        <div className="produit">
          <div className="section-heading product-heading">
            <h1>Bocals</h1>
            <button className="btn-discover" onClick={() => navigate('/Bocals')}>Découvrir</button>
          </div>
          <div className="content">
            <img className="showcase-banner" src={import.meta.env.BASE_URL +"assets/image/32.jpg"} alt="Bocals" />
            {renderProductGrid(bocals)}
          </div>
        </div>

        {/* Bouchons */}
        <div className="produit">
          <div className="section-heading product-heading">
            <h1>Bouchons</h1>
            <button className="btn-discover" onClick={() => navigate('/Bouchons')}>Découvrir</button>
          </div>
          <div className="content">
            <img className="showcase-banner" src={import.meta.env.BASE_URL +"assets/image/35.jpg"} alt="Bouchons" />
            {renderProductGrid(bouchons)}
          </div>
        </div>

        {/* Préformes */}
        <div className="produit">
          <div className="section-heading product-heading">
            <h1>Préformes</h1>
            <button className="btn-discover" onClick={() => navigate('/Preformes')}>Découvrir</button>
          </div>
          <div className="content">
            <img className="showcase-banner" src={import.meta.env.BASE_URL +"assets/image/42.jpg"} alt="Preformes" />
            {renderProductGrid(preformes)}
          </div>
        </div>

        {/* Poignées */}
        <div className="produit">
          <div className="section-heading product-heading">
            <h1>poignées</h1>
            <button className="btn-discover" onClick={() => navigate('/Poignees')}>Découvrir</button>
          </div>
          <div className="content">
            <img className="showcase-banner" src={import.meta.env.BASE_URL +"assets/image/40.jpg"} alt="poignees" />
            {renderProductGrid(poignees)}
          </div>
        </div>
      </div>
    </section>
  );
}