import React from "react";
import { Container } from "react-bootstrap";
import logo_nav from "../assets/images/svg/logo_nav.svg";

function Future() {
  return (
    <>
      <div className=" bg-black min-vh-100">
        <Container>
          <img src={logo_nav} alt="logo_nav" />
          <div className=" ">
            <h1 className=" mb-0  font_Gilroy_SemiBoldItalic   fw-normal fst-italic  text_32 lh_38 text-white ">
              Forging the Future of Crypto
            </h1>
            <div className=" d-flex align-items-center mt-4 gap-4">
              <p className=" mb-0  font_Gilroy_SemiBoldItalic  fw-normal fst-italic text_12 lh_12  text-white opacity-75 ">
                Product Strategy
              </p>
              <div className="divider_line"></div>
              <p className=" mb-0  font_Gilroy_SemiBoldItalic  fw-normal fst-italic text_12 lh_12  text-white opacity-75 ">
                Branding Design
              </p>
              <div className="divider_line"></div>
              <p className=" mb-0  font_Gilroy_SemiBoldItalic  fw-normal fst-italic text_12 lh_12  text-white opacity-75 ">
                UI UX Design
              </p>
              <div className="divider_line"></div>
              <p className=" mb-0  font_Gilroy_SemiBoldItalic  fw-normal fst-italic text_12 lh_12  text-white opacity-75 ">
                Software Development
              </p>
            </div>
            <p className=" mb-0 fw-bold font_Acumin_Pro_Wide text_12 lh_14 text-white   opacity-50 mt-4 paragraph_future_max_w">
              The rise of blockchain technology has ushered in a new era of
              digital sovereignty, enabling individuals to reclaim control over
              their financial assets. Bedrock Labs is a premier product-driven
              venture studio dedicated to realizing the full potential of this
              revolutionary technology.
            </p>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Future;
