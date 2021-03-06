import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/orders Review">Order Review</a>
                <a href="/inventory ">Manage Inventory here</a>
            </nav>
        </div>
    );
};

export default Header;