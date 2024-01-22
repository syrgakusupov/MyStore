import React, {useContext} from 'react';
import {ModalContext} from "../utils/Context";
import '../Styles/Cart.scss'
import { CiCircleRemove } from "react-icons/ci";
const Cart = () => {
    const { cart,setCart } = useContext(ModalContext);

    const removeProduct = (id:number) => {
        setCart(cart.filter(item => item.id !== id))
    }

    return (

        <div className='cart'>
            {cart.length ? (
                <div>
                    {cart.map(item => (
                        <div className='item' key={item.id}>
                            <div className='item_product'>
                                <img src={item.image_url} alt="img" />
                                <h3>{item.name}</h3>
                            </div>

                            <button onClick={() => removeProduct(item.id)}><CiCircleRemove /></button>
                        </div>
                    ))}
                </div>)
                :(
                <div className='cart_null'>

                    <h1>У вас нет заказов :(</h1>
                </div>
            )}
        </div>

    );
};

export default Cart;
