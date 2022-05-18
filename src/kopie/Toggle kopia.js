import React, { useState } from 'react';
import PropTypes from "prop-types";
import styled from "styled-components"
import { FaCaretDown } from "@react-icons/all-files/fa/FaCaretDown";
import { FaCaretUp } from "@react-icons/all-files/fa/FaCaretUp";

const ToggleBox = styled.div`
    margin: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
`
const ToggleTitle = styled.div`
    font-size: 18px;
    color: #3E4E50;
    font-weight: 500;
    display: flex;
    cursor: pointer;

    :hover {
        cursor: pointer;
    }
`
const ToggleContent = styled.div`
    overflow: hidden;
    max-height: 0px;
    transition: max-height 1s ease-in-out;

    &[aria-expanded='true'] {
        max-height: 1000px;
    }
`

const Toggle = ({title,children}) => {

  const [isActive, setIsActive] = useState(false);

  return (
    <ToggleBox>
        <ToggleTitle onClick={() => setIsActive(!isActive)}>
            {title} {isActive ? <FaCaretUp /> : <FaCaretDown />}
        </ToggleTitle>
        <ToggleContent aria-expanded={isActive}>
            {children}
        </ToggleContent>
    </ToggleBox>
  );
};

Toggle.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Toggle;