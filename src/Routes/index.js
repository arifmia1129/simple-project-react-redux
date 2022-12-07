import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Products from '../Pages/Products/Products';
import Navbar from '../Pages/Shared/Navbar';
import TopRatedProduct from '../Pages/TopRatedProduct/TopRatedProduct';

const Index = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Products />} />
                <Route path='/top-rated' element={<TopRatedProduct />} />
            </Routes>
        </div>
    );
};

export default Index;