import React, { useState } from "react";
import logo_nav from "../assets/images/svg/logo_nav.svg";

function Header() {
  const [show, setShow] = useState(false);
  const [first, setFirst] = useState(false);

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
    <>
      <header className="bg-black pt_200 px-4">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div
            onClick={toggleMenu}
            className={`menu d-block d-lg-none me-3 z_9 ${
              first ? "cross" : ""
            }`}
          >
            <span></span>
            <span className="my-2"></span>
            <span></span>
          </div>
          <ul
            className={`navbar-nav ${
              show ? "show" : "hide"
            } d-flex flex-column justify-content-center mb-0`}
          >
            <li>
              <a
                onClick={toggleMenu}
                className="font_Acumin_Pro_Wide fw-bold text_12 lh_14 text-white"
                href="#"
              >
                BEDROCK LABS
              </a>
            </li>
            <li>
              <a
                onClick={toggleMenu}
                className="font_Acumin_Pro_Wide fw-bold text_12 lh_14 text-white"
                href="#about"
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                onClick={toggleMenu}
                className="font_Acumin_Pro_Wide fw-bold text_12 lh_14 text-white"
                href="#cases"
              >
                CASES
              </a>
            </li>
            <li>
              <a
                onClick={toggleMenu}
                className="font_Acumin_Pro_Wide fw-bold text_12 lh_14 text-white"
                href="#media"
              >
                MEDIA
              </a>
            </li>
            <li>
              <a
                className="font_Acumin_Pro_Wide fw-bold text_12 lh_14 text-white"
                href="#contact"
              >
                CONTACT
              </a>
            </li>
          </ul>
          <div className="d-block d-sm-none text-center">
            <img src={logo_nav} alt="nav_logo" className="w-50" />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
