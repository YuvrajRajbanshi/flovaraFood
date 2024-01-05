import React from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import { BsDash } from "react-icons/bs";
import { FaTrash } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/slices/CartSlices';

const Items = ({ id, name, qty, price, img }) => {


    const dispatch = useDispatch();

    return (
        <>

            <div className=' flex my-3  items-center justify-between rounded-md bg-gray-200 h-16 w-[90%] mx-auto p-3'>
                <img src={img}
                    className=' h-14 w-14 '
                />
                <div>
                    <h1 className='font-semibold '> {name} </h1>
                    <span className=' text-green-500'>₹{price}</span>
                </div>

                <div className=' relative'>
                    <FaTrash onClick={() => dispatch(removeFromCart({ id, img, name, price, qty }))} className='
                    cursor-pointer
                    absolute right-0' />
                    <div className=' flex  items-center  gap-3 mt-6'>
                        <AiOutlinePlus className='  border-red-500 border-2 
                         text-black text-2xl p-1 rounded-md cursor-pointer ' />
                        <span>{qty}</span>
                        <BsDash className='  border-red-500 border-2 
                         text-black text-2xl p-1 rounded-md cursor-pointer ' />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Items