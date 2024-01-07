import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { AiFillCloseCircle } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';

import Items from './Items';
import Button from './Button';



const CartPage = () => {
    const [isCartActive, setIsCartActive] = useState(true)

    const addCart = useSelector((state) => state.cart.cart)
    const totalQty = addCart.reduce((totalQty, item) => totalQty + item.qty, 0);
    const hadleToast = () => toast.success(`Added ${name} `);



    return (

        <>

            <Toaster
                position="top-center"
                reverseOrder={false}
            />

            <div className={`fixed top-0 right-0 z-50 transition-all duration-700
             bg-white min-h-screen w-80 shadow-lg ${isCartActive ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className=' flex justify-between m-5'>
                    <h2 className=' text-xl font-semibold'>My Order </h2>
                    < AiFillCloseCircle onClick={() => setIsCartActive()} className=' border-red-500 border-2 
                         text-black text-2xl p-1 rounded-md cursor-pointer' />

                </div>


                {
                    addCart.length > 0 ? addCart.map((food) => {
                        return <Items
                            key={food.id}
                            id={food.id}
                            name={food.name}
                            price={food.price}
                            img={food.img}
                            qty={food.qty}
                            hadleToast={hadleToast}

                        />
                    })
                        : <h2 className=' font-semibold text-center text-2xl'>Empty Cart</h2>
                }
                <Button />
            </div >
            <button>
                <FaShoppingCart
                    onClick={() => setIsCartActive(!isCartActive)}
                    className={`text-5xl bg-white p-2 rounded-full
                fixed bottom-4 right-8 ${totalQty > 0 && "animate-bounce divide-lime-500 transition-all"} `}

                />
            </button>

        </>
    )
}

export default CartPage