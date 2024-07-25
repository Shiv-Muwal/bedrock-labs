import React from "react";
import { Container } from "react-bootstrap";
import Header from "../common/Header";
import bedrockVideo from "../assets/video/bedrock.mp4";

function BedRocks() {
  return (
    <>
      <div className="bg-black d-flex flex-column min-vh-100">
        <Container className="d-flex flex-column justify-content-end align-items-center px-4 px-sm-0 flex-grow-1">
          <div className="">
            <div className="">
              <video
                autoPlay
                loop
                muted
                className="w-100"
                style={{ maxWidth: "396px" }}
              >
                <source src={bedrockVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="pt_120">
              <Header />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default BedRocks;
