import React, { useState } from "react";
import logo_nav from "../assets/images/svg/logo_nav.svg";
import { useLocation } from "react-router-dom";

function Header() {
  const [show, setShow] = useState(false);
  const [first, setFirst] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setShow(!show);
    setFirst(!first);
    if (!show) {
      document.body.classList.add("overflow_hidden");
    } else {
      document.body.classList.remove("overflow_hidden");
    }
  };

  return (
    <div className="container w-100 d-flex pb-sm-5 pb-4 mb-sm-2 justify-content-sm-center justify-content-between align-items-center">
      <div>
        <a href="#">
          <img
            className={`d-block d-sm-none text-center ${
              location.pathname === "/" ? "d-none" : ""
            }`}
            src={logo_nav}
            alt="nav_logo"
          />
        </a>
      </div>
      <div
        onClick={toggleMenu}
        className={`menu d-block d-lg-none z_9 ${first ? "cross" : ""}`}
      >
        <span className=" mb-2"></span>
        <span></span>
      </div>
      <ul
        className={`navbar-nav ${
          show ? "show" : "hide"
        } d-flex flex-column flex-sm-row gap_32 mb-0`}
      >
        <li className=" ms-4 ps-2 ms-sm-0 ps-sm-0">
          <a
            onClick={toggleMenu}
            className="font_Acumin_Pro_Wide lts_1 fw-bold text_16 lh_16 text-white"
            href="#"
          >
            BEDROCK LABS
          </a>
        </li>
        <li className=" ms-4 ps-2 ms-sm-0 ps-sm-0">
          <a
            onClick={toggleMenu}
            className="font_Acumin_Pro_Wide lts_1 fw-bold text_16 lh_16 text-white"
            href="#about"
          >
            ABOUT
          </a>
        </li>
        <li className=" ms-4 ps-2 ms-sm-0 lts_1 ps-sm-0">
          <a
            onClick={toggleMenu}
            className="font_Acumin_Pro_Wide fw-bold lts_1 text_16 lh_16 text-white"
            href="#cases"
          >
            CASES
          </a>
        </li>
        <li className=" ms-4 ps-2 ms-sm-0 ps-sm-0">
          <a
            onClick={toggleMenu}
            className="font_Acumin_Pro_Wide lts_1 fw-bold text_16 lh_16 text-white"
            href="#media"
          >
            MEDIA
          </a>
        </li>
        <li className=" ms-4 ps-2 ms-sm-0 ps-sm-0">
          <a
            className="font_Acumin_Pro_Wide lts_1 fw-bold text_16 lh_16 text-white"
            href="#contact"
          >
            CONTACT
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
