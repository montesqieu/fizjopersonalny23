import React from "react"
import styled from "styled-components"
import {
          offer,
          offer_link,
          offer_item,
          offer_icon,
          offer_header,
          nav_item_box,
          nav_item,
          nav_button,
          menu_test,
          menu_test_item
        }
        from '../styles/navbar.module.css'
import { Link } from "gatsby"
import { FaShieldAlt } from "@react-icons/all-files/fa/FaShieldAlt";
import { FaRunning } from "@react-icons/all-files/fa/FaRunning";
import { FaDumbbell } from "@react-icons/all-files/fa/FaDumbbell";

const NavbarLinks = () => {

const menuItems = [
  {
    title: "Home"
  },
  {
    title: "Services"
  },
  {
    title: "About"
  }
];

  return (
    <>
      <div className={offer}>Usługi</div>
      <Link className={offer_link} to="/oferta/fizjoterapia-bol-plecow">
        <div className={offer_item}>
          <div className={offer_icon}><FaShieldAlt /></div>
          <div className={offer_header}>FIZJOTERAPIA BÓLU PLECÓW
            <p>Opanuj ból kręgosłupa.</p>
          </div>
        </div>
      </Link>
      <Link className={offer_link} to="/oferta/fizjoterapia-bol-plecow">
        <div className={offer_item}>
          <div className={offer_icon}><FaRunning /></div>
          <div className={offer_header}>TRENING MEDYCZNY
            <p>Ruszaj się bezpiecznie.</p>
          </div>
        </div>
      </Link>
      <Link className={offer_link} to="/oferta/fizjoterapia-bol-plecow">
        <div className={offer_item}>
          <div className={offer_icon}><FaDumbbell /></div>
          <div className={offer_header}>TRENING PERSONALNY
            <p>Popraw swoją sylwetkę.</p>
          </div>
        </div>
      </Link>
      <div className={nav_item_box}>
        <Link className={nav_item} to="/about">O mnie</Link>
        <Link className={nav_item} to="/oferta">Oferta</Link>
        <Link className={nav_item} to="/blog">Blog</Link>
        <Link className={nav_item} to="/contact">Kontakt</Link>
      </div>
      <Link className={nav_button} to='/rezerwacja'>Rezerwuję wizytę</Link>

      <nav>
        <ul className={menu_test}>
          {menuItems.map((menu, index) => {
            return (
              <li className={menu_test_item} key={index}>
                <Link to="/#">{menu.title}</Link>
              </li>
            )
          })}
        </ul>
      </nav>

    </>
  )
}

export default NavbarLinks