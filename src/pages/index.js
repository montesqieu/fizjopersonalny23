import React from 'react'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Button1 from '../components/Button1'
import Button2 from '../components/Button2'
import { graphql, Link } from 'gatsby'
import {
          header_screen,
          header,
          header_info,
          header_img,
          btn_box,
          btn_1,
          btn_2,
          btn,
          second_screen,
          section_header,
          section_subheader,
          section_paragraph,
          grid_box,
          grid_item,
          grid_icon,
          value_screen,
          testimonial_screen,
          testimonial_grid,
          testimonial_item,
          testimonial_stars,
          testimonial_text,
          testimonial_client,
          testimonial_profession,
          testimonial_source,
        }
        from '../styles/home.module.css'
import { GiBackPain } from "@react-icons/all-files/gi/GiBackPain";
import { FaUserInjured } from "@react-icons/all-files/fa/FaUserInjured";
import { FaFlagCheckered } from "@react-icons/all-files/fa/FaFlagCheckered";
import { FaRunning } from "@react-icons/all-files/fa/FaRunning";
import { GiShrimp } from "@react-icons/all-files/gi/GiShrimp";
import { GiStopSign } from "@react-icons/all-files/gi/GiStopSign";
import { FaStar } from "@react-icons/all-files/fa/FaStar";
import { GatsbyImage } from "gatsby-plugin-image"

function shuffle(array) {
  const length = array == null ? 0 : array.length;

  if (!length) {
    return [];
  }

  let index = -1;

  const lastIndex = length - 1;
  const result = [...array];

  while (++index < length) {
    const rand = index + Math.floor(Math.random() * (lastIndex - index + 1));
    const value = result[rand];
    result[rand] = result[index];
    result[index] = value;
  }

  return result;
}

export default function Home({ data }) {
  console.log(data)
  const testimonial = shuffle(data.testimonial.nodes).slice(0, 4);
  
  return (
    <Layout>
      <div className={header_screen}>
          <Navbar />
        <div className={header}>
          <div className={header_img}>
            <GatsbyImage image={data.obraz.childImageSharp.gatsbyImageData} alt="banner"/>
          </div>
          <div className={header_info}>
            <span>Odbuduj codzienną sprawność</span>
            <h1>Fizjoterapia i trening personalny zgrane z Twoimi potrzebami</h1>
            <p>Jestem wyspecjalizowanym fizjoterapeutą i trenerem personalnym, który koncentruje się na tym, aby pomóc Ci odzyskać sprawność i dobre samopoczucie.</p>
            <div className={btn_box}>
              <div className={btn_1}><Button1 /></div>           
              <div className={btn_2}><Button2 /></div>
            </div>
          </div>
        </div>
      </div>
      <div className={second_screen} id="scroll">
        <h2 className={section_header}>Fizjoterapia i trening dla zasiedzianych</h2>
        <div className={section_subheader}>Czy jesteś we właściwym miejscu?</div>
        <p className={section_paragraph}>Fizjoterapia i trening to kompletny zestaw terapeutyczno-ruchowy, którego potrzebujesz. Skąd to wiem? Zbudowałem to miejsce dla osób takich jak Ty. Mogę się mylić, dlatego sprawdźmy czy faktycznie jesteś we właściwym miejscu. Jeśli chociaż jedno z poniższych stwierdzeń dotyczy Ciebie to zostajesz tu na dłużej i czytasz dalej, zgoda?</p>
        <div className={grid_box}>
          <div className={grid_item}>
            <div className={grid_icon}><GiBackPain /></div>
            <p>cierpisz z powodu bólu pleców</p>
          </div>
          <div className={grid_item}>
            <div className={grid_icon}><FaUserInjured /></div>
            <p>nękają Cię kontuzje i/lub urazy</p>
          </div>
          <div className={grid_item}>
            <div className={grid_icon}><FaFlagCheckered /></div>
            <p>posiadasz ulotną motywację do ćwiczeń</p>
          </div>
          <div className={grid_item}>
            <div className={grid_icon}><FaRunning /></div>
            <p>Twoja technika ćwiczeń wymaga poprawy</p>
          </div>
          <div className={grid_item}>
            <div className={grid_icon}><GiShrimp /></div>
            <p>irytuje Cię Twoja zgarbiona sylwetka</p>
          </div>
          <div className={grid_item}>
            <div className={grid_icon}><GiStopSign /></div>
            <p>masz opór przed wykonywaniem ćwiczeń</p>
          </div>
        </div>
        <p className={section_paragraph}>Wielu za nas nie potrafi samodzielnie poradzić sobie z bólem, niewiedzą czy motywacją. To normalne. Jesteśmy ludźmi, mamy swoje wzloty i upadki. Czasem potrzebujemy kogoś, kto poprowadzi nas i wesprze na drodze ku byciu zdrowszym i szczęśliwszym.</p>
        <div className={btn}>
          <Button1 />
        </div>
      </div>
      <div className={value_screen}>
        <h2 className={section_header}>Fizjoterapia i trening - zestaw kompletny</h2>
        <div className={section_subheader}>Odzyskaj kontrolę nad sprawnym ciałem</div>
        <p className={section_paragraph}>Fizjoterapia i trening to kompletny zestaw terapeutyczno-ruchowy, którego potrzebujesz. Skąd to wiem? Zbudowałem to miejsce dla osób takich jak Ty. Mogę się mylić, dlatego sprawdźmy czy faktycznie jesteś we właściwym miejscu. Jeśli chociaż jedno z poniższych stwierdzeń dotyczy Ciebie to zostajesz tu na dłużej i czytasz dalej, zgoda?</p>
        <div>test test test test test test test test test test test test </div>
        <div>test test test test test test test test test test test test </div>
        <div>test test test test test test test test test test test test </div>
        <div>test test test test test test test test test test test test </div>
        <div>test test test test test test test test test test test test </div>
        <div>test test test test test test test test test test test test </div>
        <div>test test test test test test test test test test test test </div>
        <div>test test test test test test test test test test test test </div>
        <div>test test test test test test test test test test test test </div>
        <div>test test test test test test test test test test test test </div>
        <div>test test test test test test test test test test test test </div>
        <div>test test test test test test test test test test test test </div>
        <div className={btn}>
          <Button1 />
        </div>
      </div>
      <div className={testimonial_screen}>
        <div className={testimonial_grid}>
          {testimonial.map(testimonial => (
            <div className={testimonial_item}>
              <div className={testimonial_stars}><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></div>
              <div className={testimonial_text}>{testimonial.frontmatter.opinion}</div>
              <div className={testimonial_client}>{testimonial.frontmatter.client}</div>
              <div className={testimonial_profession}>{testimonial.frontmatter.profession}</div>
              <div className={testimonial_source}>źródło: {testimonial.frontmatter.source}</div>
            </div>
            ))}
        </div>
      </div>
      <div className={value_screen}>
        <h2 className={section_header}>Fizjoterapia i trening - zestaw kompletny</h2>
        <div className={section_subheader}>Odzyskaj kontrolę nad sprawnym ciałem</div>
        <p className={section_paragraph}>Fizjoterapia i trening to kompletny zestaw terapeutyczno-ruchowy, którego potrzebujesz. Skąd to wiem? Zbudowałem to miejsce dla osób takich jak Ty. Mogę się mylić, dlatego sprawdźmy czy faktycznie jesteś we właściwym miejscu. Jeśli chociaż jedno z poniższych stwierdzeń dotyczy Ciebie to zostajesz tu na dłużej i czytasz dalej, zgoda?</p>
        <div>test test test test test test test test test test test test </div>
        <div>test test test test test test test test test test test test </div>
        <div>test test test test test test test test test test test test </div>
        <div>test test test test test test test test test test test test </div>
        <div>test test test test test test test test test test test test </div>
        <div>test test test test test test test test test test test test </div>
        <div>test test test test test test test test test test test test </div>
        <div>test test test test test test test test test test test test </div>
        <div>test test test test test test test test test test test test </div>
        <div>test test test test test test test test test test test test </div>
        <div>test test test test test test test test test test test test </div>
        <div>test test test test test test test test test test test test </div>
        <div className={btn}>
          <Button1 />
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
query Home {
  obraz: file(relativePath: {eq: "003.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  testimonial: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(testimonials)/"}}) {
    nodes {
      frontmatter {
        client
        profession
        opinion
        source
      }
    }
  }
}
`