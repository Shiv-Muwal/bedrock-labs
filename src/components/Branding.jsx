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
  const [isHovered, setIsHovered] = useState(false); 
 
  const handleMouseOver = () => { 
    setIsHovered(true); 
    document.querySelector('.common_box_position1').classList.add('common_box_position2');
  }; 
 
  const handleMouseOut = () => { 
    setIsHovered(false); 
    document.querySelector('.common_box_position1').classList.remove('common_box_position2');
  }; 
  const [show, setShow] = useState(false);
  function HANDLE_SHOW() {
    setShow(!show);
  }

  // slick-slider
  var settings = {
    dots: false,
    arrows: false,
    slidesToShow: 10,
    slidesToScroll: 1,
    vertical: true,
    speed: 2000,
    pauseOnHover:false,
    autoplay: true,
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    verticalSwiping: true,
  };
  return (
    <div className=" overflow-hidden branding_padding position-relative vh-100 bg-black d-flex flex-column position-relative ">
      <div className=" d-sm-block d-none">
        <img src={logo} alt="logo" />
      </div>
      <div
        onClick={HANDLE_SHOW}
        className=" d-flex  flex-column flex-grow-1 justify-content-end align-items-center"
      >
        <Slider {...settings} className="vertical-slider">
          <div className=" d-flex align-items-center justify-content-center">
            <p className="mb-0 show_box text-center slider_text text_42 d-inline-block font_Gilroy_SemiBoldItalic lh_52 fst-italic" onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}>
              SocialTensor
            </p>
          </div>
          <div className=" d-flex align-items-center justify-content-center">
            <p className="mb-0 show_box text_42 lh_52 slider_text text-center d-inline-block font_Gilroy_SemiBoldItalic fst-italic" onMouseOver={handleMouseOver} 
            onMouseOut={handleMouseOut}>
              Aperture
            </p>
          </div>
          <div className=" d-flex align-items-center justify-content-center">
            <p className="mb-0 show_box text_42 lh_52 slider_text text-center d-inline-block font_Gilroy_SemiBoldItalic fst-italic" onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}>
              Aperture
            </p>
          </div>
          <div className=" d-flex align-items-center justify-content-center">
            <p className="mb-0 show_box text_42 lh_52 slider_text text-center d-inline-block font_Gilroy_SemiBoldItalic fst-italic" onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}>
              NicheTensor
            </p>
          </div>
          <div className=" d-flex align-items-center justify-content-center">
            <p className="mb-0 show_box text_42 lh_52 slider_text text-center d-inline-block font_Gilroy_SemiBoldItalic fst-italic" onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}>
              THELASTONE
            </p>
          </div>
          <div className=" d-flex align-items-center justify-content-center">
            <p className="mb-0 show_box text_42 lh_52 slider_text text-center d-inline-block font_Gilroy_SemiBoldItalic fst-italic" onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}>
              INFINI
            </p>
          </div>
          <div className=" d-flex align-items-center justify-content-center">
            <p className="mb-0 show_box text_42 lh_52 slider_text text-center d-inline-block font_Gilroy_SemiBoldItalic fst-italic" onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}>
              INFINI
            </p>
          </div>
          <div className=" d-flex align-items-center justify-content-center">
            <p className="mb-0 show_box text_42 lh_52 slider_text text-center d-inline-block font_Gilroy_SemiBoldItalic fst-italic" onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}>
              INFINI
            </p>
          </div>
          <div className=" d-flex align-items-center justify-content-center">
            <p className="mb-0 show_box text_42 lh_52 slider_text text-center d-inline-block font_Gilroy_SemiBoldItalic fst-italic" onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}>
              INFINI
            </p>
          </div>
          <div className=" d-flex align-items-center justify-content-center">
            <p className="mb-0 show_box text_42 lh_52 slider_text text-center d-inline-block font_Gilroy_SemiBoldItalic fst-italic" onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}>
              INFINI
            </p>
          </div>
          <div className=" d-flex align-items-center justify-content-center">
            <p className="mb-0 show_box text_42 lh_52 slider_text text-center d-inline-block font_Gilroy_SemiBoldItalic fst-italic" onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}>
              INFINI
            </p>
          </div>
        </Slider>
        <div    className={`common_box_position1 common_box_position2 ${isHovered ? 'hovered' : ''}`}>
        <div className="common_box bg-black common_box_position common_box_position common_box_position_transform_1 d-flex align-items-end justify-content-between">
          <p className="common_text_transform  text-white font_Gilroy_SemiBoldItalic fw-normal fst-italic text_12 lh_16 ">
            UI UX
          </p>

          <img
          className="social_sensor_img_w"
            src={social_sensor}
            alt="social_sensor"
          />
        </div>
        <div className="common_box bg-black common_box_position common_box_position social_tensor_transition_2 d-flex align-items-end justify-content-between">
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
      </div>
      <div className=" position-absolute bottom-0 z-3 flex-column w-100 justify-content-center slidergradient">
      <Header/>
      </div>
      
    </div>
  );
};

export default Branding;
