import React from 'react'
import {
          footer_box,
          footer_grid,
          footer_item,
          footer_info,
          footer_title,
          footer_body
        }
        from '../styles/footer.module.css'
import NavbarFooter from "./NavbarFooter"

export default function Footer() {
  return (
    <footer className={footer_box}>
      <div className={footer_grid}>
        <div className={footer_item}>
          <div className={footer_title}>Moja Misja</div>
          <div className={footer_body}>
            <p>Moim celem jest wyposażyć 1 milion Polek i Polaków w wiedzę oraz narzędzia, które pozwolą im skutecznie poprawić ich sprawność fizyczną, by mogli być zadowoleni z poziomu swojej aktywności w każdym wieku. Dlatego stworzyłem to miejsce. Jeżeli czujesz, że stać Cię na więcej, to jesteś w dobrym miejscu. Będzie trudno, będzie ciężko, będzie pot i chwile zwątpienia, ale damy radę!</p>
          </div>
        </div>
        <div className={footer_item}>
          <div className={footer_title}>Szybki dostęp</div>
          <div className={footer_body}>
            <NavbarFooter />
          </div>
        </div>
        <div className={footer_item}>
          <div className={footer_title}>Newsletter</div>
          <div className={footer_body}>
            <p>LOrem ipsum et facil to plamen georu fdokf kok. LOrem ipsum et facil to plamen georu fdokf kok. LOrem ipsum et facil to plamen georu fdokf kok. </p>
          </div>
        </div>
      </div>
        <div className={footer_info}>
          <p>2022 © Prawa autorskie należą do firmy Fizjoterapia Personalna | Projekt i wykonanie: Łukasz Kaleńczuk</p>
        </div>
    </footer>
  )
}