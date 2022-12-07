import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../Products/ProductCard';

const Cart = () => {
    const cartProducts = useSelector(state => state.product.cart);
    return (
        <div>
            <h1 className="header">Cart Products</h1>
            <div className='products'>
                {
                    cartProducts?.length ?
                        cartProducts.sort((a, b) => a.id - b.id).map((product, index) => <ProductCard
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