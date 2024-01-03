import React from 'react'
import TimeTable from '../components/TimeTable'
import NavBar from '../components/NavBar'
import FoodCard from '../components/FoodCard'
import CartPage from '../components/cart/CartPage'

const Hero = () => {
    return (

        <>
            <TimeTable />
            <NavBar />
            <FoodCard />
            <CartPage />


        </>
    )
}

export default Hero