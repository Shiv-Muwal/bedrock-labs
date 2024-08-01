import React from "react";
import { Container } from "react-bootstrap";
import telegram from "../assets/images/svg/telegram-icon.svg";
import discord from "../assets/images/svg/discord-icon.svg";
import twitter from "../assets/images/svg/twitter-icon.svg";
import exclude from "../assets/images/svg/medium-icon.svg";
import logo_nav from "../assets/images/svg/logo-nav.svg";
import Header from "../common/Header";

const BedRockIcons = () => {
  return (
    <div className="bg-black d-flex flex-column min-vh-100">
      <a href="/" className="d-none logo_spacing d-sm-block">
        <img src={logo_nav} alt="logo-nav" />
      </a>
      <Container className="d-flex flex-grow-1 flex-column justify-content-center common_padding align-items-center">
        <ul className="ps-0 mb-0 d-flex gap_40 icons_gap">
          <li>
            <a href="https://telegram.org/" target="_blank">
              <img className="social_links" src={telegram} alt="telegram" />
            </a>
          </li>
          <li>
            <a
              href="https://discord.com/channels/984345847628181504/999268522427437086"
              target="_blank"
            >
              <img className="social_links" src={discord} alt="discord" />
            </a>
          </li>
          <li>
            <a href="https://x.com/?lang=en" target="_blank">
              <img className="social_links" src={twitter} alt="twitter" />
            </a>
          </li>
          <li>
            <a href="https://medium.com/" target="_blank">
              <img className="social_links" src={exclude} alt="exclude" />
            </a>
          </li>
        </ul>
      </Container>
      <Header />
    </div>
  );
};

export default BedRockIcons;
