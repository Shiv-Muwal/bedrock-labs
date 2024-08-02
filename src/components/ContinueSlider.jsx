import React, { useState } from "react";
import Marquee from "react-marquee-slider";
import styled from "styled-components";
import social_sensor from '../assets/images/webp/social-sensor.webp';
import social_tensor from '../assets/images/webp/social-tensor.webp';

const TextItem = styled.div`
  display: flex;
  align-items: center;
  color: white;
  justify-content: center;
  font-size: 32px;
  font-weight: bold;
  padding: 0;
  margin: 0 12px;
  transition: all 400ms linear;
  opacity: ${({ isHovered }) => (isHovered ? 1 : 0.2)};
  cursor: pointer;
`;

const ContinueSlider = ({ items, key1, key2 }) => {
  const [velocity1, setVelocity1] = useState(25);
  const [velocity2, setVelocity2] = useState(25);

  const [hoveredItem1, setHoveredItem1] = useState(null);
  const [hoveredItem2, setHoveredItem2] = useState(null);

  return (
    <div>
      <div
        onMouseEnter={() => setVelocity1(0)}
        onMouseLeave={() => setVelocity1(25)}
      >
        <Marquee key={key1} velocity={velocity1} direction="ltr" resetAfterTries={0}>
          {[...items, ...items].map((item, index) => (
            <TextItem
              key={`marquee-example-people-${index}`}
              isHovered={hoveredItem1 === index}
              onMouseEnter={() => setHoveredItem1(index)}
              onMouseLeave={() => setHoveredItem1(null)}
            >
              {item.text}
            </TextItem>
          ))}
        </Marquee>
      </div>
      <div />
      <div
        onMouseEnter={() => setVelocity2(0)}
        onMouseLeave={() => setVelocity2(25)}
      >
        <Marquee key={key2} velocity={velocity2} direction="rtl" resetAfterTries={0}>
          {[...items, ...items].map((item, index) => (
            <TextItem
              key={`marquee-example-people-${index + items.length}`}
              isHovered={hoveredItem2 === index}
              onMouseEnter={() => setHoveredItem2(index)}
              onMouseLeave={() => setHoveredItem2(null)}
            >
              {item.text}
            </TextItem>
          ))}
        </Marquee>
      </div>

      <div className={`d-none d-xl-block ${hoveredItem1 !== null || hoveredItem2 !== null ? "hovered_position" : ""}`}>
        <div
          className={`common_box bg-black common_box_position common_box_position_transform_1 d-flex align-items-end justify-content-between ${hoveredItem1 !== null || hoveredItem2 !== null ? "hovered_position" : ""}`}
        >
          <p className="common_text_transform text-white fw-normal fst-italic text_sm lh_16">
            UI UX
          </p>
          <img
            className="social_sensor_img_w"
            src={social_sensor}
            alt="social_sensor"
          />
        </div>
        <div
          className={`common_box bg-black common_box_position social_tensor_transition_2 ${hoveredItem1 !== null || hoveredItem2 !== null ? "hovered_position" : ""}`}
        >
          <div className="position-relative d-flex justify-content-end">
            <p className="common_text_transform branding_text_pos mb-4 text-white fw-normal fst-italic text_sm lh_16">
              Branding
            </p>
            <img
              className="social_tensor_img_w"
              src={social_tensor}
              alt="social_tensor"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContinueSlider;
