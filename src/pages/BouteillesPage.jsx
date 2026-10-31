import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BouteillesPage.css';
import Breadcrumbs from "./Breadcrumbs";
import { animateProductToCart } from '../components/ProductsSection';


const allBouteilles = [
    { id: 101, image: 'assets/photos/B11.png', name: 'FLACON EN VERRE AMBRÉ 50ml AVEC POMPE SPRAY', price: 100, category: 'Bouteilles', material: 'PET', weight: '45g', reference: 'B' },
    { id: 102, image: 'assets/photos/B12.png', name: 'Flacons cosmétiques de 250ml à 400ml', price: 250, category: 'Bouteilles', material: 'PET', weight: '45g', reference: 'BOC' },
    { id: 103, image: 'assets/photos/B14 75CL.png', name: 'FLACON EN VERRE AMBRÉ 50ml AVEC POMPE SPRAY', price: 250, category: 'Bouteilles', material: 'PET', weight: '45g', reference: 'B' },
    { id: 104, image: 'assets/photos/B17.png', name: 'FLACON EN VERRE AMBRÉ 50ml AVEC POMPE SPRAY', price: 250, category: 'Bouteilles', material: 'PET', weight: '45g', reference: 'B' },
    { id: 105, image: 'assets/photos/B23.png', name: 'FLACON EN VERRE AMBRÉ 50ml AVEC POMPE SPRAY', price: 250, category: 'Bouteilles', material: 'PET', weight: '45g', reference: 'B' },
    { id: 106, image: 'assets/photos/B27.png', name: 'FLACON EN VERRE AMBRÉ 50ml AVEC POMPE SPRAY', price: 250, category: 'Bouteilles', material: 'PET', weight: '45g', reference: 'B' },
    { id: 107, image: 'assets/photos/B29.png', name: 'FLACON EN VERRE AMBRÉ 50ml AVEC POMPE SPRAY', price: 250, category: 'Bouteilles', material: 'PET', weight: '45g', reference: 'B' },
    { id: 108, image: 'assets/photos/B34.png', name: 'FLACON EN VERRE AMBRÉ 50ml AVEC POMPE SPRAY', price: 250, category: 'Bouteilles', material: 'PET', weight: '45g', reference: 'B' },
    { id: 109, image: 'assets/photos/B38.png', name: 'FLACON EN VERRE AMBRÉ 50ml AVEC POMPE SPRAY', price: 250, category: 'Bouteilles', material: 'PET', weight: '45g', reference: 'B' },
    { id: 110, image: 'assets/photos/B44.png', name: 'FLACON EN VERRE AMBRÉ 50ml AVEC POMPE SPRAY', price: 250, category: 'Bouteilles', material: 'PET', weight: '45g', reference: 'B' },

    // يمكنك إضافة جميع قاروراتك هنا
];

const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Bouteilles" }
];

export default function BouteillesPage({ addToCart, addToWishlist }) {
    const navigate = useNavigate();
    return (
        <>
            <div className="bouteille-cart">
                <h2>Bouteilles & Flacons</h2>
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
                    {allBouteilles.map((prod) => (
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