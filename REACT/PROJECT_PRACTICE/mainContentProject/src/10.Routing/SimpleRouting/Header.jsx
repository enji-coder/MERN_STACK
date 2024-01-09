/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import "./index.css"
export default function Header() {
  return (
    <div>
      <ul style={{listStyle:'none'}}>
          <li><NavLink to={"/"}> Home</NavLink></li>
          <li><NavLink to={"/about"}>About</NavLink></li>
          <li><NavLink to={"/contact"}> Contact </NavLink></li>
        </ul> 
    </div>
  )
}
