import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="/images/slider-badag.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-badging.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-scale.jpg" alt="" />
      </Wrap>
    </Carousel>
  );
}

export default ImageSlider;

const Carousel = styled(Slider)`
  margin: 0 3%;
  .slick-list {
    overflow: visible;
  }
  ul li button {
    &:before {
      font-size: 13px;
    }
  }
  li.slick-active button::before {
    color: white;
  }
  button {
    z-index: 1;
  }
`;
const Wrap = styled.div`
  padding: 0 3px;
  cursor: pointer;
  img {
    border-radius: 8px;
    border: 4px solid #161616;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px,
      rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
    transition: 0.2s ease-in-out;
    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`;
