import React, {createContext, useEffect, useState} from "react";
import {IProduct} from "../ProductInterface/ProductInterface";
import axios from "axios";
import {useNavigate} from "react-router-dom";

interface IModalContext {
    goBack: () => void
    product: IProduct[]
    cart: IProduct[]
    getProduct: () => void
    searchProducts: (query: string) => void
    addToCart: (product: IProduct) => void
    removeProduct: (id: number) => void
    clearProduct: () => void
    increaseAmount: (id: number) => void
    decreaseAmount: (id: number) => void
    cartStateAmount: number
    total: number
}
export const ModalContext = createContext<IModalContext>({
    goBack: () => {},
    product: [],
    cart: [],
    getProduct: async () => {},
    searchProducts: () => {},
    addToCart: () => {},
    removeProduct: () => {},
    clearProduct: () => {},
    increaseAmount: () => {},
    decreaseAmount: () => {},
    cartStateAmount: 0,
    total: 0


})

export const ModalState: React.FC<{children: React.ReactNode}> =({children}) => {



    const navigate = useNavigate()
    const goBack = () => navigate(-1)





    const [product, setProduct] = useState<IProduct[]>([])

        const getProduct = async () => {

            try {
                const response = await axios.get<IProduct[]>
                ('http://localhost:2222/catalog')
                setProduct(response.data)
                setFilter(response.data)
            }catch (error){
                console.error('error product',error)
            }

    }


    const [filter, setFilter] = useState <IProduct[]>([])
    const searchProducts = (query: string) => {
        const filtered = product.filter((sProducts) =>
            sProducts.title.toLowerCase().includes(query.toLowerCase())
        )
        setFilter(filtered)
    }





    const [cart, setCart] = useState<IProduct[]>([])

    const addToCart = (product: IProduct) => {
        const newItem = { ...product, amount: 1 }

        const cartItem = cart.find(item => item.id === product.id)

        if (cartItem) {
            const newCart = cart.map(item =>
                item.id === product.id ? { ...item, amount: item.amount + 1 } : item
            )
            setCart(newCart)
        } else {
            setCart([...cart, newItem])
        }
    }

    const removeProduct = (id: number) => {
        setCart(cart.filter(item => item.id !== id))
    }

    const clearProduct = () => {
        setCart([])
    }

    const increaseAmount = (id: number) => {
        const cartItem = cart.find(item => item.id === id)
        if (cartItem) {
            addToCart(cartItem)
        }
    }
    const decreaseAmount = (id: number) => {
        const cartItem = cart.find((item) => {
            return item.id === id
        })
        if (cartItem) {
            const newCart = cart.map(item => {
                if (item.id === id) {
                    return {...item, amount: cartItem.amount -1}
                }else {
                    return item
                }
            })
            setCart(newCart)

            if (cartItem.amount < 2) {
                removeProduct(id)
            }
        }
    }

    const [cartStateAmount, setCartStateAmount] = useState(0)

    useEffect(() => {
        if (cart) {
            const amount = cart.reduce((accumulator, currentItem) => {
                return accumulator + currentItem.amount
            }, 0)
            setCartStateAmount(amount)
        }
    },[cart])



    const [ total, setTotal] = useState(0)

    useEffect(() => {
        const total = cart.reduce((accumulator, currentItem) => {
            return accumulator + currentItem.list_price * currentItem.amount
        }, 0)
        setTotal(total)
    })


    const values ={
        goBack,
        product: filter,
        cart,
        getProduct,
        searchProducts,
        addToCart,
        removeProduct,
        clearProduct,
        increaseAmount,
        decreaseAmount,
        cartStateAmount,
        total
    }


        return(
            <ModalContext.Provider value={values}>
                {children}
            </ModalContext.Provider>
        )

}