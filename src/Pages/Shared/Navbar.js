import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <p>AB Tech</p>
            <div className='route-element'>

                <Link className='element' to="/">Home</Link>
                <Link className='element' to="/top-rated">Top rated</Link>
                <Link className='element' to="/cart">Cart</Link>
            </div>
        </div>
    );
};

export default Navbar;