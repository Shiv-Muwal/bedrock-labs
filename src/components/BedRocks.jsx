import React from "react";
import { Container } from "react-bootstrap";
import Header from "../common/Header";
import bedrockVideo from "../assets/video/bedrock.mp4";

function BedRocks() {
  return (
    <div className="bg-black d-flex flex-column min-vh-100">
      <Container className="d-flex flex-column justify-content-center px_30 align-items-center flex-grow-1">
        <video
          autoPlay
          loop
          muted
          className="w-100"
          style={{ maxWidth: "396px" }}
        >
          <source src={bedrockVideo} type="video/mp4" />
        </video>
      </Container>
      <div className="pb_17">
        <Header />
      </div>
    </div>
  );
}

export default BedRocks;
