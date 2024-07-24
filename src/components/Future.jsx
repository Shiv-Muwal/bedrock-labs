import React from "react";
import { Container } from "react-bootstrap";
import logo_nav from "../assets/images/svg/logo_nav.svg";

function Future() {
  return (
    <>
      <div className=" bg-black min-vh-100">
        <Container>
          <img src={logo_nav} alt="logo_nav" />
          <div className="">
            <h1>Forging the Future of Crypto</h1>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Future;
