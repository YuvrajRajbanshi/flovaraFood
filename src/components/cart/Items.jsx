import React from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import { BsDash } from "react-icons/bs";
import { FaTrash } from "react-icons/fa6";

const Items = () => {
    return (
        <>

            <div className=' flex  items-center justify-between rounded-md bg-gray-200 h-16 w-[90%] mx-auto p-3'>
                <img src="https://w7.pngwing.com/pngs/204/32/png-transparent-crispy-fried-chicken-karaage-chicken-nugget-chicken-fingers-buffalo-wing-carrot-chilli-thumbnail.png"
                    className=' h-14 w-14 '
                />
                <div>
                    <h1 className='font-semibold '>Margherita Pizza</h1>
                    <span className=' text-green-500'>₹130</span>
                </div>

                <div className=' relative'>
                    <FaTrash className=' absolute right-0' />
                    <div className=' flex  items-center  gap-3 mt-6'>
                        <AiOutlinePlus className='  border-red-500 border-2 
                         text-black text-2xl p-1 rounded-md cursor-pointer ' />
                        <span>1</span>
                        <BsDash className='  border-red-500 border-2 
                         text-black text-2xl p-1 rounded-md cursor-pointer ' />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Items