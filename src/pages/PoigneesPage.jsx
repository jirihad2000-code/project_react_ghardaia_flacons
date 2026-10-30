import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PoigneesPage.css';
import Breadcrumbs from "./Breadcrumbs";
import { animateProductToCart } from '../components/ProductsSection';


const allPoignees = [
    { id: 17, image: '/assets/photos/108.jpeg', name: 'POIGNÉE PLASTIQUE POUR BIDON 5L', price: 250 },
    { id: 18, image: '/assets/photos/110.jpeg', name: 'POIGNÉE ERGONOMIQUE 2L - 3L', price: 250 },
    { id: 19, image: '/assets/photos/110.jpeg', name: 'POIGNÉE INDUSTRIELLE RENFORCÉE', price: 250 },
    { id: 20, image: '/assets/photos/108.jpeg', name: 'POIGNÉE CLIPABLE POUR FLACON', price: 250 },
    { id: 17, image: '/assets/photos/108.jpeg', name: 'POIGNÉE PLASTIQUE POUR BIDON 5L', price: 250 },
    { id: 18, image: '/assets/photos/110.jpeg', name: 'POIGNÉE ERGONOMIQUE 2L - 3L', price: 250 },
    { id: 19, image: '/assets/photos/110.jpeg', name: 'POIGNÉE INDUSTRIELLE RENFORCÉE', price: 250 },
    { id: 20, image: '/assets/photos/108.jpeg', name: 'POIGNÉE CLIPABLE POUR FLACON', price: 250 },
    // يمكنك إضافة جميع قاروراتك هنا
];

export default function PoigneesPage({ addToCart, addToWishlist }) {
    const navigate = useNavigate();
    const breadcrumbItems = [
        { label: "Accueil", href: "/" },
        { label: "Poignées" }
    ];
    return (
        <>
            <div className="bouteille-cart">
                <h2>Poignées</h2>
                <Breadcrumbs items={breadcrumbItems} />
            </div>
            <div className="container">
                {/*
                <h1>Toutes les Bouteilles & Flacons</h1>
                <p>
                    Découvrez notre gamme complète de bouteilles et flacons en PET de différentes capacités.
                </p>*/ }
                <div className="switcher-wrap">
                    <form className="woocommerce-ordering" method="get" >
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
                    {allPoignees.map((prod) => (
                        <div className="producte-card" key={prod.id}>
                            <button className="btn-save" onClick={() => addToWishlist(prod)}>
                                <i className="fa-regular fa-heart"></i>
                            </button>
                            <div className="product-image" onClick={() => navigate(`/product/${prod.id}`)}>
                                <img src={import.meta.env.BASE_URL+prod.image} alt={prod.name} />
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