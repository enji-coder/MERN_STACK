/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Header from './Header'
import Course from './Courses/Course'
import FrontEnd from './Courses/FrontEnd'
import FullStack from './Courses/FullStack'
import Products from './RealExampleDynamicRouting/Products'
import ProductDetails from './RealExampleDynamicRouting/ProductDetails'
export default function Router() {
  return (
    <div>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' Component={Home}/>

                {/* dynamic routing - send data from one route to another route */}
                <Route path='/about/:name' Component={About}/>

                <Route path='/contact' Component={Contact}/>
                {/* nested routing example */}
                <Route path='/course'>
                      <Route index Component={Course} />
                      <Route path='frontend' Component={FrontEnd}/>
                      <Route path='fullstack' Component={FullStack}/>
                </Route>

                <Route path='/products' Component={Products}/>
                <Route path='/products/:id' Component={ProductDetails}/>

            </Routes>
        </BrowserRouter>
    </div>
  )
}
