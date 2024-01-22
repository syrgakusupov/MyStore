import React from 'react';
import Navbar from "../../components/Navbar";
import HomePage from "../../components/HomePage";
import '../../Styles/Home.scss'
import Catalog from "./Catalog/Catalog";
import Search from "./Search/Search";
import Cart from "../Cart/Cart";
const Home = () => {
    return (
        <div className='Home'>


            <div className='Home_block'>
                <Navbar/>
                <HomePage/>
            </div>
            <div className='Home_search'>
                <h1>Catalog</h1>
                <Search/>
            </div>
            <div>
                <Catalog/>
            </div>



        </div>
    );
};

export default Home;