import React, { useState } from 'react';
import { FaCaretDown } from "@react-icons/all-files/fa/FaCaretDown";
import { FaCaretUp } from "@react-icons/all-files/fa/FaCaretUp";

const Toggle = ({children}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div onClick={() => setIsActive(!isActive)}>
        <div>Nagłówek toggle'a {isActive ? <FaCaretUp /> : <FaCaretDown />}</div>
      </div>
      {isActive && <div>{children}</div>}
    </div>
  );
};

export default Toggle;