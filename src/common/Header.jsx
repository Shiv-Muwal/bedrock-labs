import React, { useState } from "react";
import logo_nav from "../assets/images/svg/logo-nav.svg";
import { useLocation } from "react-router-dom";
import { NAV_ITEMS } from "./Helper";

function Header() {
  const [show, setShow] = useState(false);
  const [first, setFirst] = useState(false);
  const location = useLocation();

  const toggleMenuHandler = () => {
    setShow(!show);
    setFirst(!first);
    if (!show) {
      document.body.classList.add("overflow_hidden");
    } else {
      document.body.classList.remove("overflow_hidden");
    }
  };

  return (
    <div className="container w-100 d-flex pb-sm-5 common_padding pb-4 mb-sm-2 justify-content-sm-center justify-content-between align-items-center">
      <a href="/" className="d-block d-sm-none">
        <img
          className={`text-center ${
            location.pathname === "/" && "d-none"
          }`}
          src={logo_nav}
          alt="nav_logo"
        />
      </a>
      <div
        onClick={toggleMenuHandler}
        className={`menu_bar d-block d-lg-none z_9 ${first && "cross"}`}
      >
        <span className="mb-2"></span>
        <span></span>
      </div>
      <ul
        className={`navbar_nav ${
          show ? "show" : ""
        } d-flex flex-column flex-sm-row icons_gap mb-0`}
      >
        {NAV_ITEMS.map((item, index) => (
          <li key={index} className="ms-4 ps-2 ms-sm-0 ps-sm-0">
            <a
              onClick={toggleMenuHandler}
              className="font_acumin_pro_wide text-nowrap nav_link position-relative lts_1 fw-bold text_md lh_16 text-white"
              href={item.href}
              target={item.target ? item.target : '_self'}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Header;
