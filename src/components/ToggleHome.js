import React, { useState } from 'react';
import PropTypes from "prop-types";
import styled from "styled-components"
import { FaCaretDown } from "@react-icons/all-files/fa/FaCaretDown";

const ToggleBox = styled.div`
    margin: 0
    display: flex;
    flex-direction: column;
    width: 100%;
`

const ToggleBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;

    :hover {
        cursor: pointer;
    }
`
const ToggleIconLeft = styled.div`
    transition: all 1s ease;
    margin-right: 1em;

    &[aria-expanded='true'] {
        transform: rotateZ(-90deg);
        color: #FA6703;
    }
`
const ToggleHeader = styled.div`
    font-size: 1em;
    font-weight: 600;
    color: #000;
    text-transform: uppercase;
`
const ToggleIconRight = styled.div`
    transition: all 1s ease;
    margin-left: 1em;

    &[aria-expanded='true'] {
        transform: rotateZ(90deg);
        color: #FA6703;
    }
`
const ToggleContent = styled.div`
    overflow: hidden;
    display: block;
    max-height: 0px;
    transition: max-height 1s ease-in-out;

    &[aria-expanded='true'] {
        max-height: 1000px;
    }

    @media only screen and (min-width: 768px) {

        &[aria-expanded='true'] {
            max-height: 500px;
        }

    }
`

const ToggleHome = ({title,children}) => {

  const [isActive, setIsActive] = useState(false);

  return (
    <ToggleBox>
        <ToggleBar onClick={() => setIsActive(!isActive)}>
            <ToggleIconLeft aria-expanded={isActive}><FaCaretDown /></ToggleIconLeft>
            <ToggleHeader>{title}</ToggleHeader>
            <ToggleIconRight aria-expanded={isActive}><FaCaretDown /></ToggleIconRight>
        </ToggleBar>
        <ToggleContent aria-expanded={isActive}>{children}</ToggleContent>
    </ToggleBox>
  );
};

ToggleHome.propTypes = {
    title: PropTypes.string.isRequired,
};

export default ToggleHome;