import React from 'react'
import { Container } from 'react-bootstrap'
import telegram from '../assets/images/svg/Telegram.svg'
import discord from '../assets/images/svg/Discord.svg'
import twitter from '../assets/images/svg/Twitter.svg'
import exclude from '../assets/images/svg/Exclude.svg'
import logo_nav from '../assets/images/svg/logo_nav.svg'
const BedRockIcons = () => {
  return (
    <div className="bg-black">
        <Container className='d-flex flex-column  min-vh-100'>
        <div className="pt_40 d-none d-sm-block">
          <img src={logo_nav} alt="logo_nav" />
          
        </div>
        <div className="flex-grow-1 d-flex align-items-center justify-content-center">
        <ul className=' ps-0 mb-0 d-flex gap_40 gap_32'>
                    <li className=' list-unstyled'><a className='social_links' href="https://telegram.org/" target='_blank'><img src={telegram} alt="telegram" /></a></li>
                    <li className=' list-unstyled'><a className='social_links' href="https://discord.com/channels/984345847628181504/999268522427437086" target='_blank'><img src={discord} alt="discord" /></a></li>
                    <li className=' list-unstyled'><a className='social_links' href="https://x.com/?lang=en" target='_blank'><img src={twitter} alt="twitter" /></a></li>
                    <li className=' list-unstyled'><a className='social_links' href="https://medium.com/" target='_blank'><img src={exclude} alt="exclude" /></a></li>
                </ul>
        </div>
      </Container>
    </div>
  )
}

export default BedRockIcons