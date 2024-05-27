import React from "react";
import './header.css'
import logo from './img/Logo.png'
import photo1 from './img/Icon.png'
import photo2 from './img/Vector.png'
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(prevState => !prevState);
    };
    return(
        <>
        <div className="headerMain">
            <div className="headerWrap">
                <div className="Logo">
                    <a href=""><img src={logo}/></a>
                </div>
                <div className="logoNav">
                    <ul className={`navMenu ${isMenuOpen ? 'open' : ''}`}>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink>About</NavLink></li>
                        <li><NavLink>Pages</NavLink></li>
                        <li><NavLink>Shop</NavLink></li>
                        <li><NavLink>Projects</NavLink></li>
                        <li><NavLink>News</NavLink></li>
                        <div className="burgerShop">
                            <div className="burgerBasket">
                                <div className="burgerSeaich">
                                    <img src={photo2} alt="" />
                                </div>
                                <div className="burgerBasketImg">
                                    <img src={photo1} alt="" />
                                </div>
                            </div>
                        </div>
                    </ul>
                    <div className="headerShop">
                    <div className="search">
                        <div className="searchImg">
                            <img src={photo2} alt="" />
                        </div>
                    </div>
                    <div className="basket">
                        <div className="basketImg">
                            <img src={photo1} alt="" />
                        </div>
                        <p>Cart (0)</p>
                    </div>
                </div>
                </div>
                <div className={`burgerMenu ${isMenuOpen ? 'active' : ''}`} 
                    onClick={toggleMenu}>
                    <span className="burgerAdd"></span>
                </div>
            </div>
        </div>
        </>
    )
}