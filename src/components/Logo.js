import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

export default function Logo() {

  const Logo = styled.div`
    display: block;
    width: 60vw;

    @media only screen and (min-width: 768px) {
      width: 250px;
    }
  `

  const data = useStaticQuery(graphql`
    query Logo {
      file(relativePath: {eq: "logo.png"}) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `
  )

  return (
    <Logo>
      <Link to="/">
        <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt="logo strony"/>
      </Link>
    </Logo>
  )
}