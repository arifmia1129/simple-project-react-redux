import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleBrand, toggleStock } from '../../redux/actionCreators/filterActions';
import ProductCard from './ProductCard';

const Products = () => {
    const [products, setProducts] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const state = useSelector(state => state);

    const filter = state.filter.filter;

    const { brand, stock } = filter;

    const activeClass = "p-3 rounded-full mx-2 bg-indigo-800 border-0 font-bold text-white";
    const inActiveClass = "btn p-3 cursor-pointer border-4 rounded-full mx-2";

    return (
        <div>
            <div className='grid place-content-end mt-5'>
                <div className='grid grid-cols-3'>
                    <button onClick={() => dispatch(toggleStock())}
                        className={`${stock ? activeClass : inActiveClass}`}
                    >In Stock</button>
                    <button onClick={() => dispatch(toggleBrand("amd"))} className={`${brand.includes("amd") ? activeClass : inActiveClass}`}>AMD</button>
                    <button onClick={() => dispatch(toggleBrand("intel"))} className={`${brand.includes("intel") ? activeClass : inActiveClass}`}>Intel</button>
                </div>
            </div>
            <h1 className='header'>Products</h1>

            <div className="products">
                {
                    products.map((product, index) => <ProductCard key={index} product={product} />)
                }
            </div>
        </div>
    );
};

export default Products;