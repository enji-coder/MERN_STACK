/* eslint-disable no-unused-vars */
import React from 'react'
import Home from './Home'
import Contact from './Contact'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import About from './About'
import Error404 from './Error404'
import Header from './Header'

export default function Router() {
  return (
    <div>
    <BrowserRouter>

        {/* <ul style={{listStyle:'none'}}>
          <li><Link to={"/"}> Home</Link></li>
          <li><Link to={"/about"}>About</Link></li>
          <li><Link to={"/contact"}> Contact </Link></li>
        </ul> */}

        <Header/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' Component={Contact} />
            <Route path='*' Component={Error404} />
            {/* <Home/>
            <Contact/> */}
        </Routes>
    </BrowserRouter>
    </div>
  )
}   

