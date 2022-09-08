import React from "react";
import { RiQuillPenFill } from "react-icons/ri";

const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className="header">
      <div className="header-logo">
        <h1 className="logo-h1">Notes...</h1>
        <RiQuillPenFill size={40} className="logo-img" />
      </div>
      <button
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
        className="toggle-btn"
      >
        Toggle Mode
      </button>
    </div>
  );
};

export default Header;
