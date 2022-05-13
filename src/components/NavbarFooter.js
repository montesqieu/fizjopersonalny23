import React from 'react'
import { Link } from 'gatsby'
import {
        footer_menu_box,
        footer_menu_item
        }
        from '../styles/footer.module.css'

export default function NavbarFooter() {
  return (
    <ul className={footer_menu_box}>
        <li className={footer_menu_item}>
            <Link to="">Polityka prywatności</Link>
        </li>
        <li className={footer_menu_item}>
            <Link to="">Cennik</Link>
        </li>
        <li className={footer_menu_item}>
            <Link to="">Dokumenty</Link>
        </li>
        <li className={footer_menu_item}>
            <Link to="">Kompetencje</Link>
        </li>
        <li className={footer_menu_item}>
            <Link to="">Współpraca</Link>
        </li>
    </ul>
  )
}
