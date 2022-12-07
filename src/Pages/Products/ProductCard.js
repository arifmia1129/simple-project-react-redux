import React from 'react';
import { useDispatch } from 'react-redux';
import { ADD_TO_CART } from '../../redux/actionTypes/productActionTypes';

const ProductCard = ({ product }) => {
    const { model, price, rating, image } = product;

    const dispatch = useDispatch();
    return (
        <div className='product-card'>
            <img className='product-image' src={image} alt="" />
            <h3>{model}</h3>
            <p>Price: ${price}</p>
            <p>Rating: {rating}star</p>
            <button onClick={() => dispatch({ type: ADD_TO_CART, payload: product })} className='product-cart-button'>Add to card</button>
        </div>
    );
};

export default ProductCard;