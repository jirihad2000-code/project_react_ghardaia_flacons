import React, { useState, useEffect } from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';


import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import CompanySection from './components/CompanySection';
import CategoriesSection from './components/CategoriesSection';
import ProductsSection from './components/ProductsSection';
import QualitySection from './components/QualitySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

import ProduitsPage from './pages/ProduitsPage';
import BouteillesPage from './pages/BouteillesPage';
import BocalsPage from './pages/BocalsPage';
import BouchonsPage from './pages/BouchonsPage';
import PreformesPage from './pages/PreformesPage';
import PoigneesPage from './pages/PoigneesPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ScrollToTop from './components/ScrollToTop';


export default function App() {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('health_cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem('health_wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('health_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('health_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const addToCart = (product, quantityToAdd = 1) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        // إذا كان المنتج موجوداً، قم بإضافة الكمية الجديدة المحددة فوق الكمية السابقة
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantityToAdd } : item
        );
      }
      // إذا لم يكن موجوداً، أضفه بالكمية التي حددها المستخدم
      return [...prevCart, { ...product, quantity: quantityToAdd }];
    });
  };
  

  const changeQuantity = (id, direction) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === id) {
            const newQty = direction === 'increase' ? item.quantity + 1 : item.quantity - 1;
            return { ...item, quantity: newQty };
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  // في ملف App.jsx

  const updateQuantityManual = (id, val) => {
    // يسمح بأن تكون الخانة فارغة مؤقتاً أثناء الكتابة لتسهيل الحذف والمسح
    if (val === '') {
      setCart((prevCart) =>
        prevCart.map((item) => (item.id === id ? { ...item, quantity: '' } : item))
      );
      return;
    }

    const qty = parseInt(val, 10);
    if (!isNaN(qty)) {
      setCart((prevCart) =>
        prevCart.map((item) => (item.id === id ? { ...item, quantity: qty } : item))
      );
    }
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const addToWishlist = (product) => {
    if (!wishlist.some((item) => item.id === product.id)) {
      setWishlist((prev) => [...prev, product]);
    } else {
      alert('هذا المنتج محفوظ بالفعل!');
    }
  };

  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price) || 0; // سعر المنتج
      const quantity = Number(item.quantity) || 0; // الكمية المدخلة
      let itemTotal = price * quantity;

      // الخصومات حسب الكمية
      if (quantity >= 10) itemTotal *= 0.8;
      else if (quantity >= 5) itemTotal *= 0.9;

      return total + itemTotal;
    }, 0);
  };

  return (
    <Router basename= {process.env.PUBLIC_URL ||
 '/project_react_ghardaia_flacons'}>
      <div className="app-root">
        {/* Ticker Ribbon */}
        <div className="ticker-ribbon" id="ticker-ribbon" aria-hidden="true">
          <div className="ticker-track">
            <div className="ticker-item">SARL GHARDAIA FLACONS <span className="sep">◆</span></div>
            <div className="ticker-item">GO FAR WITH US <span className="sep">◆</span></div>
            <div className="ticker-item">TOUTES CAPACITÉS <span className="sep">◆</span></div>
            <div className="ticker-item"><span className="arabic">شركة غرداية للقارورات</span> <span className="sep">◆</span></div>
            <div className="ticker-item">TRANSFORMATION PLASTIQUE INDUSTRIELLE <span className="sep">◆</span></div>
            <div className="ticker-item">BOUNOURA · GHARDAIA <span className="sep">◆</span></div>
            <div className="ticker-item">LIVRAISON NATIONALE <span className="sep">◆</span></div>
          </div>
        </div>

        <a href="https://wa.me/213797117055" className="whatsapp-float" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-whatsapp"></i>
        </a>

        {showScrollTop && (
          <button onClick={scrollToTop} id="ttpbtn" className="GoToTopButton">
            <i className="fa-solid fa-arrow-up-long"></i>
          </button>
        )}

        <Header
          cart={cart}
          wishlist={wishlist}
          totalPrice={calculateTotal()}
          changeQuantity={changeQuantity}
          updateQuantityManual={updateQuantityManual}
          removeFromCart={removeFromCart}
          removeFromWishlist={removeFromWishlist}
        />

        <ScrollToTop />

        <Routes>
          {/* الصفحة الرئيسية */}
          <Route path="/" element={
            <main>
              <Hero />
              <Features />
              <CompanySection />
              <CategoriesSection />
              <ProductsSection
                addToCart={addToCart}
                addToWishlist={addToWishlist}
              />
              <QualitySection />
              <ContactSection />
            </main>
          } />

          {/* صفحة جميع المنتجات */}
          <Route path="/Produits" element={
            <ProduitsPage
              addToCart={addToCart}
              addToWishlist={addToWishlist}
            />
          } />

          {/* صفحة جميع القارورات */}
          <Route path="/Bouteilles" element={
            <BouteillesPage
              addToCart={addToCart}
              addToWishlist={addToWishlist}
            />
          } />

          {/* صفحة جميع البرطمانات*/}
          <Route path="/Bocals" element={
            <BocalsPage
              addToCart={addToCart}
              addToWishlist={addToWishlist}
            />
          } />

          {/* صفحة جميع القارورات */}
          <Route path="/Bouchons" element={
            <BouchonsPage
              addToCart={addToCart}
              addToWishlist={addToWishlist}
            />
          } />

          {/* صفحة جميع القارورات */}
          <Route path="/Préformes" element={
            <PreformesPage
              addToCart={addToCart}
              addToWishlist={addToWishlist}
            />
          } />

          {/* صفحة جميع القارورات */}
          <Route path="/Poignées" element={
            <PoigneesPage
              addToCart={addToCart}
              addToWishlist={addToWishlist}
            />
          } />

          <Route path="/product/:id" element={
            <ProductDetailPage 
            addToCart={addToCart}
            addToWishlist={addToWishlist}
            />
          } />

        </Routes>

        <Footer />
      </div>
    </Router>
  );
}