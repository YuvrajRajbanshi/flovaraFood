import React, { useState } from 'react'
import { AiFillStar } from "react-icons/ai";
import FoodData from '../api/FoodData';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/CartSlices';
import { useSelector } from 'react-redux';

const FoodCard = () => {

    const dispatch = useDispatch();
    const [food, setFood] = useState(FoodData)

    return (

        <>

            <div className=' flex justify-center  flex-wrap gap-6'>
                {
                    food.map((curElem) => {
                        const { img, id, price, rating, desc, name } = curElem;

                        return (
                            <>
                                <div className=' my-4'>

                                    <div className=' w-60 bg-white h-[370px]  p-3 shadow-lg
                            rounded-md
                            '>
                                        <img src={curElem.img} className='w-40 h-40 mx-auto' />
                                        <div className='flex justify-between mt-4'>
                                            <h3 className=" font-semibold">{curElem.name} </h3>
                                            <h3 className=' text-green-600'>₹{curElem.price} </h3>
                                        </div>

                                        <h3 className=' text-gray-500'> {curElem.desc.slice(0, 70)}... </h3>

                                        <div className=' flex justify-between mt-5'>
                                            <span className=' flex items-center '>
                                                <AiFillStar /> {curElem.rating}
                                            </span>
                                            <span className=' bg-green-600 text-white rounded-md
                                    px-2 py-1 cursor-pointer
                                    
                                    '
                                                onClick={() => {
                                                    dispatch(addToCart({ id, name, price, rating, img, qty: 1 }));
                                                }}
                                            >
                                                Add to cart
                                            </span>
                                        </div>
                                    </div>
                                </div>

                            </>
                        )


                    })
                }
            </div>
        </>
    )




}

export default FoodCard