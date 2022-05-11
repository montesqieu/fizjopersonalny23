import React, { useState } from "react"
import styled from "styled-components"
import { navigation, nav_toggle } from '../styles/navbar.module.css'
import NavLinks from "./NavLinks"
import Logo from './Logo'

const Navbox = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  padding-top: 5vh;
  background-color: #fff;
  transition: all 0.3s ease-in;
  top: 16vh;
  right: ${props => (props.open ? "-100%" : "0")};

  @media only screen and (min-width: 768px) {
    position: static;
    height: 100%;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    background-color: transparent;
    padding-top: 0;
  }
`

const Hamburger = styled.div`
  background-color: #fff;
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #fff;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <nav className={navigation}>
      <Logo />
      <div className={nav_toggle}
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </div>
      {navbarOpen ? (
        <Navbox>
          <NavLinks />
        </Navbox>
      ) : (
        <Navbox open>
          <NavLinks />
        </Navbox>
      )}
    </nav>
  )
}

export default Navbar