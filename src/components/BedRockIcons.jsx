import React from 'react'
import { Container } from 'react-bootstrap'
import telegram from '../assets/images/svg/Telegram.svg'
import discord from '../assets/images/svg/Discord.svg'
import twitter from '../assets/images/svg/Twitter.svg'
import exclude from '../assets/images/svg/Exclude.svg'
import logo_nav from '../assets/images/svg/logo_nav.svg'
import Header from '../common/Header'
const BedRockIcons = () => {
  return (
    <div className="bg-black">
        <Container className='d-flex flex-column align-items-start min-vh-100'>
        <a href='#' className="pt_40 d-none d-sm-block">
          <img src={logo_nav} alt="logo_nav" />
        </a>
        <div className="flex-grow-1 w-100 d-flex align-items-center justify-content-center">
        <ul className='ps-0 mb-0 d-flex gap_40 gap_32'>
                    <li><a href="https://telegram.org/" target='_blank'><img className='social_links' src={telegram} alt="telegram" /></a></li>
                    <li><a href="https://discord.com/channels/984345847628181504/999268522427437086" target='_blank'><img className='social_links' src={discord} alt="discord" /></a></li>
                    <li><a href="https://x.com/?lang=en" target='_blank'><img className='social_links' src={twitter} alt="twitter" /></a></li>
                    <li><a href="https://medium.com/" target='_blank'><img className='social_links' src={exclude} alt="exclude" /></a></li>
                </ul>
        </div>
        <Header/>
      </Container>
    </div>
  )
}

export default BedRockIcons