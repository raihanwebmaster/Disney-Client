import React from "react";
import "./ImgSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import badging from '../../images/slider-badging.jpg';
import badag from '../../images/slider-badag.jpg';
import scale from '../../images/slider-scale.jpg';
import scales from '../../images/slider-scales.jpg';
const ImgSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div>
      <Slider className="carousel" {...settings}>
        <div className="Warp">
          <a>
            <img src={badging} alt="" />
          </a>
        </div>
        <div className="Warp">
          <a>
            <img src={badag} alt="" />
          </a>
        </div>
        <div className="Warp">
          <a>
            <img src={scale} alt="" />
          </a>
        </div>
        <div className="Warp">
          <a>
            <img src={scales} alt="" />
          </a>
        </div>
      </Slider>
    </div>
  );
};

export default ImgSlider;
