import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BouchonsPage.css';
import Breadcrumbs from "./Breadcrumbs";
import { animateProductToCart } from '../components/ProductsSection';


const allBouchons = [
    { id: 9, image: '/assets/photos/122.png', name: 'FLACON EN VERRE AMBRÉ 50ml AVEC POMPE SPRAY', price: 250 },
    { id: 10, image: '/assets/photos/134.png', name: 'FLACON EN VERRE AMBRÉ 50ml AVEC POMPE SPRAY', price: 250 },
    { id: 11, image: '/assets/photos/133.png', name: 'FLACON EN VERRE AMBRÉ 50ml AVEC POMPE SPRAY', price: 250 },
    { id: 12, image: '/assets/photos/143.png', name: 'FLACON EN VERRE AMBRÉ 50ml AVEC POMPE SPRAY', price: 250 },
    { id: 9, image: '/assets/photos/122.png', name: 'FLACON EN VERRE AMBRÉ 50ml AVEC POMPE SPRAY', price: 250 },
    { id: 10, image: '/assets/photos/134.png', name: 'FLACON EN VERRE AMBRÉ 50ml AVEC POMPE SPRAY', price: 250 },
    { id: 11, image: '/assets/photos/133.png', name: 'FLACON EN VERRE AMBRÉ 50ml AVEC POMPE SPRAY', price: 250 },
    { id: 12, image: '/assets/photos/143.png', name: 'FLACON EN VERRE AMBRÉ 50ml AVEC POMPE SPRAY', price: 250 },
    // يمكنك إضافة جميع قاروراتك هنا
];

export default function BouchonsPage({ addToCart, addToWishlist }) {
    const breadcrumbItems = [
        { label: "Accueil", href: "/" },
        { label: "Bouchons" }
    ];
    const navigate = useNavigate();
    return (
        <>
            <div className="bouteille-cart">
                <h2>Bouchons</h2>
                <Breadcrumbs items={breadcrumbItems} />
            </div>
            <div className="container">
                {/*
                <h1>Toutes les Bouteilles & Flacons</h1>
                <p>
                    Découvrez notre gamme complète de bouteilles et flacons en PET de différentes capacités.
                </p>*/ }
                <div className="switcher-wrap">
                    <form className="woocommerce-ordering" method="get">
                        <select name="orderby" class="orderby" aria-label="Commande">
                            <option value="popularity" selected="selected">Tri par popularité</option>
                            <option value="date">Tri du plus récent au plus ancien</option>
                            <option value="price">Tri par tarif croissant</option>
                            <option value="price-desc">Tri par tarif décroissant</option>
                        </select>
                    </form>

                    <p className="woocommerce-result-count" role="alert" aria-relevant="all" data-is-sorted-by="true" aria-hidden="false">
                        Affichage de 1–12 sur 26 résultats</p>
                </div>

                <div className="product-grid">
                    {allBouchons.map((prod) => (
                        <div className="producte-card" key={prod.id}>
                            <button className="btn-save" onClick={() => addToWishlist(prod)}>
                                <i className="fa-regular fa-heart"></i>
                            </button>
                            <div className="product-image" onClick={() => navigate(`/product/${prod.id}`)}>
                                <img src={prod.image} alt={prod.name} />
                            </div>
                            <h2 className="product-title"><a href="#accueil" onClick={() => navigate(`/product/${prod.id}`)} title={prod.name} rel="bookmark">{prod.name}</a></h2>
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
            </div >
        </>
    );
}