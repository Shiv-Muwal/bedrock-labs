import React, { useState, useRef } from "react";
import logo from "../assets/images/svg/logo-nav.svg";
import Icons from "../common/Icons";
import Header from "../common/Header";
import { CONTINUE_SLIDER } from "../common/Helper";

const SocialTensor = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredText, setHoveredText] = useState("TourGame");
  const [show, setShow] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [clickedText, setClickedText] = useState("TourGame");
  const hideTimeoutRef = useRef(null);

  const HANDLE_MOUSE_OVER = (e) => {
    if (screenWidth > 1200) {
      const hoveredSlide = e.target.closest(".slider_text");
      if (hoveredSlide) {
        hoveredSlide.classList.add("hovered_position");
        setHoveredText(e.target.textContent);
        setIsHovered(true);
        clearTimeout(hideTimeoutRef.current);
      }
    }
  };

  const HANDLE_MOUSE_OUT = (e) => {
    if (screenWidth > 1200) {
      const hoveredSlide = e.target.closest(".slider_text");
      if (hoveredSlide) {
        hoveredSlide.classList.remove("hovered_position");
        hideTimeoutRef.current = setTimeout(() => {
          setIsHovered(false);
        }, 200);
      }
    }
  };

  const HANDLE_CLICK = (e) => {
    const clickedSlide = e.target.closest(".slider_text");
    if (clickedSlide) {
      setClickedText(clickedSlide.textContent);
      if (screenWidth < 1200) {
        setIsClicked(!isClicked);
        setShow(false);
      }
    }
  };

  const HANDLE_SHOW = (e) => {
    if (screenWidth < 1200) {
      const centerSlide = e.target.closest(".active_slide");
      if (centerSlide) {
        setShow(false);
      }
    }
  };

  const HANDLE_HIDE = () => {
    setShow(true);
  };

  const clickedItem = CONTINUE_SLIDER.find((item) => item.text === clickedText);

  const hasImages = clickedItem?.images?.cardOne || clickedItem?.images?.cardTwo;

  return (
    <div className="position-relative overflow-hidden">
      <div className="d-sm-block d-none branding_padding position-absolute z-3">
        <a href="/">
          <img loading="preload" src={logo} alt="logo" />
        </a>
      </div>
      <div className="slider_height pt-5 pt-md-0 w-100 bg-black d-flex align-items-center justify-content-center overflow-y-scroll">
        <div className="d-flex flex-column w-100 d-none d-md-block">
          <div className="slider_container">
            <div className="slider_parent">
              {CONTINUE_SLIDER.map((obj, i) => (
                <span
                  onClick={(e) => {
                    HANDLE_CLICK(e);
                    HANDLE_SHOW(e);
                  }}
                  onMouseEnter={HANDLE_MOUSE_OVER}
                  onMouseLeave={HANDLE_MOUSE_OUT}
                  className="slider_item active_slide mb-0 text_lg opacity_20 text-white text-center text-nowrap slider_text cursor_pointer fst-italic"
                  key={i}>
                  {obj.text}
                </span>
              ))}
            </div>
            <div className="slider_reverse">
              {CONTINUE_SLIDER.map((obj, i) => (
                <span
                  onClick={(e) => {
                    HANDLE_CLICK(e);
                    HANDLE_SHOW(e);
                  }}
                  onMouseEnter={HANDLE_MOUSE_OVER}
                  onMouseLeave={HANDLE_MOUSE_OUT}
                  className="slider_item active_slide mb-0 text_lg opacity_20 text-white text-center text-nowrap slider_text cursor_pointer fst-italic"
                  key={i}>
                  {obj.text}
                </span>
              ))}
            </div>
          </div>
          <div className="d-none d-xl-block">
            <div
              className={`${hoveredText &&
                CONTINUE_SLIDER.find((item) => item.text === hoveredText)
                  ?.images?.cardOne &&
                isHovered &&
                "hovered_position"
                } common_box bg-black ${hoveredText &&
                  CONTINUE_SLIDER.find((item) => item.text === hoveredText)
                    ?.images?.cardTwo
                  ? ""
                  : "trx_0"
                } trx_full common_box_position common_box_position_transform_1 d-flex align-items-end justify-content-between`}>
              <p className="common_text_transform text-nowrap text-white fw-normal fst-italic text_sm lh_16">
                UI UX
              </p>
              <img
                loading="preload"
                className="social_sensor_img_w"
                src={
                  hoveredText &&
                    CONTINUE_SLIDER.find((item) => item.text === hoveredText)
                      ?.images?.cardOne
                    ? CONTINUE_SLIDER.find((item) => item.text === hoveredText)
                      ?.images.cardOne
                    : ""
                }
                alt="social_sensor"
              />
            </div>
            <div
              className={`${hoveredText &&
                CONTINUE_SLIDER.find((item) => item.text === hoveredText)
                  ?.images?.cardTwo &&
                isHovered &&
                "hovered_position"
                } common_box bg-black common_box_position social_tensor_transition_2`}>
              <div className="position-relative d-flex justify-content-end">
                <p className="common_text_transform branding_text_pos mb-4 text-white fw-normal fst-italic text_sm lh_16">
                  Branding
                </p>
                <img
                  loading="preload"
                  className="social_sensor_img_w"
                  src={
                    hoveredText &&
                      CONTINUE_SLIDER.find((item) => item.text === hoveredText)
                        ?.images?.cardTwo
                      ? CONTINUE_SLIDER.find(
                        (item) => item.text === hoveredText
                      )?.images.cardTwo
                      : ""
                  }
                  alt="social_tensor"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex d-xl-none justify-content-center z-3">
          {!show && hasImages && (
            <div
              onClick={() => setShow(!show)}
              className="position-absolute top-0 start-0 bg-black z-3 opacity-75 h-100 w-100"></div>
          )}
          {hasImages && (
            <div
              className={`${show ? "card_hidden" : "card_visible"
                } responsive_box_pos z-3`}>
              <div className="d-flex flex-column align-items-end card_mobile_spacing">
                <div
                  onClick={HANDLE_HIDE}
                  className="d-flex justify-content-center cross_icon_box align-items-center">
                  <Icons icon="Cross_Icon" className="cursor_pointer" />
                </div>
                <div className="responsive_box grey d-flex flex-column gap_20">
                  {clickedItem?.images?.cardOne && (
                    <div className="position-relative justify-content-end d-flex gap_12 w-100">
                      <p className="ui_ux_text_transform mb-0 text-nowrap text-white fw-normal fst-italic text_sm lh_16">
                        UI UX
                      </p>
                      <img
                        loading="preload"
                        className="social_sensor_img_w"
                        src={clickedItem.images.cardOne}
                        alt="sensor"
                      />
                    </div>
                  )}
                  {clickedItem?.images?.cardTwo && (
                    <div className="position-relative justify-content-end d-flex gap_12 w-100">
                      <p className="branding_text_transform text-nowrap mb-0 text-white fw-normal fst-italic text_sm lh_16">
                        Branding
                      </p>
                      <img
                        loading="preload"
                        className="social_sensor_img_w sensor_second_img"
                        src={clickedItem.images.cardTwo}
                        alt="tensor"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className=" d-flex d-md-none flex-column gap-4 align-items-center justify-content-center pt_85 pb_65 p-md-0 scroll_height">
        {CONTINUE_SLIDER.map((obj, i) => (
                <span
                  onClick={(e) => {
                    HANDLE_CLICK(e);
                    HANDLE_SHOW(e);
                  }}
                  onMouseEnter={HANDLE_MOUSE_OVER}
                  onMouseLeave={HANDLE_MOUSE_OUT}
                  className="slider_item active_slide mb-0 text_lg opacity_20 text-white text-center text-nowrap slider_text cursor_pointer fst-italic"
                  key={i}>
                  {obj.text}
                </span>
              ))}
        </div>
        <div className="position-absolute bottom-0 z-3 flex-column w-100 justify-content-center slider_gradient">
          <Header />
        </div>
      </div>
    </div>
  );
};

export default SocialTensor;
