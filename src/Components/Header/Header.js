import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import './Header.css';
import logo from './img.jpg'

const Header = () => {
    return (
        
        <Fragment>
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <img src={ logo } alt="" />
                        </div>
                    </div>
                </div>
            </header>

            <nav className="menu">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ul>
                                <li><a href="#">Shop</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default Header;
