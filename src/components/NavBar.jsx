import React from 'react'

const NavBar = () => {
    return (
        <>
            <ul className=' flex gap-7 ml-10  '>
                <li className='bg-indigo-400 px-2 py-0.5 font-semibold
                hover:bg-red-300 hover:text-white transition duration-2000
                ease-in-out '>all</li>
                <li className='bg-indigo-400 px-2 py-0.5 font-semibold
                hover:bg-red-300 hover:text-white transition duration-2000
                ease-in-out ' >Lunch</li>
                <li className='bg-indigo-400 px-2 py-0.5 font-semibold
                hover:bg-red-300 hover:text-white transition duration-2000
                ease-in-out ' >Breakfast</li>
                <li className='bg-indigo-400 px-2 py-0.5 font-semibold
                hover:bg-red-300 hover:text-white transition duration-2000
                ease-in-out ' >Dinner</li>
                <li className='bg-indigo-400 px-2 py-0.5 font-semibold
                hover:bg-red-300 hover:text-white transition duration-2000
                ease-in-out ' >Snacks</li>
            </ul>


        </>
    )
}

export default NavBar