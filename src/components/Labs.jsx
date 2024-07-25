import React from "react";
import logo from "../assets/images/svg/logo_nav.svg";
import Icons from "../common/Icons";
import Header from "../common/Header";

const Labs = () => {
  return (
    <>
      <div className=" labs_padding bg-black vh-100">
        <img src={logo} alt="logo" />

        <div className=" d-flex gap_40 justify-content-center">
          <Icons icon="Telegram_Icon" />
          <Icons icon="Discord_Icon" />
          <Icons icon="Twitter_Icon" />
          <div className="labs_icons_box d-flex justify-content-center align-items-center">
            <Icons icon="Circle_Icon" />
          </div>
        </div>
        <Header/>
      </div>
    </>
  );
};

export default Labs;
