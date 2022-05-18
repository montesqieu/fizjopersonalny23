import React, { useState } from 'react';
import PropTypes from "prop-types";
import styled from "styled-components"
import { FaCaretRight } from "@react-icons/all-files/fa/FaCaretRight";

const ToggleBox = styled.div`
    margin: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
`
const ToggleBar = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 10px;

    :hover {
        cursor: pointer;
    }
`
const ToggleIcon = styled.div`
    transition: all 1s ease;
    margin-right: 20px;

    &[aria-expanded='true'] {
        transform: rotateZ(90deg);
    }
`
const ToggleContent = styled.div`
    overflow: hidden;
    max-height: 0px;
    transition: max-height 1s ease-in-out;

    &[aria-expanded='true'] {
        max-height: 500px;
    }
`

const Toggle = ({title,children,titlesize,titleweight,titlecolor}) => {

    const ToggleHeader = styled.div`
    font-size: ${titlesize}px;
    font-weight: ${titleweight};
    color: #${titlecolor};
`

  const [isActive, setIsActive] = useState(false);

  return (
    <ToggleBox>
        <ToggleBar onClick={() => setIsActive(!isActive)}>
            <ToggleIcon aria-expanded={isActive}><FaCaretRight /></ToggleIcon>
            <ToggleHeader>{title}</ToggleHeader>
        </ToggleBar>
        <ToggleContent aria-expanded={isActive}>{children}</ToggleContent>
    </ToggleBox>
  );
};

Toggle.propTypes = {
    title: PropTypes.string.isRequired,
    titlesize: PropTypes.number.isRequired,
    titleweight: PropTypes.number.isRequired,
    titlecolor: PropTypes.string.isRequired,
};

export default Toggle;