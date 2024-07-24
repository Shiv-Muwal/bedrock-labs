import React from 'react'
import { Container } from 'react-bootstrap'
import logo_nav from '../assets/images/svg/logo_nav.svg'
const SocialTensor = () => {
  return (
    <div className='bg-black'>
      <Container className='d-flex flex-column  min-vh-100'>
        <div className="pt_40">
          <img src={logo_nav} alt="logo_nav" />
        </div>
        <div className="flex-grow-1 d-flex align-items-end justify-content-center">
          <div className="d-flex flex-column gap-4">
            <h1 className='mb-0 text-center text-white text_80 font_Gilroy_SemiBoldItalic lh_100'>SocialTensor</h1>
            <p className='mb-0 text_42 lh_52 text-center text-white font_Gilroy_SemiBoldItalic opacity-25'>Aperture</p>
            <p className='mb-0 text_42 lh_52 text-center text-white font_Gilroy_SemiBoldItalic opacity-25'>Aperture</p>
            <p className='mb-0 text_42 lh_52 text-center text-white font_Gilroy_SemiBoldItalic opacity-25'>NicheTensor</p>
            <p className='mb-0 text_42 lh_52 text-center text-white font_Gilroy_SemiBoldItalic opacity-25'>THELASTONE</p>
            {/* <p className='mb-0 text_42 lh_52 text-center text-white font_Gilroy_SemiBoldItalic opacity-25'>INFINI</p>
            <p className='mb-0 text_42 lh_52 text-center text-white font_Gilroy_SemiBoldItalic opacity-25'>TourGame</p>
            <p className='mb-0 text_42 lh_52 text-center text-white font_Gilroy_SemiBoldItalic opacity-25'>CyberConnect</p> */}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default SocialTensor