import React from 'react'
import { AiFillCloseCircle } from "react-icons/ai";
import Items from './Items';
import Button from './Button';

const CartPage = () => {
    return (

        <>

            <div className='fixed top-0 right-0 
            
             bg-white min-h-screen w-80 shadow-lg'>
                <div className=' flex justify-between m-5'>
                    <h2 className=' text-xl font-semibold'>My Order </h2>
                    < AiFillCloseCircle className=' border-red-500 border-2 
                         text-black text-2xl p-1 rounded-md cursor-pointer' />

                </div>
                <Items />
                <Button />
            </div>

        </>
    )
}

export default CartPage