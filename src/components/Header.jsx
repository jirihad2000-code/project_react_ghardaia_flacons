import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Header({
  cart,
  wishlist,
  totalPrice,
  changeQuantity,
  updateQuantityManual,
  removeFromCart,
  removeFromWishlist,
}) {
  const [navOpen, setNavOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // مراجع القوائم
  const wishlistRef = useRef(null);
  const cartRef = useRef(null);
  const navRef = useRef(null);
  const menuToggleRef = useRef(null);

  // إغلاق القوائم عند الضغط خارجها
  useEffect(() => {
    const handleOutsideClick = (event) => {
      const target = event.target;

      // إغلاق المفضلة عند الضغط خارجها وخارج أيقونتها
      if (
        wishlistRef.current &&
        !wishlistRef.current.contains(target)
      ) {
        setActiveDropdown((current) =>
          current === 'wishlist' ? null : current
        );
      }

      // إغلاق السلة عند الضغط خارجها وخارج أيقونتها
      if (
        cartRef.current &&
        !cartRef.current.contains(target)
      ) {
        setActiveDropdown((current) =>
          current === 'cart' ? null : current
        );
      }

      // إغلاق قائمة التنقل عند الضغط خارجها
      if (
        navRef.current &&
        !navRef.current.contains(target) &&
        menuToggleRef.current &&
        !menuToggleRef.current.contains(target)
      ) {
        setNavOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const toggleDropdown = (menuName) => {
    setActiveDropdown(activeDropdown === menuName ? null : menuName);
  };

  const totalCartCount = cart.reduce((acc, item) => acc + (Number(item.quantity) || 0), 0);

  return (
    <header className="header">
      <div className="container nav-wrap">
        <a className="brand" href="/" aria-label="SARL Ghardaia Flacons">
          <img src={import.meta.env.BASE_URL + "assets/image/logo.png"} alt="Logo SARL Ghardaia Flacons" />
        </a>
        <div
          ref={menuToggleRef}
          className="menu-toggle"
          id="menuToggle"
          aria-label="Ouvrir le menu"
          onClick={() => setNavOpen(!navOpen)}
        >
          <i className="fa-solid fa-bars"></i>
        </div>

        {/*<nav className={`mainNav ${navOpen ? 'open' : ''}`} id="mainNav">*/}
        <ul ref={navRef} className={`nav-list ${navOpen ? 'open' : ''}`} id="mainNav">
          <li><a href='/' onClick={() => setNavOpen(false)}>Accueil</a></li>
          <li><Link to='Entreprise' onClick={() => setNavOpen(false)}>Entreprise</Link></li>
          <li><Link to='Categories' onClick={() => setNavOpen(false)}>Catégories</Link></li>
          <li className="dropdown">
            <Link to='Produits'><span className="menu-text">Produits</span>
            </Link>
            <ul className="nav-list1">
              <li>
                <Link to='/Bouteilles'>
                  <span className="menu-item-text">
                    <span className="menu-text">Bouteilles</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link to='/Bocals'>
                  <span className="menu-item-text">
                    <span className="menu-text">Bocals</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link to='/Bouchons'>
                  <span className="menu-item-text">
                    <span className="menu-text">Bouchons</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link to='/préformes'>
                  <span className="menu-item-text">
                    <span className="menu-text">Préformes</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link to='/Poignées'>
                  <span className="menu-item-text">
                    <span className="menu-text">Poignées</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link to='/Machines'>
                  <span className="menu-item-text">
                    <span className="menu-text">Machines importation</span>
                  </span>
                </Link>
              </li>
            </ul>
          </li>
          <li><Link to='Qualite' onClick={() => setNavOpen(false)}>Qualité</Link></li>
          <li><Link to='Contact' onClick={() => setNavOpen(false)}>Contact</Link></li>
        </ul>
        {/*</nav>*/}

        <div className="header-icons">
          {/* Wishlist Icon & Dropdown */}
          <div className="wishlist-container" ref={wishlistRef} >
            <button className="icon" onClick={() => toggleDropdown('wishlist')}>
              <i className="fa-regular fa-heart"></i>
              <span id="wishlist-count" className="count heartCount">{wishlist.length}</span>
            </button>
            <div id="wishlist-dropdown" className={`dropdown-menu ${activeDropdown === 'wishlist' ? 'show' : ''}`}>
              <div className="dropdown-header">
                <span style={{ fontWeight: 'bold' }}> Les produits sont conservés </span>
                <button className="close-btn" onClick={() => setActiveDropdown(null)}>✕</button>
              </div>
              <div className="cart-content">
                <ul id="wishlist-items">
                  {wishlist.length === 0 ? (
                    <li style={{ justifyContent: 'center', color: '#888', padding: '15px 0' }}>
                      la liste de sauvegarde est vide
                    </li>
                  ) : (
                    wishlist.map((item) => (
                      <li key={item.id}>
                        <div className="product-grids" style={{ display: 'flex', width: '100%' }}>
                          <div className="product-image">
                            <img width="100" height="100" src={item.image} alt={item.name} />
                          </div>
                          <div className="product-cart" style={{ flex: 1, marginLeft: '10px' }}>
                            <div className="product-text" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                              <h6 style={{ color: 'black' }}>{item.name}</h6>
                              <button
                                onClick={() => removeFromWishlist(item.id)}
                                style={{ color: 'black', background: 'none', border: 'none', cursor: 'pointer' }}
                              >
                                <i className="fa-solid fa-trash"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))
                  )}
                </ul>
              </div>
            </div>
          </div>

          {/* Cart Icon & Dropdown */}
          <div className="cart-container" ref={cartRef}>
            <button className="icon" onClick={() => toggleDropdown('cart')}>
              <i className="fa-solid fa-cart-shopping"></i>
              <span id="cart-count" className="count cartCount">{totalCartCount}</span>
            </button>
            <div id="cart-dropdown" className={`dropdown-menu ${activeDropdown === 'cart' ? 'show' : ''}`}>
              <div className="dropdown-header">
                <span style={{ fontWeight: 'bold' }}> Contenu du panier </span>
                <button className="close-btn" onClick={() => setActiveDropdown(null)}>✕</button>
              </div>
              <div className="cart-content">
                <ul id="cart-items">
                  {cart.length === 0 ? (
                    <li style={{ justifyContent: 'center', color: '#888', padding: '15px 0' }}>
                      le panier est vide
                    </li>
                  ) : (
                    cart.map((item) => (
                      <li key={item.id}>
                        <div className="product-grids">
                          <div className="product-image">
                            <img width="100" height="100" src={item.image} alt={item.name} />
                          </div>
                          <div className="product-cart">
                            <div className="product-text">
                              <h6 style={{ color: 'black' }}>{item.name}</h6>
                              <button
                                onClick={() => removeFromCart(item.id)}
                                style={{ color: 'black', marginLeft: '5px', background: 'none', border: 'none', cursor: 'pointer' }}
                              >
                                <i className="fa-solid fa-trash"></i>
                              </button>
                            </div>
                            <div className="produit-btnprice">
                              <div className="product-actions">
                                <span className="btn-left" onClick={() => changeQuantity(item.id, 'decrease')}> - </span>
                                <input
                                  type="number"
                                  className="btn-qty"
                                  value={item.quantity}
                                  min="1"
                                  onChange={(e) => updateQuantityManual(item.id, e.target.value)}
                                  onBlur={(e) => {
                                    // في حال ترك المستخدم الخانة فارغة أو أقل من 1 عند الخروج منها
                                    if (!item.quantity || Number(item.quantity) < 1) {
                                      updateQuantityManual(item.id, 1);
                                    }
                                  }}
                                />
                                <span className="btn-right" onClick={() => changeQuantity(item.id, 'increase')}> + </span>
                              </div>
                              <p>{item.price} DA</p>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))
                  )}
                </ul>
              </div>
              <div className="sidebar-footer">
                <div className="total">
                  <span>Total:</span>
                  <span id="totalPrice">{totalPrice} DA</span>
                </div>
                <button type="button" className="btn-devis">Devis</button>
              </div>
            </div>
          </div>
        </div>
      </div >
    </header >
  );
}