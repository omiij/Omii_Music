import React, { useState } from "react";
import { Menuitems } from "../Navbar/Menuitems";
import "../Navbar/Navbar.css";
import { Button } from "../Navbar/Button";
function Navbar(props) {
  const [state, setState] = useState(false);

  let HandleClick = () => {
    setState((state) => !state);
  };

  return (
    <div className="POSITION">
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          <i class="fab fa-napster"></i>
        </h1>

        <div className="menu-icon" onClick={HandleClick}>
          <i className={state ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={state ? "nav-menu active" : "nav-menu"}>
          {Menuitems.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.url} className={item.cName}>
                  {item.tittle}
                </a>
              </li>
            );
          })}
        </ul>
        <Button onclick={props.handleLogout} />
      </nav>
    </div>
  );
}

export default Navbar;
