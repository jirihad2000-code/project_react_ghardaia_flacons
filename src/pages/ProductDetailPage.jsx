import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import './ProductDetailPage.css';
import './BouteillesPage.css';
import Breadcrumbs from "./Breadcrumbs";
import { animateProductToCart } from '../components/ProductsSection';


const allProducts = [
    {/* Bouteilles */ },
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

    {/* Bocals */ },
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
    { id: 21, image: 'assets/photos/BOCB23.png', name: 'BOCAL023 03 KG', price: 250, category: 'Bocals', material: 'PET', weight: '45g', reference: 'BOC' },
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
    {/* Bouchons */ },
    { id: 201, image: 'assets/photos/122.png', name: 'FLACON EN VERRE AMBRÉ 50ml AVEC POMPE SPRAY', price: 250, category: 'Bouchons', capacity: '50ml', material: 'PET', weight: '45g', reference: 'BOC' },
    { id: 202, image: 'assets/photos/134.png', name: 'FLACON EN VERRE AMBRÉ 50ml AVEC POMPE SPRAY', price: 250, category: 'Bouchons', capacity: '50ml', material: 'PET', weight: '45g', reference: 'BOC' },
    { id: 203, image: 'assets/photos/133.png', name: 'FLACON EN VERRE AMBRÉ 50ml AVEC POMPE SPRAY', price: 250, category: 'Bouchons', capacity: '50ml', material: 'PET', weight: '45g', reference: 'BOC' },
    { id: 204, image: 'assets/photos/143.png', name: 'FLACON EN VERRE AMBRÉ 50ml AVEC POMPE SPRAY', price: 250, category: 'Bouchons', capacity: '50ml', material: 'PET', weight: '45g', reference: 'BOC' },
    { id: 205, image: 'assets/photos/3.png', name: 'FLACON EN VERRE AMBRÉ 50ml AVEC POMPE SPRAY', price: 250, category: 'Bouchons', capacity: '50ml', material: 'PET', weight: '45g', reference: 'BOC' },
    { id: 206, image: 'assets/photos/4.png', name: 'FLACON EN VERRE AMBRÉ 50ml AVEC POMPE SPRAY', price: 250, category: 'Bouchons', capacity: '50ml', material: 'PET', weight: '45g', reference: 'BOC' },
    { id: 207, image: 'assets/photos/133.png', name: 'FLACON EN VERRE AMBRÉ 50ml AVEC POMPE SPRAY', price: 250, category: 'Bouchons', capacity: '50ml', material: 'PET', weight: '45g', reference: 'BOC' },
    { id: 208, image: 'assets/photos/143.png', name: 'FLACON EN VERRE AMBRÉ 50ml AVEC POMPE SPRAY', price: 250, category: 'Bouchons', capacity: '50ml', material: 'PET', weight: '45g', reference: 'BOC' },
    {/* Préformes */ },
    { id: 12, image: 'assets/photos/B11.png', name: 'PRÉFORME PET 30g STANDARD', price: 250, category: 'Préformes', capacity: '50ml', material: 'PET', weight: '45g', reference: 'BOC' },
    { id: 13, image: 'assets/photos/B11.png', name: 'PRÉFORME PET 38g LARGE', price: 250, category: 'Préformes', capacity: '50ml', material: 'PET', weight: '45g', reference: 'BOC' },
    { id: 14, image: 'assets/photos/B11.png', name: 'PRÉFORME PET 48g CONIQUE', price: 250, category: 'Préformes', capacity: '50ml', material: 'PET', weight: '45g', reference: 'BOC' },
    /*{ id: 16, image: 'assets/photos/B11.png', name: 'PRÉFORME PET 52g SPECIAL', price: 250, category: 'Préformes', capacity: '50ml', material: 'PET', weight: '45g', reference: 'BOC' },*/
    { id: 15, image: 'assets/photos/B11.png', name: 'PRÉFORME PET 52g SPECIAL', price: 250, category: 'Préformes', capacity: '50ml', material: 'PET', weight: '45g', reference: 'BOC' },
    {/* Poignées */ },
    { id: 16, image: 'assets/photos/108.jpeg', name: 'POIGNÉE PLASTIQUE POUR BIDON 5L', price: 250, category: 'Poignées', capacity: '50ml', material: 'PET', weight: '45g', reference: 'BOC' },
    { id: 17, image: 'assets/photos/110.jpeg', name: 'POIGNÉE ERGONOMIQUE 2L - 3L', price: 250, category: 'Poignées', capacity: '50ml', material: 'PET', weight: '45g', reference: 'BOC' },
    { id: 18, image: 'assets/photos/110.jpeg', name: 'POIGNÉE INDUSTRIELLE RENFORCÉE', price: 250, category: 'Poignées', capacity: '50ml', material: 'PET', weight: '45g', reference: 'BOC' },
    { id: 19, image: 'assets/photos/108.jpeg', name: 'POIGNÉE CLIPABLE POUR FLACON', price: 250, category: 'Poignées', capacity: '50ml', material: 'PET', weight: '45g', reference: 'BOC' },
];

export default function ProductDetailPage({
    cart,
    addToCart,
    addToWishlist,
    changeQuantity,
    updateQuantityManual,
}) {

    const { id } = useParams();
    const product = allProducts.find((p) => p.id === parseInt(id, 10));
    const breadcrumbItems = [
        { label: "Accueil", href: "/" },
        { label: product.category, href: `${product.category}` },
        { label: product.name }
    ];


    // البحث عما إذا كان المنتج موجوداً مسبقاً في السلة
    const cartItem = cart?.find((item) => item.id === product?.id);

    // إذا كان موجوداً في السلة، نأخذ كميته، وإذا لم يكن موجوداً تبدأ الكمية بـ 1
    const [quantity, setQuantity] = useState(cartItem ? cartItem.quantity : 1);

    // تحديث الحالة المحلية إذا تغيرت السلة
    useEffect(() => {
        if (cartItem) {
            setQuantity(cartItem.quantity);
        }
    }, [cartItem]);

    if (!product) {
        return (
            <div className="bouteille-cart">
                <h2>المنتج غير موجود</h2>
                <Breadcrumbs items={breadcrumbItems} />
            </div>
        );
    }

    return (
        <>
            <div className="bouteille-cart">
                <h2>{product.name}</h2>
                <Breadcrumbs items={breadcrumbItems} />
            </div>
            <div className="container">
                <div className="producte-grid">
                    <div className='producte-card'>
                        <button
                            className="btn-save"
                            onClick={() => addToWishlist(product)}
                        >
                            <i className="fa-regular fa-heart"></i>
                        </button>
                        <div className="product-image">
                            <img
                                className="image"
                                src={import.meta.env.BASE_URL+product.image}
                                alt={product.name}
                            />
                        </div>
                    </div>

                    <div className="product-text">
                        <h1>{product.name}</h1>
                        <p>
                            {product.price},00 DA
                        </p>

                        {/* Fiche Technique */}
                        <div className="fiche-tech">
                            <h3>
                                Fiche Technique
                            </h3>
                            <ul>
                                <li><strong>category: </strong> {product.category || 'غير متوفر'}</li>
                                <li><strong>Capacité: </strong> {product.capacity || 'غير متوفر'}</li>
                                <li><strong>Matière: </strong> {product.material || 'plastique / verre'}</li>
                                <li><strong>Poids: </strong> {product.weight || 'غير محدد'}</li>
                                <li><strong>Référence: </strong> {product.reference}-{product.id}</li>
                            </ul>
                        </div>

                        <div className="button-action">
                            {/* أزرار التحكم بالكمية */}
                            <div className="product-actions">
                                <span
                                    className="btn-left"
                                    onClick={() => {
                                        if (cartItem) {
                                            changeQuantity(product.id, 'decrease');
                                        } else if (quantity > 1) {
                                            setQuantity(quantity - 1);
                                        }
                                    }}

                                >
                                    -
                                </span>

                                <input
                                    type="number"
                                    className="btn-qty"
                                    value={cartItem ? cartItem.quantity : quantity}
                                    min="1"
                                    onChange={(e) => {
                                        if (cartItem) {
                                            updateQuantityManual(product.id, e.target.value);
                                        } else {
                                            setQuantity(e.target.value === '' ? '' : parseInt(e.target.value, 10));
                                        }
                                    }}
                                />

                                <span
                                    className="btn-right"
                                    onClick={() => {
                                        if (cartItem) {
                                            changeQuantity(product.id, 'increase');
                                        } else {
                                            setQuantity(quantity + 1);
                                        }
                                    }}
                                >
                                    +
                                </span>
                            </div>

                            {/* زر الإضافة أو التحديث */}
                            <button
                                className="btn-add"
                                onClick={(event) => {
                                    animateProductToCart(event);
                                    if (!cartItem) {
                                        addToCart(product, Number(quantity) || 1);
                                    } else {
                                        // 3. إذا كان موجوداً مسبقاً، يمكنك زيادة الكمية تلقائياً أو تركها لتحديث السلة
                                        changeQuantity(product.id, 'increase');
                                    }
                                }}
                            >
                                {cartItem ? 'Déjà dans le panier ✓' : 'Ajouter au panier'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}