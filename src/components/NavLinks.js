import React from "react"
import {
          offer,
          offer_link,
          offer_item,
          offer_icon,
          offer_header,
          nav_item_box,
          nav_item,
          nav_sub_item,
          nav_sub_box,
          nav_dropdown,
          nav_btn
        }
        from '../styles/navbar.module.css'
import { Link } from "gatsby"
import Button1 from './Button1'
import { FaShieldAlt } from "@react-icons/all-files/fa/FaShieldAlt";
import { FaRunning } from "@react-icons/all-files/fa/FaRunning";
import { FaDumbbell } from "@react-icons/all-files/fa/FaDumbbell";

const NavbarLinks = () => {

const subMenu = [
  {title: "Fizjoterapia Bólu Pleców", slug: "/fizjoterapia-bol-plecow", img: <FaShieldAlt />},
  {title: "Trening Medyczny", slug: "/trening-medyczny", img: <FaRunning />},
  {title: "Trening Personalny", slug: "/trening-personalny", img: <FaDumbbell />}
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
        <Link className={nav_item} to="/about">Łukasz</Link>
        <Link className={nav_sub_item} to="/#">Oferta
          <div className={nav_dropdown}>
            <div className={nav_sub_box}>
              {subMenu.map((menu, index) => {
                return (<Link to={menu.slug} key={index}>{menu.img} {menu.title}</Link>)
              })}
            </div>
          </div>
        </Link>
        <Link className={nav_item} to="/blog">Blog</Link>
        <Link className={nav_item} to="/contact">Kontakt</Link>
      </div>
      <div className={nav_btn}>
        <Button1 />
      </div>
    </>
  )
}

export default NavbarLinks