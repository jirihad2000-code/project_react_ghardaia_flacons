import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import './ProductDetailPage.css';
import './BouteillesPage.css';
import Breadcrumbs from "./Breadcrumbs";
import { animateProductToCart } from '../components/ProductsSection';


const allProducts = [
    {/* Bouteilles */ },
    { id: 1, image: 'assets/photos/23.png', name: 'FLACON EN VERRE AMBRÉ 50ml AVEC POMPE SPRAY', price: 100, category: 'Bouteilles', capacity: '50ml', material: 'PET', weight: '45g', reference: 'B' },
    { id: 2, image: 'assets/photos/23.png', name: 'Flacons cosmétiques de 250ml à 400ml', price: 250, category: 'Bouteilles', capacity: '250ml - 400ml', material: 'PET Plastique', weight: '30g', reference: 'B' },
    { id: 3, image: 'assets/photos/B11.png', name: 'FLACON EN VERRE AMBRÉ 50ml AVEC POMPE SPRAY', price: 250, category: 'Bouteilles', capacity: '50ml', material: 'PET', weight: '45g', reference: 'B' },
    {/* Bocals */ },
    { id: 5, image: 'assets/photos/BOC03.png', name: 'FLACON EN VERRE AMBRÉ 50ml AVEC POMPE SPRAY', price: 250, category: 'Bocals', capacity: '50ml', material: 'PET', weight: '45g', reference: 'BOC' },
    { id: 6, image: 'assets/photos/BOC05.png', name: 'FLACON EN VERRE AMBRÉ 50ml AVEC POMPE SPRAY', price: 250, category: 'Bocals', capacity: '50ml', material: 'PET', weight: '45g', reference: 'BOC' },
    { id: 7, image: 'assets/photos/BOC08.png', name: 'BOCAL08 02 KG', price: 250, category: 'Bocals', material: 'PET', weight: '2Kg', reference: 'BOC' },
    { id: 8, image: 'assets/photos/BOC09.png', name: 'BOCAL09 03 KG', price: 250, category: 'Bocals', material: 'PET', weight: '45g', reference: 'BOC' },
    {/* Bouchons */ },
    { id: 9, image: 'assets/photos/122.png', name: 'FLACON EN VERRE AMBRÉ 50ml AVEC POMPE SPRAY', price: 250, category: 'Bouchons', capacity: '50ml', material: 'PET', weight: '45g', reference: 'BOC' },
    { id: 10, image: 'assets/photos/134.png', name: 'FLACON EN VERRE AMBRÉ 50ml AVEC POMPE SPRAY', price: 250, category: 'Bouchons', capacity: '50ml', material: 'PET', weight: '45g', reference: 'BOC' },
    { id: 11, image: 'assets/photos/133.png', name: 'FLACON EN VERRE AMBRÉ 50ml AVEC POMPE SPRAY', price: 250, category: 'Bouchons', capacity: '50ml', material: 'PET', weight: '45g', reference: 'BOC' },
    { id: 12, image: 'assets/photos/143.png', name: 'FLACON EN VERRE AMBRÉ 50ml AVEC POMPE SPRAY', price: 250, category: 'Bouchons', capacity: '50ml', material: 'PET', weight: '45g', reference: 'BOC' },
    {/* Préformes */ },
    { id: 13, image: 'assets/photos/B11.png', name: 'PRÉFORME PET 30g STANDARD', price: 250, category: 'Préformes', capacity: '50ml', material: 'PET', weight: '45g', reference: 'BOC' },
    { id: 14, image: 'assets/photos/B11.png', name: 'PRÉFORME PET 38g LARGE', price: 250, category: 'Préformes', capacity: '50ml', material: 'PET', weight: '45g', reference: 'BOC' },
    { id: 15, image: 'assets/photos/B11.png', name: 'PRÉFORME PET 48g CONIQUE', price: 250, category: 'Préformes', capacity: '50ml', material: 'PET', weight: '45g', reference: 'BOC' },
    /*{ id: 16, image: 'assets/photos/B11.png', name: 'PRÉFORME PET 52g SPECIAL', price: 250, category: 'Préformes', capacity: '50ml', material: 'PET', weight: '45g', reference: 'BOC' },*/
    { id: 16, image: 'assets/photos/B11.png', name: 'PRÉFORME PET 52g SPECIAL', price: 250, category: 'Préformes', capacity: '50ml', material: 'PET', weight: '45g', reference: 'BOC' },
    {/* Poignées */ },
    { id: 17, image: 'assets/photos/108.jpeg', name: 'POIGNÉE PLASTIQUE POUR BIDON 5L', price: 250, category: 'Poignées', capacity: '50ml', material: 'PET', weight: '45g', reference: 'BOC' },
    { id: 18, image: 'assets/photos/110.jpeg', name: 'POIGNÉE ERGONOMIQUE 2L - 3L', price: 250, category: 'Poignées', capacity: '50ml', material: 'PET', weight: '45g', reference: 'BOC' },
    { id: 19, image: 'assets/photos/110.jpeg', name: 'POIGNÉE INDUSTRIELLE RENFORCÉE', price: 250, category: 'Poignées', capacity: '50ml', material: 'PET', weight: '45g', reference: 'BOC' },
    { id: 20, image: 'assets/photos/108.jpeg', name: 'POIGNÉE CLIPABLE POUR FLACON', price: 250, category: 'Poignées', capacity: '50ml', material: 'PET', weight: '45g', reference: 'BOC' },
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
        { label: product.category, href: `/${product.category}` },
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