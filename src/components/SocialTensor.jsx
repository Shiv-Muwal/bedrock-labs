import React, { useState } from "react";
import { Container } from "react-bootstrap";
import logo_nav from "../assets/images/svg/logo_nav.svg";
import Slider from "react-slick";
import social_sensor from '../assets/images/webp/social_sensor.webp';
import social_tensor from '../assets/images/webp/social_tensor.webp';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from '../common/Header';

const SocialTensor = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = (e) => {
    const centerSlide = e.target.closest('.slick-center');
    if (centerSlide) {
      setIsHovered(true);
    }
  };

  const handleMouseOut = (e) => {
    const centerSlide = e.target.closest('.slick-center');
    if (centerSlide) {
      setIsHovered(false);
    }
  };

  const settings = {
    dots: false,
    arrows: false,
    slidesToShow: 10,
    slidesToScroll: 1,
    vertical: true,
    speed: 1000,
    pauseOnHover: false,
    autoplay: true,
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    verticalSwiping: true,
  };

  return (
    <div className='bg-black overflow-hidden position-relative'>
      <Container className='d-flex flex-column min-vh-100 px_30'>
        <div className="pt_40">
          <a href='#'>
            <img src={logo_nav} alt="logo_nav" />
          </a>
        </div>
        <div className="d-flex overflow-hidden flex-column flex-grow-1 justify-content-center align-items-center">
          <Slider {...settings} className="vertical-slider overflow-hidden">
            {['Aperture', 'Aperture', 'NicheTensor', 'THELASTONE', 'INFINI', 'INFINI', 'INFINI', 'INFINI', 'INFINI', 'INFINI'].map((item, index) => (
              <div
                key={index}
                className="d-flex align-items-center justify-content-center"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <p className="mb-0 show_box text_42 lh_52 slider_text text-center d-inline-block font_Gilroy_SemiBoldItalic fst-italic">
                  {item}
                </p>
              </div>
            ))}
          </Slider>
          <div className="d-flex align-items-center gap_20 w-100 justify-content-end position-absolute slider-box-common">
            <div className={`slider-box sliderbox1 d-flex align-items-end justify-content-between w-100 ${isHovered ? 'hovered' : ''}`}>
              <p className="text-white fst-italic text_12 slider-box-text d-inline-block">UI UX</p>
              <img src={social_sensor} alt="" className="slider-img" />
            </div>
            <div className={`slider-box sliderbox2 d-flex align-items-end justify-content-between w-100 ${isHovered ? 'hovered' : ''}`}>
              <p className="text-white fst-italic text_12 slider-box-text d-inline-block">UI UX</p>
              <img src={social_sensor} alt="" className="slider-img" />
            </div>
          </div>
        </div>
      </Container>
      <div className="position-absolute bottom-0 z-3 flex-column w-100 justify-content-center slidergradient">
        <Header />
      </div>
    </div>
  );
};

export default SocialTensor;
