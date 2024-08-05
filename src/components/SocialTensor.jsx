import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/images/svg/logo-nav.svg";
import social_tensor from '../assets/images/webp/social-tensor.webp'
import social_sensor_responsive from "../assets/images/webp/social-sensor-responsive.webp";
import Icons from "../common/Icons";
import Header from "../common/Header";
import { CONTINUE_SLIDER, SLIDER_LIST } from "../common/Helper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Keyboard, Virtual } from "swiper/modules";
import "swiper/css";
import "swiper/css/mousewheel";
import "swiper/css/keyboard";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SocialTensor = () => {

  const [slides, setSlides] = useState([]);
  const swiperRef = useRef(null);
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredText, setHoveredText] = useState(null);
  const [show, setShow] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
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
          setHoveredText(null);
        }, 200);
      }
    }
  };

  const HANDLE_CLICK = (e) => {
    if (screenWidth < 1200) {
      const centerSlide = e.target.closest(".active_slide");
      if (centerSlide) {
        setIsClicked(!isClicked);
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

  const HANDLE_DOCUMENT_CLICK = (e) => {
    if (screenWidth > 1200) {
      const clickedInside =
        e.target.closest(".active_slide") || e.target.closest(".common_box");
      if (!clickedInside) {
        setIsClicked(false);
        setIsHovered(false);
        setHoveredText(null);
      }
    }
  };

  const getSlidesPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerHeight >= 932) return 17;
      if (window.innerHeight >= 895) return 15;
      if (window.innerHeight >= 844) return 16;
      if (window.innerHeight >= 740) return 14;
      if (window.innerHeight >= 667) return 11;

      return 8;
    }
    return 8;
  };

  useEffect(() => {
    setSlides([...SLIDER_LIST, ...SLIDER_LIST, ...SLIDER_LIST]);
    document.addEventListener("click", HANDLE_DOCUMENT_CLICK);
    return () => {
      document.removeEventListener("click", HANDLE_DOCUMENT_CLICK);
    };
  }, [screenWidth]);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="position-relative">
      <div className="d-sm-block d-none branding_padding position-absolute z-3">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="slider_height w-100 bg-black d-flex align-items-center justify-content-center overflow-hidden">
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
                  key={i}
                >
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
                  key={i}
                >
                  {obj.text}
                </span>
              ))}
            </div>
          </div>
          <div className="d-none d-xl-block">
         
         <div
              className={`${hoveredText && CONTINUE_SLIDER.find(item => item.text === hoveredText)?.images?.cardOne &&isHovered && "hovered_position"} common_box bg-black ${hoveredText && CONTINUE_SLIDER.find(item => item.text === hoveredText)?.images?.cardTwo &&isHovered ? "":"trx_0"} trx_full common_box_position common_box_position_transform_1 d-flex align-items-end justify-content-between`}
            >
              <p className="common_text_transform text-nowrap text-white fw-normal fst-italic text_sm lh_16">
                UI UX
              </p>
              <img
                className="social_sensor_img_w"
                src={
                  hoveredText && CONTINUE_SLIDER.find(item => item.text === hoveredText)?.images?.cardOne
                  ? CONTINUE_SLIDER.find(item => item.text === hoveredText)?.images.cardOne
                  : ''
                }
                alt="social_sensor"
              />
            </div>
            <div
              className={`${hoveredText && CONTINUE_SLIDER.find(item => item.text === hoveredText)?.images?.cardTwo &&isHovered  && "hovered_position"
                } common_box bg-black common_box_position social_tensor_transition_2`}
            >
              <div className="position-relative d-flex justify-content-end">
                <p className="common_text_transform branding_text_pos mb-4 text-white fw-normal fst-italic text_sm lh_16">
                  Branding
                </p>
                <img
                  className="social_tensor_img_w"
                  src={
                    hoveredText && CONTINUE_SLIDER.find(item => item.text === hoveredText)?.images?.cardTwo
                    ? CONTINUE_SLIDER.find(item => item.text === hoveredText)?.images.cardTwo
                    : ''
                  }
                  alt="social_tensor"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex d-xl-none justify-content-center z-3">
          <div className={`${show ? "card_hidden" : "card_visible"} responsive_box_pos`}>
            <div className="d-flex flex-column align-items-end mx_30">
              <div
                onClick={HANDLE_HIDE}
                className="d-flex justify-content-center cross_icon_box align-items-center"
              >
                <Icons icon="Cross_Icon" className="cursor_pointer" />
              </div>
              <div className="responsive_box grey">
                <div className="position-relative justify-content-end d-flex gap_12 w-100">
                  <p className="ui_ux_text_transform mb-0 text-nowrap text-white fw-normal fst-italic text_sm lh_16">
                    UI UX
                  </p>
                  <img
                    className="social_sensor_img_w"
                    src={social_sensor_responsive}
                    alt="sensor"
                  />
                </div>
                <div className="branding_card position-relative justify-content-end d-flex gap_12 w-100">
                  <p className="branding_text_transform text-nowrap mb-0 text-white fw-normal fst-italic text_sm lh_16">
                    Branding
                  </p>
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
        <div
          className="d-flex align-items-center justify-content-center h-100 w-100 mx-auto slider_width"
          style={{ perspective: "1000px" }}
        >
          <Swiper
            ref={swiperRef}
            direction="vertical"
            slidesPerView={getSlidesPerView()}
            freeMode={true}
            centeredSlides={true}
            keyboard={{ enabled: true }}
            speed={500}
            modules={[Mousewheel, Keyboard, Virtual]}
            loop={true}
            mousewheel={{ releaseOnEdges: true }}
            loopAdditionalSlides={SLIDER_LIST.length}
            className="h-100 w-100 d-md-none"
          >
            {slides.map((slide, index) => (
              <SwiperSlide
                key={index}
                className="d-flex align-items-center justify-content-center "
                style={{ height: '24px' }}
              >
                {({ isActive }) => (
                  <div
                    className={`slide_content d-flex align-items-center justify-content-center`}
                  >
                    <span
                      onClick={(e) => {
                        HANDLE_CLICK(e);
                        HANDLE_SHOW(e);
                      }}
                      className={`${isActive
                        ? "text_xl cursor_pointer active_slide px-2 px-sm-4 "
                        : "text_xl px-2 px-sm-4 opacity_20"
                        } fst-italic`}
                    >
                      {slide}
                    </span>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="position-absolute bottom-0 z-3 flex-column w-100 justify-content-center slider_gradient">
          <Header />
        </div>
      </div>
    </div>
  );
};

export default SocialTensor;