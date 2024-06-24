import React from 'react';
import '../Styles/Footer.scss'
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import logoFooter from '../images/logos.png'
const Footer = () => {
    return (
        <div className='footer'>
            <img src={logoFooter} alt=""/>
            <div className='footer_contacts'>
                <a href='tel:+9965082006'><IoIosContact /> +99650820026</a>
            </div>
            <div className='footer_icons'>
                <a href='https://www.instagram.com/'><FaInstagram /> INSTAGRAM</a>
                <a href='https://wa.me/996508200206'><FaWhatsapp /> WHATSAPP</a>
                <a href='https://t.me/SyrgakUsupov'><FaTelegramPlane /> TELEGRAM</a>

            </div>
        </div>
    );
};

export default Footer;