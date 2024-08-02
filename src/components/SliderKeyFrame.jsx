import React from "react";
import { CONTINUE_SLIDER } from "../common/Helper";

const SliderKeyFrame = () => {
  return (
    <div class="slider-container">
      <div class="slider">
        {CONTINUE_SLIDER.map((obj, i) => (
          <span class="slider-item mb-0 text_lg opacity_20 text-white text-center text-nowrap slider_text fst-italic">
            {obj.text}
          </span>
        ))}
        {/* <span class="slider-item">SocialTensor</span>
        <span class="slider-item">NicheTensor</span>
        <span class="slider-item">THELASTONE</span>
        <span class="slider-item">INFINI</span>
        <span class="slider-item">TourGame</span>
        <span class="slider-item">CyberConnect</span>
        <span class="slider-item">TourGame</span>
        <span class="slider-item">Aperture</span>
        <span class="slider-item">SocialTensor</span>
        <span class="slider-item">NicheTensor</span>
        <span class="slider-item">THELASTONE</span>
        <span class="slider-item">INFINI</span>
        <span class="slider-item">TourGame</span>
        <span class="slider-item">CyberConnect</span>
        <span class="slider-item">TourGame</span>
        <span class="slider-item">Aperture</span> */}
      </div>
      <div class="slider_reverce">
        {CONTINUE_SLIDER.map((obj, i) => (
          <span class="slider-item mb-0 text_lg opacity_20 text-white text-center text-nowrap slider_text fst-italic">
            {obj.text}
          </span>
        ))}
        {/* <span class="slider-item">SocialTensor</span>
        <span class="slider-item">NicheTensor</span>
        <span class="slider-item">THELASTONE</span>
        <span class="slider-item">INFINI</span>
        <span class="slider-item">TourGame</span>
        <span class="slider-item">CyberConnect</span>
        <span class="slider-item">TourGame</span>
        <span class="slider-item">Aperture</span>
        <span class="slider-item">SocialTensor</span>
        <span class="slider-item">NicheTensor</span>
        <span class="slider-item">THELASTONE</span>
        <span class="slider-item">INFINI</span>
        <span class="slider-item">TourGame</span>
        <span class="slider-item">CyberConnect</span>
        <span class="slider-item">TourGame</span>
        <span class="slider-item">Aperture</span> */}
      </div>
    </div>
  );
};

export default SliderKeyFrame;
