import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div>
                <Link className='btn mx-2 border rounded-lg p-2' to="/dashboard/add-product">Add Product</Link>
                <Link className='btn mx-2 border rounded-lg p-2' to="/dashboard">Products</Link>
            </div>
            <Outlet />
        </div>
    );
};

export default Dashboard;