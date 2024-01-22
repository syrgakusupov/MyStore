import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import Params from "./pages/Params/Params";
import Catalog from "./pages/Home/Catalog/Catalog";
import Header from "./components/Header";
import Cart from "./pages/Cart/Cart";



function App() {

  return (
    <div className="App">

        <Header/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/catalog' element={<Catalog/>}/>
        <Route path='/params/:id' element={<Params/>}/>
        <Route path='/cart' element={<Cart/>}/>

      </Routes>



    </div>
  );
}

export default App;
