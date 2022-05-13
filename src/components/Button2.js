import React from 'react'
import { Link } from "gatsby"
import styled from "styled-components"

const Btn = styled.button`
  display: inline-block;
  padding: 1em;
  background-color: #fff;
  border-radius: 5px;
  font-size: .875em;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  color: #000;
  white-space: nowrap;
  transition: all 200ms ease-in;
  min-width: 180px;
  border: none;
  cursor: pointer;

  :hover {
    background-color: #e0f0ff;
  }

  @media only screen and (min-width: 768px) {
  }
`

export default function Button() {
  return (
    <Link to='/#scroll'>
      <Btn type="button">Przewiń dalej</Btn>
    </Link>
  )
}
