import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { addToCart, removeFromCart } from '../../redux/actionCreators/productAction';
import { ADD_TO_CART } from '../../redux/actionTypes/productActionTypes';

const ProductCard = ({ product }) => {
    const { model, price, rating, image } = product;

    const dispatch = useDispatch();

    const { pathname } = useLocation();

    return (
        <div className='product-card'>
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