import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../Products/ProductCard';

const Cart = () => {
    const cartProducts = useSelector(state => state.cart.cart);
    // sort((a, b) => a.position - b.position).
    return (
        <div>
            <h1 className="header">Cart Products</h1>
            <div className='products'>
                {
                    cartProducts?.length ?
                        cartProducts.map((product, index) => <ProductCard
                            key={index}
                            product={product}
                        />)
                        :
                        <p>Products not added to cart</p>
                }
            </div>
        </div>
    );
};

export default Cart;