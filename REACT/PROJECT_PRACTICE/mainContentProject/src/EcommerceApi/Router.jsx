import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Header from './Header'

export default function Router() {
    return (
       <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" Component={Home} />
            </Routes>
       </BrowserRouter>
    )
}
