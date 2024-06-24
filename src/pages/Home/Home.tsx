import React, {useEffect, useState} from 'react';
import HomePage from "../../components/HomePage";
import '../../Styles/Home.scss'
import Catalog from "./Catalog/Catalog";
import Search from "./Search/Search";

const Home = () => {
    return (
        <div className='Home'>
            <div className='Home_block'>

                <HomePage/>
            </div>
            <div className='Home_search'>
                <h1>КАТАЛОГ</h1>
                <Search/>
            </div>
            <div>
                <Catalog/>
            </div>



        </div>
    );
};

export default Home;