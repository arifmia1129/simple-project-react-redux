import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetProductQuery } from '../../features/api/apiSlice';
import { toggleBrand, toggleStock } from '../../features/filter/filterSlice';
import { getProducts } from '../../features/products/productsSlice';
import fetchProducts from '../../redux/thunk/products/fetchProduct';
import ProductCard from './ProductCard';

const Products = () => {

    const dispatch = useDispatch();
    // const [products, setProducts] = useState('');
    const { data: products, error, isLoading } = useGetProductQuery(null, { refetchOnMountOrArgChange: true });
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])

    const state = useSelector(state => state);

    const filter = state.filter;
    // const products = state.products.products;

    const { brand, stock } = filter;

    const activeClass = "p-3 rounded-full mx-2 bg-indigo-800 border-0 font-bold text-white";
    const inActiveClass = "btn p-3 cursor-pointer border-4 rounded-full mx-2";

    let content;

    if (products.length) {
        content = products?.map((product, index) => <ProductCard key={index} product={product} />)
    }

    if (products.length && (stock || brand)) {
        content = products
            .filter(product => {
                if (stock) {
                    return product.status === true;
                }
                return product;
            })
            .filter(product => {
                if (brand.length) {
                    return brand.includes(product.brand);
                }
                return product;
            })
            .map((product, index) => <ProductCard key={index} product={product} />)
    }

    if (isLoading) {
        return <p>Loading....</p>
    }

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
                    content
                }
            </div>
        </div>
    );
};

export default Products;