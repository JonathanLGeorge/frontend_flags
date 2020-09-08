import React from "react";

function Nav() {
  return (
    <div>
      <h1 className="nav__logo">Where in the world?</h1>
      <button className="nav__theme" onClick={handleClick}>
        <svg className="icon">
          <use href={`${sprites}#icon-moon`}></use>
        </svg>
        Dark Mode
      </button>
    </div>
  );
}

export default Nav;
