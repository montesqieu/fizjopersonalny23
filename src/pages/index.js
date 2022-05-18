import React from 'react'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Button1 from '../components/Button1'
import Button2 from '../components/Button2'
import Toggle from '../components/Toggle'
import { graphql, Link } from 'gatsby'
import {
          header_screen,
          header_box,
          header_info,
          header_img,
          header_btn_box,
          btn_1,
          btn_2,
          btn,
          client_screen,
          section_header,
          section_subheader,
          section_paragraph,
          client_grid_box,
          client_grid_item,
          client_grid_icon,
          services_screen,
          services_grid,
          services_item,
          services_image,
          services_title,
          services_content,
          services_buttom,
          ref_screen,
          ref_grid,
          ref_item,
          ref_stars,
          ref_text,
          ref_client,
          ref_profession,
          price_screen
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
  const reference = shuffle(data.reference.nodes).slice(0, 4);
  const service = data.service.nodes;
  
  return (
    <Layout>
      <div className={header_screen}>
          <Navbar />
        <div className={header_box}>
          <div className={header_img}>
            <GatsbyImage image={data.obraz.childImageSharp.gatsbyImageData} alt="banner"/>
          </div>
          <div className={header_info}>
            <span>Odbuduj codzienną sprawność</span>
            <h1>Fizjoterapia i trening personalny zgrane z Twoimi potrzebami</h1>
            <p>Jestem wyspecjalizowanym fizjoterapeutą i trenerem personalnym, który koncentruje się na tym, aby pomóc Ci odzyskać sprawność i dobre samopoczucie.</p>
            <div className={header_btn_box}>
              <div className={btn_1}><Button1 /></div>           
              <div className={btn_2}><Button2 /></div>
            </div>
          </div>
        </div>
      </div>
      <div className={client_screen} id="scroll">
        <h2 className={section_header}>Fizjoterapia i trening dla zasiedzianych</h2>
        <div className={section_subheader}>Czy jesteś we właściwym miejscu?</div>
        <p className={section_paragraph}>Fizjoterapia i trening to kompletny zestaw terapeutyczno-ruchowy, którego potrzebujesz. Skąd to wiem? Zbudowałem to miejsce dla osób takich jak Ty. Mogę się mylić, dlatego sprawdźmy czy faktycznie jesteś we właściwym miejscu. Jeśli chociaż jedno z poniższych stwierdzeń dotyczy Ciebie to zostajesz tu na dłużej i czytasz dalej, zgoda?</p>
        <div className={client_grid_box}>
          <div className={client_grid_item}>
            <div className={client_grid_icon}><GiBackPain /></div>
            <p>cierpisz z powodu bólu pleców</p>
          </div>
          <div className={client_grid_item}>
            <div className={client_grid_icon}><FaUserInjured /></div>
            <p>nękają Cię kontuzje i/lub urazy</p>
          </div>
          <div className={client_grid_item}>
            <div className={client_grid_icon}><FaFlagCheckered /></div>
            <p>posiadasz ulotną motywację do ćwiczeń</p>
          </div>
          <div className={client_grid_item}>
            <div className={client_grid_icon}><FaRunning /></div>
            <p>Twoja technika ćwiczeń wymaga poprawy</p>
          </div>
          <div className={client_grid_item}>
            <div className={client_grid_icon}><GiShrimp /></div>
            <p>irytuje Cię Twoja zgarbiona sylwetka</p>
          </div>
          <div className={client_grid_item}>
            <div className={client_grid_icon}><GiStopSign /></div>
            <p>masz opór przed wykonywaniem ćwiczeń</p>
          </div>
        </div>
        <p className={section_paragraph}>Wielu za nas nie potrafi samodzielnie poradzić sobie z bólem, niewiedzą czy motywacją. To normalne. Jesteśmy ludźmi, mamy swoje wzloty i upadki. Czasem potrzebujemy kogoś, kto poprowadzi nas i wesprze na drodze ku byciu zdrowszym i szczęśliwszym.</p>
        <div className={btn}>
          <Button1 />
        </div>
      </div>
      <div className={services_screen}>
        <h2 className={section_header}>Fizjoterapia i trening - zestaw kompletny</h2>
        <div className={section_subheader}>Odzyskaj kontrolę nad sprawnym ciałem</div>
        <div className={services_grid}>
          <div className={services_item}>
            {service.map(service => (
              <div className={services_image}>
                <GatsbyImage image={service.childImageSharp.gatsbyImageData} alt="fizjoterapia bólu pleców"/>
              </div>
            ))}
            <div className={services_title}>Fizjoterapia bólu pleców</div>
            <div className={services_content}>treść</div>
            <div className={services_buttom}>Czytaj dalej</div>
          </div>
        </div>

        <Toggle
          title="Zobacz jak wygląda pierwsza wizyta"
          titlesize="20"
          titleweight="600"
          titlecolor="000"
        >



        </Toggle>

        <div className={btn}>
          <Button1 />
        </div>
      </div>
      <div className={ref_screen}>
        <div className={ref_grid}>
          {reference.map(reference => (
            <div className={ref_item}>
              <div className={ref_stars}><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></div>
              <div className={ref_text}>{reference.frontmatter.opinion}</div>
              <div className={ref_client}>{reference.frontmatter.client}</div>
              <div className={ref_profession}>{reference.frontmatter.profession}</div>
            </div>
            ))}
        </div>
      </div>
      <div className={price_screen}>
        <div className={section_header}>Cennik</div>
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
  reference: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(references)/"}}) {
    nodes {
      frontmatter {
        client
        profession
        opinion
        source
      }
    }
  }
  service: allFile(filter: {absolutePath: {regex: "/(services)/"}}) {
    nodes {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
      name
    }
  }
}
`