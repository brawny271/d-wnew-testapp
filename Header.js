import React from 'react';
import { useSelector } from 'react-redux';
import { getCartItemCount, getUploadItemCount } from './selected';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    const itemCounts = useSelector( getCartItemCount );
    const uploadCount = useSelector(getUploadItemCount)

    return (

        <header className='main-section'>
            <div className='header-div-name'>
            <h1 className='header-name'>HEADER</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link className='link-path-one' to="/">Products</Link>
                    </li>
                    <li>
                        <Link className="link-path-two" to="/cart">Cart  {(itemCounts)}</Link>
                    </li>
                    <li>
                        <Link className='link-path-three' to="./ProductsForm">Upload</Link>
                    </li>
                    <li>
                        <Link className='link-path-four' to="./GetProducts">New Products {(uploadCount)}</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;