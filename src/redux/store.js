import { configureStore } from '@reduxjs/toolkit'
import CartSlice from './slices/CartSlices.jsx'

const store = configureStore({

    reducer: {
        cart: CartSlice
    }
})

export default store