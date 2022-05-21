import React from 'react'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Button1 from '../components/Button1'
import Button2 from '../components/Button2'
import ToggleHome from '../components/ToggleHome'
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
          service_screen,
          service_grid,
          service_item,
          service_image,
          service_title,
          service_content,
          service_link,
          service_toggle,
          toggle_box,
          toogle_grid,
          toggle_arrow,
          toggle_content,
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
import { FaAngleRight } from "@react-icons/all-files/fa/FaAngleRight";
import { FaAngleDoubleDown } from "@react-icons/all-files/fa/FaAngleDoubleDown";
import { GatsbyImage } from "gatsby-plugin-image"

// Randomowe sortowanie referencji algorytmem Fisher-Yates'a
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

// Szukanie obrazka z folderu "services" po nazwie pliku
function getImageByName(images, name) {
  const image = images.find((image) => image.name === name);

  if (!image) {
    throw new Error(`There is no image with specified name: ${name}`);
  }

  return image.childImageSharp.gatsbyImageData;
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
            <span className={client_grid_icon}><GiBackPain /></span>
            <p>cierpisz z powodu bólu pleców</p>
          </div>
          <div className={client_grid_item}>
            <span className={client_grid_icon}><FaUserInjured /></span>
            <p>nękają Cię kontuzje i/lub urazy</p>
          </div>
          <div className={client_grid_item}>
            <span className={client_grid_icon}><FaFlagCheckered /></span>
            <p>posiadasz ulotną motywację do ćwiczeń</p>
          </div>
          <div className={client_grid_item}>
            <span className={client_grid_icon}><FaRunning /></span>
            <p>Twoja technika ćwiczeń wymaga poprawy</p>
          </div>
          <div className={client_grid_item}>
            <span className={client_grid_icon}><GiShrimp /></span>
            <p>irytuje Cię Twoja zgarbiona sylwetka</p>
          </div>
          <div className={client_grid_item}>
            <span className={client_grid_icon}><GiStopSign /></span>
            <p>masz opór przed wykonywaniem ćwiczeń</p>
          </div>
        </div>
        <p className={section_paragraph}>Wielu za nas nie potrafi samodzielnie poradzić sobie z bólem, niewiedzą czy motywacją. To normalne. Jesteśmy ludźmi, mamy swoje wzloty i upadki. Czasem potrzebujemy kogoś, kto poprowadzi nas i wesprze na drodze ku byciu zdrowszym i szczęśliwszym.</p>
        <div className={btn}>
          <Button1 />
        </div>
      </div>
      <div className={service_screen}>
        <h2 className={section_header}>Fizjoterapia i trening - zestaw kompletny</h2>
        <div className={section_subheader}>Odzyskaj kontrolę nad sprawnym ciałem</div>
        <div className={service_grid}>
          <div className={service_item}>
            <div>
              <GatsbyImage className={service_image} image={getImageByName(service, "fizjoterapia-bol-plecow")} alt="fizjoterapia bólu pleców"/>
            </div>
            <div className={service_content}>
              <h3 className={service_title}><span>Fizjoterapia bólu pleców</span></h3>
              <p>To jest opis usługi, który znajduje się w tym pudełku. Znajduje się tutaj streszczenie opisu usług, który zostanie rozwinięty na stronie docelowej, która jest landing pagem dla określonej usługi. To jest opis usługi, który znajduje się w tym pudełku. Znajduje się tutaj streszczenie opisu usług, który zostanie rozwinięty na stronie docelowej, która jest landing pagem dla określonej usługi.</p>
              <div className={service_link}>Czytaj dalej <FaAngleRight /></div>
            </div>
          </div>
          <div className={service_item}>
            <div>
              <GatsbyImage className={service_image} image={getImageByName(service, "trening-medyczny")} alt="trening medyczny"/>
            </div>
            <div className={service_content}>
              <h3 className={service_title}><span>Trening medyczny</span></h3>
              <p>To jest opis usługi, który znajduje się w tym pudełku. Znajduje się tutaj streszczenie opisu usług, który zostanie rozwinięty na stronie docelowej, która jest landing pagem dla określonej usługi. To jest opis usługi, który znajduje się w tym pudełku. Znajduje się tutaj streszczenie opisu usług, który zostanie rozwinięty na stronie docelowej, która jest landing pagem dla określonej usługi.</p>
              <div className={service_link}>Czytaj dalej <FaAngleRight /></div>
            </div>
          </div>
          <div className={service_item}>
            <div>
              <GatsbyImage className={service_image} image={getImageByName(service, "trening-personalny")} alt="trening personalny"/>
            </div>
            <div className={service_content}>
              <h3 className={service_title}><span>Trening personalny</span></h3>
              <p>To jest opis usługi, który znajduje się w tym pudełku. Znajduje się tutaj streszczenie opisu usług, który zostanie rozwinięty na stronie docelowej, która jest landing pagem dla określonej usługi. To jest opis usługi, który znajduje się w tym pudełku. Znajduje się tutaj streszczenie opisu usług, który zostanie rozwinięty na stronie docelowej, która jest landing pagem dla określonej usługi.</p>
              <Link to="oferta/trening-personalny">
                <div className={service_link}>Czytaj dalej <FaAngleRight /></div>
              </Link>
            </div>
          </div>
        </div>
        {/* <div className={service_toggle}>
            <ToggleHome title="Jak wygląda wizyta?">
              <div className={toggle_box}>
                <p>to jest nagłówek dotyczacy procesu wizyty</p>
                <div className={toogle_grid}>
                  <div className={toggle_content}>
                    <span>1</span>
                    <p>Dokładny wywiad pozwoli na poznanie przyczyn Twoich dolegliwości.</p>
                  </div>
                  <div className={toggle_arrow}><FaAngleDoubleDown /></div>
                  <div className={toggle_content}>
                    <span>2</span>
                    <p>Dokładny wywiad pozwoli na poznanie przyczyn Twoich dolegliwości.</p>
                  </div>
                  <div className={toggle_arrow}><FaAngleDoubleDown /></div>
                  <div className={toggle_content}>
                    <span>3</span>
                    <p>Dokładny wywiad pozwoli na poznanie przyczyn Twoich dolegliwości.</p>
                  </div>
                  <div className={toggle_arrow}><FaAngleDoubleDown /></div>
                  <div className={toggle_content}>
                    <span>4</span>
                    <p>Dokładny wywiad pozwoli na poznanie przyczyn Twoich dolegliwości.</p>
                  </div>
                </div>
                <p>to jest nagłówek dotyczacy procesu wizyty</p>
              </div>
            </ToggleHome>
          </div> */}
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