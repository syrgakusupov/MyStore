import React, {useContext, useEffect, useState} from 'react';
import {IProduct} from "../../ProductInterface/ProductInterface";
import {useParams} from "react-router-dom";
import axios from "axios";
import '../../Styles/Params.scss'
import {ModalContext} from "../../utils/Context";
import { FaCartArrowDown } from "react-icons/fa"

const Params = () => {
    const {addToCart} = useContext(ModalContext)
    const [productParams, setProductParams] = useState<IProduct>()
    const params = useParams()

    useEffect(() => {

        axios.get<IProduct>(`http://localhost:2222/catalog/${params.id}`)
            .then(({data}) => setProductParams(data))

    }, [])

    return (
        <div className='params'>

            {productParams  && <div className='params_product' key={productParams.id}>

                <img src={`../${productParams.img}`} alt=""/>
                <div className='params_text'>
                    <h3>{productParams.title}</h3>
                    <p>{productParams.description}</p>
                    <h4> price: <i>{productParams.list_price} $</i> <b>{productParams.sale_price} $</b> </h4>
                    <div className='params_text_btn'>
                        <div style={{display:'flex',flexDirection:'column',rowGap:'10px'}}>
                            <h1><b>Автор :</b> {productParams.author}</h1>
                            <h1><b>Дата выхода :</b> {productParams.Year}</h1>
                        </div>
                        <button onClick={() => addToCart(productParams)}>Add to card <FaCartArrowDown/></button>
                    </div>

                </div>

            </div>}


        </div>
    );
};

export default Params;