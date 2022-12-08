import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from '../Pages/Cart/Cart';
import AddProduct from '../Pages/Dashboard/AddProduct';
import Dashboard from '../Pages/Dashboard/Dashboard';
import DashboardProducts from '../Pages/Dashboard/DashboardProducts';
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
                <Route path='/cart' element={<Cart />} />
                <Route path='/dashboard' element={<Dashboard />} >
                    <Route path='add-product' element={<AddProduct />} />
                    <Route index element={<DashboardProducts />} />
                </Route>
            </Routes>
        </div>
    );
};

export default Index;