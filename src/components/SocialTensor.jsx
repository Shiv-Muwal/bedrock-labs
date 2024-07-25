import React from 'react'
import { Container } from 'react-bootstrap'
import logo_nav from '../assets/images/svg/logo_nav.svg'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from '../common/Header';
const SocialTensor = () => {
  var settings = {
    dots: false,
    arrows: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 2,
    vertical: true,
    pauseOnHover:false,
    speed: 2000,
    autoplaySpeed:0,
    autoplay: true,
    infinite: true,
    centerMode: true,
    centerPadding: '0px',
    verticalSwiping: true,
  };
  return (
    <div className='bg-black'>
      <Container className='d-flex flex-column min-vh-100'>
        <div className="pt_40">
          <a href='#'>
            <img src={logo_nav} alt="logo_nav" />
          </a>
        </div>
        <div className="flex-grow-1 d-flex align-items-center justify-content-center">
          <div className="d-flex flex-column gap-4">
            <Slider {...settings} className="vertical-slider">
              <div>
                <p className='mb-0 text-center text_42 font_Gilroy_SemiBoldItalic lh_52 fst-italic'>SocialTensor</p>
              </div>
              <div>
                <p className='mb-0 text_42 lh_52 text-center font_Gilroy_SemiBoldItalic fst-italic'>Aperture</p>
              </div>
              <div>
                <p className='mb-0 text_42 lh_52 text-center font_Gilroy_SemiBoldItalic fst-italic'>Aperture</p>
              </div>
              <div>
                <p className='mb-0 text_42 lh_52 text-center font_Gilroy_SemiBoldItalic fst-italic'>NicheTensor</p>
              </div>
              <div>
                <p className='mb-0 text_42 lh_52 text-center font_Gilroy_SemiBoldItalic fst-italic'>THELASTONE</p>
              </div>
              <div>
                <p className='mb-0 text_42 lh_52 text-center font_Gilroy_SemiBoldItalic fst-italic'>INFINI</p>
              </div>
            </Slider>
          </div>
        </div>
        <Header />
      </Container>
    </div>
  )
}

export default SocialTensor