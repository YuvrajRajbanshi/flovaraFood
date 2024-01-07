import React from 'react'
import { useSelector } from 'react-redux'

const Button = () => {


    const addCart = useSelector((state) => state.cart.cart)
    const totalQty = addCart.reduce((totalQty, item) => totalQty + item.qty, 0);
    const totalPrice = addCart.reduce((totalPrice, item) => totalPrice + item.qty * item.price, 0)




    return (

        <>
            <div className=' fixed right-[150px] bottom-0'>
                <div>
                    <h3 className='font-semibold'>Items: <span className=' text-green-500'>{totalQty}</span></h3>
                    <h3>Total Amount:  <span className=' text-green-500'>₹{totalPrice}</span></h3>

                </div>

                <div className='  flex justify-center items-center '>
                    <button className=' bg-green-500  text-white font-semibold text-center py-2.5 w-[100%] rounded-lg'>Chekout</button>
                </div>
            </div>
        </>
    )
}

export default Button