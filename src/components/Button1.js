import React from 'react'
import { Link } from "gatsby"
import styled from "styled-components"

const Btn = styled.button`
  padding: 1em;
  background-color: #FA6703;
  border-radius: 5px;
  font-size: .875em;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  color: #fff;
  white-space: nowrap;
  transition: all 200ms ease-in;
  min-width: 180px;
  border: none;
  cursor: pointer;

  :hover {
    background-color: #FA4603;
  }

  @media only screen and (min-width: 768px) {
  }
`

export default function Button() {
  return (
    <Link to='/rezerwacja'>
      <Btn type="button">Rezerwuję wizytę</Btn>
    </Link>
  )
}
