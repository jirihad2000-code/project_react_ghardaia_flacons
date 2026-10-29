import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BocalsPage.css';
import Breadcrumbs from "./Breadcrumbs";
import { animateProductToCart } from '../components/ProductsSection';


const allBocals = [
    { id: 1, image: '/assets/photos/BOC01.jpg', name: 'BOCAL001 0.5 KG', price: 21 },
    { id: 2, image: '/assets/photos/BOC02.jpg', name: 'BOCAL002 01 KG', price: 29 },
    { id: 2 - 1, image: '/assets/photos/BOC02N.png', name: 'BOCAL002/ Noir 01 KG NOIR', price: 32 },
    { id: 2 - 2, image: '/assets/photos/BOC02OP.png', name: 'BOCAL002/ OPAQUE 01 KG ', price: 23 },
    { id: 3, image: '/assets/photos/BOC03.png', name: 'BOCAL003 02 KG', price: 250 },
    { id: 4, image: '/assets/photos/BOC04.jpg', name: 'BOCAL004 03 KG', price: 250 },
    { id: 5, image: '/assets/photos/BOC05.png', name: 'BOCAL005 01 KG', price: 250 },
    { id: 6, image: '/assets/photos/BOC06.jpg', name: 'BOCAL006 02 KG', price: 250 },
    { id: 7, image: '/assets/photos/BOC07.jpg', name: 'BOCAL007 0.5 KG', price: 250 },
    { id: 8, image: '/assets/photos/BOC08.png', name: 'BOCAL008 02 KG', price: 250 },
    { id: 9, image: '/assets/photos/BOC09.png', name: 'BOCAL009 03 KG', price: 250 },
    { id: 10, image: '/assets/photos/BOC10.png', name: 'BOCAL010 03 KG', price: 250 },
    { id: 12, image: '/assets/photos/BOC12.jpg', name: 'BOCAL012 1.5 KG', price: 250 },
    { id: 13, image: '/assets/photos/BOC13.jpg', name: 'BOCAL013 02 KG', price: 250 },
    { id: 14, image: '/assets/photos/BOC14.jpg', name: 'BOCAL014 05 KG', price: 250 },
    { id: 15, image: '/assets/photos/BOC15.jpg', name: 'BOCAL015 35 CL', price: 250 },
    { id: 15 - 1, image: '/assets/photos/BOC16.png', name: 'BOCAL015/ OPAQUE 35 CL', price: 250 },
    { id: 16, image: '/assets/photos/BOC16.png', name: 'BOCAL016 70 CL', price: 250 },
    { id: 17, image: '/assets/photos/BOC17.jpg', name: 'BOCAL017 20 CL', price: 250 },
    { id: 18, image: '/assets/photos/BOC20.jpg', name: 'BOCAL020 03 KG', price: 250 },
    { id: 19, image: '/assets/photos/BOC21.jpg', name: 'BOCAL021 04 KG', price: 250 },
    { id: 20, image: '/assets/photos/BOC22.jpg', name: 'BOCAL022 04 KG', price: 250 },
    { id: 21, image: '/assets/photos/BOC23.jpg', name: 'BOCAL023 03 KG', price: 250 },
    { id: 22, image: '/assets/photos/BOC24.jpg', name: 'BOCAL024 02 KG', price: 250 },
    { id: 23, image: '/assets/photos/BOC25.jpg', name: 'BOCAL025 03 KG', price: 250 },
    { id: 24, image: '/assets/photos/BOC26.jpg', name: 'BOCAL026 02 KG', price: 250 },
    /*{ id: 25, image: '/assets/photos/BOC27.png', name: 'BOCAL016 70 CL', price: 250},
    { id: 26, image: '/assets/photos/BOC28.png', name: 'BOCAL016 70 CL', price: 250},
    { id: 27, image: '/assets/photos/BOC28-1.png', name: 'BOCAL016 70 CL', price: 250},
    { id: 28, image: '/assets/photos/BOC29.png', name: 'BOCAL016 70 CL', price: 250},
    { id: 29, image: '/assets/photos/BOC30.png', name: 'BOCAL016 70 CL', price: 250},
    { id: 30, image: '/assets/photos/BOC31.png', name: 'BOCAL016 70 CL', price: 250},
    { id: 31, image: '/assets/photos/BOC32.png', name: 'BOCAL016 70 CL', price: 250},
    { id: 32, image: '/assets/photos/BOC32-1.png', name: 'BOCAL016 70 CL', price: 250},
    { id: 33, image: '/assets/photos/BOC33.png', name: 'BOCAL016 70 CL', price: 250},
    { id: 34, image: '/assets/photos/BOC34.png', name: 'BOCAL016 70 CL', price: 250},*/
    { id: 35, image: '/assets/photos/BOL07.jpg', name: 'BOL07 50 CL', price: 250 },
    { id: 36, image: '/assets/photos/BOL15.jpg', name: 'BOL15 35 CL', price: 250 },
    { id: 48, image: '/assets/photos/POT01.jpg', name: 'POT01 200 ML', price: 250 },
    { id: 37, image: '/assets/photos/POT02.jpg', name: 'POT02 30 CL', price: 250 },
    { id: 38, image: '/assets/photos/POT03.jpg', name: 'POT03 15 CL', price: 250 },
    { id: 39, image: '/assets/photos/POT04.jpg', name: 'POT04 25 CL', price: 250 },
    { id: 40, image: '/assets/photos/POT05.jpg', name: 'POT05 25 CL', price: 250 },
    { id: 41, image: '/assets/photos/POT06.jpg', name: 'POT06 15 CL', price: 250 },
    { id: 42, image: '/assets/photos/POT07.jpg', name: 'POT07 100 ML', price: 250 },
    { id: 43, image: '/assets/photos/POT08.jpg', name: 'POT08 80 ML', price: 250 },
    { id: 44, image: '/assets/photos/POT09.jpg', name: 'POT09 160 ML', price: 250 },
    { id: 45, image: '/assets/photos/POT10.jpg', name: 'POT010 120 L', price: 250 },
    { id: 46, image: '/assets/photos/POT11.jpg', name: 'POT011 300 ML', price: 250 },
    { id: 47, image: '/assets/photos/POT12.jpg', name: 'POT012 30 CL', price: 250 },
];

export default function BocalsPage({ addToCart, addToWishlist }) {
    const breadcrumbItems = [
        { label: "Accueil", href: "/" },
        { label: "Bocals" }
    ];
    const navigate = useNavigate();
    return (
        <>
            <div className="bouteille-cart">
                <h2>Bocals</h2>
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
                    {allBocals.map((prod) => (
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