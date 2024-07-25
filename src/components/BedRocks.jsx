import React from "react";
import { Container } from "react-bootstrap";
import Header from "../common/Header";
import bedrockVideo from "../assets/video/bedrock.mp4";

function BedRocks() {
  return (
    <div className="bg-black d-flex flex-column px-4 px-sm-0 min-vh-100">
      <Container className="d-flex flex-column justify-content-center align-items-center flex-grow-1">
        <div className="">
          <video
            autoPlay
            loop
            muted
            className="w-100"
            style={{ maxWidth: "396px" }}
          >
            <source src={bedrockVideo} type="video/mp4" />
          </video>
        </div>
      </Container>
      <Header />
    </div>
  );
}

export default BedRocks;
