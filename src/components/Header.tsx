import React, {useContext} from 'react';
import '../Styles/Header.scss'
import Logo from '../images/logo-removebg-preview.png'
import { IoArrowBackSharp } from "react-icons/io5"
import { FaShoppingBasket } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import {NavLink} from "react-router-dom";
import {ModalContext} from "../utils/Context";



const Header = () => {
    const {cartStateAmount,goBack} = useContext(ModalContext)
    return (
        <div className='Header'>
                <div className='Header_logo'>
                    <button onClick={goBack}><IoArrowBackSharp /></button>
                    <img src={Logo} alt=""/>
                </div>



            <div className='Header_menu'>
                <NavLink to='/'>Home</NavLink>

            </div>
            <div className='Header_icons'>
                <p>usupovsyrgak</p>
                <NavLink to='/cart'><FaHeart/>0</NavLink>
                <NavLink to='/cart'><FaShoppingBasket/>{cartStateAmount}</NavLink>

            </div>


        </div>
    );
};

export default Header;