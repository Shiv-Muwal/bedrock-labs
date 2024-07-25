import React from "react";
import logo from "../assets/images/svg/logo_nav.svg";
import social_sensor from "../assets/images/webp/social_sensor.webp";
import social_tensor from "../assets/images/webp/social_tensor.webp";
import social_sensor_responsive from "../assets/images/webp/social_sensor_responsive.webp";
import Icons from "../common/Icons";
import { useState } from "react";
import Header from "../common/Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Branding = () => {
  const [show, setShow] = useState(false);
  function HANDLE_SHOW() {
    setShow(!show);
  }

  // slick-slider
  var settings = {
    dots: false,
    arrows: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    vertical: true,
    speed: 2000,
    autoplay: true,
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    verticalSwiping: true,
  };
  return (
    <div className=" overflow-hidden branding_padding vh-100 bg-black d-flex flex-column branding_padding position-relative ">
      <div className=" d-sm-block d-none">
        <img src={logo} alt="logo" />
      </div>
      <div className="d-xl-flex d-none gap_20">
        <div className="common_box bg-black common_box_position common_box_position_transform_1 d-flex align-items-end justify-content-between">
          <p className="common_text_transform  text-white font_Gilroy_SemiBoldItalic fw-normal fst-italic text_12 lh_16 ">
            UI UX
          </p>

          <img
            className="social_sensor_img_w"
            src={social_sensor}
            alt="social_sensor"
          />
        </div>
        <div className="common_box bg-black common_box_position social_tensor_transition_2 d-flex align-items-end justify-content-between">
          <p className="common_text_transform   text-white font_Gilroy_SemiBoldItalic fw-normal fst-italic text_12 lh_16 ">
            Branding
          </p>

          <img
            className="social_tensor_img_w"
            src={social_tensor}
            alt="social_tensor"
          />
        </div>
      </div>
      <div className=" d-flex justify-content-center">
        <div className="responsive_box_pos">
          {" "}
          <div
            className={`${show ? "d-none" : "d-block"
              } d-flex d-xl-none mt_153 flex-column align-items-end`}
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
      <div
        onClick={HANDLE_SHOW}
        className=" d-flex  flex-column flex-grow-1 justify-content-end align-items-center"
      >
        <Slider {...settings} className="vertical-slider">
          <div>
            <p className="mb-0 show_box text-center text_42 font_Gilroy_SemiBoldItalic lh_52 fst-italic">
              SocialTensor
            </p>
          </div>
          <div>
            <p className="mb-0 show_box text_42 lh_52 text-center font_Gilroy_SemiBoldItalic fst-italic">
              Aperture
            </p>
          </div>
          <div>
            <p className="mb-0 show_box text_42 lh_52 text-center font_Gilroy_SemiBoldItalic fst-italic">
              Aperture
            </p>
          </div>
          <div>
            <p className="mb-0 show_box text_42 lh_52 text-center font_Gilroy_SemiBoldItalic fst-italic">
              NicheTensor
            </p>
          </div>
          <div>
            <p className="mb-0 show_box text_42 lh_52 text-center font_Gilroy_SemiBoldItalic fst-italic">
              THELASTONE
            </p>
          </div>
          <div>
            <p className="mb-0 show_box text_42 lh_52 text-center font_Gilroy_SemiBoldItalic fst-italic">
              INFINI
            </p>
          </div>
        </Slider>
      </div>
      <Header />
    </div>
  );
};

export default Branding;
