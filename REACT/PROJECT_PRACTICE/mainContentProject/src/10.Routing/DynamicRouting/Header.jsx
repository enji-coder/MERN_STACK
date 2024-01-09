/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Nav, NavItem, Navbar, NavbarBrand, NavLink as NavLinkStrap } from 'reactstrap'
import "./index.css";
export default function Header() {
    
    const [active,setActive] = useState("about");

    return (
        <div>
            <Navbar className="my-2" color="dark" dark>
                <NavbarBrand>
                    <NavLinkStrap><NavLink to={"/"}>Home</NavLink></NavLinkStrap>   
                </NavbarBrand>
                <NavbarBrand>
                    <NavLink to={"/about"}>About Us</NavLink>
                </NavbarBrand>
                <NavbarBrand>
                    <NavLink to={"/contact"}>Contact Us</NavLink>
                </NavbarBrand>
                <NavbarBrand>
                    <NavLink to={"/course"}>Courses</NavLink>
                </NavbarBrand>
                <NavbarBrand>
                    <NavLink to={"/products"}>Products</NavLink>
                </NavbarBrand>
            </Navbar>

{/* <Nav fill justified pills tabs>
                <NavItem onClick={()=>setActive("home")}>
                    <NavLinkStrap  active={active==="home"}>
                        <NavLink to={"/"} >Home</NavLink>
                    </NavLinkStrap>
                </NavItem>
                <NavItem onClick={()=>setActive("about")}>
                    <NavLinkStrap  active={active==="about"}>
                        <NavLink to={"/about"}>About</NavLink>
                    </NavLinkStrap>
                </NavItem>
                <NavItem onClick={()=>setActive("contact")}>
                    <NavLinkStrap  active={active==="contact"}>
                        <NavLink to={"/contact"}>Contact</NavLink>
                    </NavLinkStrap>
                </NavItem></Nav> */}

        </div>
    )
}
