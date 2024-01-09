/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Header from './Header'
export default function Router() {
  return (
    <div>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' Component={Home}/>
                <Route path='/about' Component={About}/>
                <Route path='/contact' Component={Contact}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
