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
  ul li button{
      &:before{
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
  img {
    border-radius: 5px;
    border: 4px solid transparent;
    height: 100%;
    width: 100%;
    box-shadow: inset -12px -8px 40px black;
  }
`;
