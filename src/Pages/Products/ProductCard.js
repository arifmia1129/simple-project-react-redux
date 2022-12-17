import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { addToCart, removeFromCart } from '../../features/cart/cartSlice';
import { ADD_TO_CART } from '../../redux/actionTypes/productActionTypes';

const ProductCard = ({ product }) => {
    const { model, price, rating, image, quantity } = product;

    const dispatch = useDispatch();

    const { pathname } = useLocation();

    return (
        <div className='product-card'>
            {
                (pathname === "/cart") &&
                <div style={{ backgroundColor: "indigo", color: "#ffff", position: "absolute", top: 0, right: 0, height: 40, width: 40, borderRadius: "50%", display: "grid", placeItems: "center", placeContent: "center" }}>
                    <p>{quantity}</p>
                </div>
            }
            <img className='product-image' src={image} alt="" />
            <h3>{model}</h3>
            <p>Price: ${price}</p>
            <p>Rating: {rating}star</p>
            {
                (pathname !== "/cart") ?
                    <button onClick={() => dispatch(addToCart(product))} className='product-cart-button'>Add to cart</button>
                    :
                    <button onClick={() => dispatch(removeFromCart(product))} className='product-remove-button'>Remove from cart</button>
            }
        </div>
    );
};

export default ProductCard;