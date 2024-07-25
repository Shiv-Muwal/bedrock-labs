import React from "react";
import logo from "../assets/images/svg/logo_nav.svg";
import social_sensor from "../assets/images/webp/social_sansor.webp";
import social_tensor from "../assets/images/webp/social_tensor.webp";
import social_sensor_responsive from "../assets/images/webp/social_sansor_responsive.webp";
import Icons from "../common/Icons";
import { useState } from "react";

const Branding = () => {
  const [show, setShow] = useState(false);
  function HANDLE_SHOW() {
    setShow(!show);
  }

  return (
    <div className=" vh-100 bg-black d-flex flex-column branding_padding position-relative ">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="  d-xl-flex d-none gap_20  common_box_position ">
        <div className="common_box d-flex align-items-end justify-content-between">
          <p className="text_transform  text-white font_Gilroy_SemiBoldItalic fw-normal fst-italic text_12 lh_16 ">
            UI UX
          </p>

          <img src={social_sensor} alt="social_sensor" />
        </div>
        <div className="common_box d-flex align-items-end justify-content-between">
          <p className="text_transform   text-white font_Gilroy_SemiBoldItalic fw-normal fst-italic text_12 lh_16 ">
            Branding
          </p>

          <img src={social_tensor} alt="social_tensor" />
        </div>
      </div>
      <div className=" d-flex flex-column flex-grow-1 justify-content-center align-items-center  ">
        <div className=" d-flex flex-column align-items-end">
          <div
            onClick={HANDLE_SHOW}
            className="cross_icon_box d-flex justify-content-center align-items-center"
          >
            <Icons icon="Cross_Icon" />
          </div>
          <div className={`${show ? "d-none" : "d-block"} responsive_box grey`}>
            <div className=" mini_screen  d-flex align-items-end justify-content-between">
              <p className="text_transform  text-white font_Gilroy_SemiBoldItalic fw-normal fst-italic text_12 lh_16 ">
                UI UX
              </p>
              <img src={social_sensor} alt="responsive_social_tensor" />
            </div>
            <div className=" mini_screen d-flex align-items-end justify-content-between">
              <p className="text_transform   text-white font_Gilroy_SemiBoldItalic fw-normal fst-italic text_12 lh_16 ">
                Branding
              </p>

              <img src={social_tensor} alt="responsive_social_tensor" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Branding;
