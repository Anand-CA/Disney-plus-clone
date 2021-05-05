import React from "react";
import styled from "styled-components";
import ImageSlider from "../ImgSlider/ImageSlider";

function Home() {
  return (
    <HomeContainer>
      <ImageSlider />
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div`
  height: 91.9vh;
  padding-top:2%;
  background-color: gray;
  background: url("/images/home-background.png") center center / cover no-repeat
    fixed;
`;
