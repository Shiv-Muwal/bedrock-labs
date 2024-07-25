import React from "react";
import { Container } from "react-bootstrap";
import Header from "../common/Header";

function BedRocks() {
  return (
    <>
      <div className=" bg-black  d-flex  flex-column  min-vh-100 ">
        <Container className="d-flex flex-column px-4 px-sm-0 flex-grow-1">
          <h2 className=" text-white">hello</h2>
          <div className=" pt_200  ">
            <Header />
          </div>
        </Container>
      </div>
    </>
  );
}

export default BedRocks;
