import React from "react";
import { Container } from "react-bootstrap";
import Header from "../common/Header";
import bedrockVideo from "../assets/video/bedrock.mp4";

function BedRocks() {
  return (
    <div className="bg-black d-flex flex-column vh_100">
      <Container className="d-flex flex-column justify-content-center common_padding align-items-center flex-grow-1">
        <video autoPlay loop muted className="w-100 video_width">
          <source src={bedrockVideo} type="video/mp4" />
        </video>
      </Container>
      <div className="header_custom_spacing position-absolute bottom-0 z-3 flex-column w-100 justify-content-center">
        <Header />
      </div>
    </div>
  );
}

export default BedRocks;
