/* eslint-disable no-unused-vars */
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Nav, NavItem, Navbar, NavbarBrand } from 'reactstrap'
import "./index.css";
export default function Header() {
    return (
        <div>
            <Navbar className="my-2" color="dark" dark>
                <NavbarBrand>
                    <NavLink to={"/"}>Home</NavLink>
                </NavbarBrand>
                <NavbarBrand>
                    <NavLink to={"/about"}>About Us</NavLink>
                </NavbarBrand>
                <NavbarBrand>
                    <NavLink to={"/contact"}>Contact Us</NavLink>
                </NavbarBrand>
            </Navbar>
        </div>
    )
}
