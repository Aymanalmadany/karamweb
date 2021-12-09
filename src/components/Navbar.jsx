import React from 'react';
import classes from './Navbar.module.scss';
import icon from '../Assets/icon.png';
import {NavLink} from 'react-router-dom';
import { AiOutlineBars } from "react-icons/ai";


const Navbar = () => {
    return (
        <header className={classes.header}>
            <div className={classes.header__content}>
                <img src= {icon} alt="" className={classes.header__content__logo}/>
                <nav className={classes.header__content__nav}>
                    <ul>
                        <li >
                            <a href="/">Home</a>
                        </li>
                        <li>
                        <a href="/product">product</a>
                        </li>
                        <li>
                        <a href="/about">about</a>
                        </li>
                    </ul>
                </nav>
                <div className={classes.header__content__taggel}>
                    <AiOutlineBars/>
                </div>
            </div>
        </header>
    )
}

export default Navbar;
