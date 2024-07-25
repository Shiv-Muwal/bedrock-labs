import React from "react";
import logo from "../assets/images/svg/logo_nav.svg";
import social_sensor from "../assets/images/webp/social_sensor.webp";
import social_tensor from "../assets/images/webp/social_tensor.webp";
import social_sensor_responsive from "../assets/images/webp/social_sensor_responsive.webp";
import Icons from "../common/Icons";
import { useState } from "react";

const Branding = () => {
  const [show, setShow] = useState(false);
  function HANDLE_SHOW() {
    setShow(!show);
  }

  return (
    <div className=" overflow-hidden vh-100 bg-black d-flex flex-column branding_padding position-relative ">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="d-xl-flex d-none gap_20">
        <div className="common_box common_box_position common_box_position_transform_1 d-flex align-items-end justify-content-between">
          <p className="text_transform  text-white font_Gilroy_SemiBoldItalic fw-normal fst-italic text_12 lh_16 ">
            UI UX
          </p>

          <img
            className="social_sensor_img_w"
            src={social_sensor}
            alt="social_sensor"
          />
        </div>
        <div className="common_box common_box_position social_tensor_transition_2 d-flex align-items-end justify-content-between">
          <p className="text_transform   text-white font_Gilroy_SemiBoldItalic fw-normal fst-italic text_12 lh_16 ">
            Branding
          </p>

          <img
            className="social_tensor_img_w"
            src={social_tensor}
            alt="social_tensor"
          />
        </div>
      </div>
      <div className=" d-flex d-xl-none flex-column flex-grow-1 justify-content-center align-items-center">
        <div
          className={`${
            show ? "d-none" : "d-block"
          } d-flex flex-column align-items-end`}
        >
          <div
            onClick={HANDLE_SHOW}
            className="cross_icon_box d-flex justify-content-center align-items-center"
          >
            <Icons icon="Cross_Icon" />
          </div>
          <div className="responsive_box grey">
            <div className="position-relative justify-content-end d-flex gap_12 w-100">
              <p className="ui_ux_text_transform mb-0 text-nowrap text-white font_Gilroy_SemiBoldItalic fw-normal fst-italic text_12 lh_16 ">
                UI UX
              </p>
              <div>
                <img
                  className="social_sensor_img_w"
                  src={social_sensor_responsive}
                  alt="sensor"
                />
              </div>
            </div>
            <div className=" mt_20 position-relative justify-content-end d-flex gap_12 w-100">
              <p className="branding_text_transform text-nowrap mb-0  text-white font_Gilroy_SemiBoldItalic fw-normal fst-italic text_12 lh_16 ">
                Branding
              </p>

              <div>
                <img
                  className="social_sensor_img_w"
                  src={social_tensor}
                  alt="tensor"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Branding;
