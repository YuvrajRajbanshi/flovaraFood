import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Hero from './Hero'
import Success from './Success'
import Error from './Error'

const Layout = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Hero />}  >  </Route>
                <Route path='/success' element={<Success />}  >  </Route>
                <Route path='/*' element={<Error />}  >  </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Layout