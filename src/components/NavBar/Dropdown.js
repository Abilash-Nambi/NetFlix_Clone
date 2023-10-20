import React from "react";
import "./Dropdown.css";
function Dropdown({ onLogout }) {
  return (
    <div className="dropdown">
      <ul className="dropdown-menu">
        <li onClick={onLogout}>Log Out</li>
      </ul>
    </div>
  );
}

export default Dropdown;
