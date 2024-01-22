import React, {useContext, useEffect, useState} from 'react';
import {IProduct} from "../../ProductInterface/ProductInterface";
import {useParams} from "react-router-dom";
import axios from "axios";
import '../../Styles/Params.scss'
import {ModalContext} from "../../utils/Context";

const Params = () => {
    const {addToCart} = useContext(ModalContext)
    const [productParams, setProductParams] = useState<IProduct>()
    const params = useParams()

    useEffect(() => {

        axios.get<IProduct>(`https://example-data.draftbit.com/products/${params.id}`)
            .then(({data}) => setProductParams(data))

    }, [])

    return (
        <div className='params'>

            {productParams  && <div className='params_product' key={productParams.id}>

                <img src={productParams.image_url} alt=""/>
                <div className='params_text'>
                    <h3>{productParams.name}</h3>
                    <p>{productParams.description}</p>
                    <h4> price: <i>{productParams.list_price} $</i> <b>{productParams.sale_price} $</b> </h4>


                    <button onClick={() => addToCart(productParams)}>Add to card</button>








                </div>

            </div>}


        </div>
    );
};

export default Params;