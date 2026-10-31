import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BocalsPage.css';
import Breadcrumbs from "./Breadcrumbs";
import { animateProductToCart } from '../components/ProductsSection';


const allBocals = [
    { id: 1, image: 'assets/photos/BOC01.png', name: 'BOCAL001 0.5 KG', price: 21, category: 'Bocals', capacity: '50ml', material: 'PET', weight: '45g', reference: 'BOC' },
    { id: 2, image: 'assets/photos/BOC02.png', name: 'BOCAL002 01 KG', price: 29, category: 'Bocals', capacity: '50ml', material: 'PET', weight: '45g', reference: 'BOC' },
    { id: 3, image: 'assets/photos/BOC03.png', name: 'BOCAL003 02 KG', price: 250, category: 'Bocals', material: 'PET', weight: '45g', reference: 'BOC' },
    { id: 4, image: 'assets/photos/BOC04.png', name: 'BOCAL004 03 KG', price: 250, category: 'Bocals', material: 'PET', weight: '45g', reference: 'BOC' },
    { id: 5, image: 'assets/photos/BOC05.png', name: 'BOCAL005 01 KG', price: 250, category: 'Bocals', material: 'PET', weight: '45g', reference: 'BOC' },
    { id: 6, image: 'assets/photos/BOC06.png', name: 'BOCAL006 02 KG', price: 250, category: 'Bocals', material: 'PET', weight: '45g', reference: 'BOC' },
    { id: 7, image: 'assets/photos/BOC07.png', name: 'BOCAL007 0.5 KG', price: 250, category: 'Bocals', material: 'PET', weight: '45g', reference: 'BOC' },
    { id: 8, image: 'assets/photos/BOC08.png', name: 'BOCAL008 02 KG', price: 250, category: 'Bocals', material: 'PET', weight: '45g', reference: 'BOC' },
    { id: 9, image: 'assets/photos/BOC09.png', name: 'BOCAL009 03 KG', price: 250, category: 'Bocals', material: 'PET', weight: '45g', reference: 'BOC' },
    { id: 10, image: 'assets/photos/BOC10.png', name: 'BOCAL010 03 KG', price: 250, category: 'Bocals', material: 'PET', weight: '45g', reference: 'BOC' },
    { id: 12, image: 'assets/photos/BOC12.png', name: 'BOCAL012 1.5 KG', price: 250, category: 'Bocals', material: 'PET', weight: '45g', reference: 'BOC' },
    { id: 14, image: 'assets/photos/BOC14.png', name: 'BOCAL014 05 KG', price: 250, category: 'Bocals', material: 'PET', weight: '45g', reference: 'BOC' },
    { id: 17, image: 'assets/photos/BOC17.png', name: 'BOCAL017 20 CL', price: 250, category: 'Bocals', material: 'PET', weight: '45g', reference: 'BOC' },
    { id: 18, image: 'assets/photos/BOC20.png', name: 'BOCAL020 03 KG', price: 250, category: 'Bocals', material: 'PET', weight: '45g', reference: 'BOC' },
    { id: 19, image: 'assets/photos/BOC21.png', name: 'BOCAL021 04 KG', price: 250, category: 'Bocals', material: 'PET', weight: '45g', reference: 'BOC' },
    { id: 20, image: 'assets/photos/BOC22.png', name: 'BOCAL022 04 KG', price: 250, category: 'Bocals', material: 'PET', weight: '45g', reference: 'BOC' },
    { id: 21, image: 'assets/photos/BOC23.png', name: 'BOCAL023 03 KG', price: 250, category: 'Bocals', material: 'PET', weight: '45g', reference: 'BOC' },
    { id: 22, image: 'assets/photos/BOC24.png', name: 'BOCAL024 02 KG', price: 250, category: 'Bocals', material: 'PET', weight: '45g', reference: 'BOC' },
    { id: 23, image: 'assets/photos/BOC25.png', name: 'BOCAL025 03 KG', price: 250, category: 'Bocals', material: 'PET', weight: '45g', reference: 'BOC' },
    { id: 24, image: 'assets/photos/BOC26.png', name: 'BOCAL026 02 KG', price: 250, category: 'Bocals', material: 'PET', weight: '45g', reference: 'BOC' },
    { id: 35, image: 'assets/photos/BOL07.png', name: 'BOL07 50 CL', price: 250, category: 'Bocals', material: 'PET', weight: '45g', reference: 'BOC' },
    { id: 36, image: 'assets/photos/BOL15.png', name: 'BOL15 35 CL', price: 250, category: 'Bocals', material: 'PET', weight: '45g', reference: 'BOC' },
    { id: 48, image: 'assets/photos/POT01.png', name: 'POT01 200 ML', price: 250, category: 'Bocals', material: 'PET', weight: '45g', reference: 'BOC' },
    { id: 37, image: 'assets/photos/POT02.png', name: 'POT02 30 CL', price: 250, category: 'Bocals', material: 'PET', weight: '45g', reference: 'BOC' },
    { id: 38, image: 'assets/photos/POT03.png', name: 'POT03 15 CL', price: 250, category: 'Bocals', material: 'PET', weight: '45g', reference: 'BOC' },
    { id: 39, image: 'assets/photos/POT04.png', name: 'POT04 25 CL', price: 250, category: 'Bocals', material: 'PET', weight: '45g', reference: 'BOC' },
    { id: 40, image: 'assets/photos/POT05.png', name: 'POT05 25 CL', price: 250, category: 'Bocals', material: 'PET', weight: '45g', reference: 'BOC' },
    { id: 41, image: 'assets/photos/POT06.png', name: 'POT06 15 CL', price: 250, category: 'Bocals', material: 'PET', weight: '45g', reference: 'BOC' },
    { id: 42, image: 'assets/photos/POT07.png', name: 'POT07 100 ML', price: 250, category: 'Bocals', material: 'PET', weight: '45g', reference: 'BOC' },
    { id: 43, image: 'assets/photos/POT08.png', name: 'POT08 80 ML', price: 250, category: 'Bocals', material: 'PET', weight: '45g', reference: 'BOC' },
    { id: 44, image: 'assets/photos/POT09.png', name: 'POT09 160 ML', price: 250, category: 'Bocals', material: 'PET', weight: '45g', reference: 'BOC' },
    { id: 45, image: 'assets/photos/POT10.png', name: 'POT010 120 L', price: 250, category: 'Bocals', material: 'PET', weight: '45g', reference: 'BOC' },
    { id: 46, image: 'assets/photos/POT11.png', name: 'POT011 300 ML', price: 250, category: 'Bocals', material: 'PET', weight: '45g', reference: 'BOC' },
    { id: 47, image: 'assets/photos/POT12.png', name: 'POT012 30 CL', price: 250, category: 'Bocals', material: 'PET', weight: '45g', reference: 'BOC' },
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
                    Découvrez notre gamme complète de Bouteilles et flacons en PET de différentes capacités.
                </p>*/ }
                <div className="switcher-wrap">
                    <form className="woocommerce-ordering" method="get">
                        {/*<select name="orderby" className="orderby" aria-label="Commande">
                            <option value="popularity" selected="selected">Tri par popularité</option>
                            <option value="date">Tri du plus récent au plus ancien</option>
                            <option value="price">Tri par tarif croissant</option>
                            <option value="price-desc">Tri par tarif décroissant</option>
                        </select>*/}
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
                                <img src={import.meta.env.BASE_URL + prod.image} alt={prod.name} />
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