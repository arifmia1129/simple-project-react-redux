import React, { useEffect, useState } from 'react';
import ProductCard from '../Products/ProductCard';

const TopRatedProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <h1 className='header'>Top rated products</h1>

            <div className="products">
                {
                    products.filter(p => p.rating > 4).map((product, index) => <ProductCard key={index} product={product} />)
                }
            </div>
        </div>
    );
};

export default TopRatedProduct;