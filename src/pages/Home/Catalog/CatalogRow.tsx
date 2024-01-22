import React, {useContext} from 'react';
import {ModalContext} from "../../../utils/Context";
import {NavLink} from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import { FaCartArrowDown } from "react-icons/fa"
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
const CatalogRow = () => {
    const {product,addToCart} = useContext(ModalContext)
    return (
        <div className='catalog_row'>


            {
                product.map((item) =>(
                    <div className='product' key={item.id}>
                        <NavLink to={`/params/${item.id}`}>
                            <img src={item.image_url} alt=""/>
                        </NavLink>
                        <NavLink to={`/params/${item.id}`}>
                            <p>{item.name || <Skeleton/>}</p>
                        </NavLink>

                            <IconButton onClick={() => addToCart(item)} aria-label="add to shopping cart">
                                <FaCartArrowDown />
                            </IconButton>




                    </div>

                ))
            }
        </div>
    );
};

export default CatalogRow;