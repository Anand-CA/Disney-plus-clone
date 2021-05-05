import React from "react";
import styled from "styled-components";
import ImageSlider from "../ImgSlider/ImageSlider";
import Movies from "../Movies";
import Viewers from "../Viewers";

function Home() {
  return (
    <HomeContainer>
      <ImageSlider />
      <Viewers/>
      <Movies/>
      <Movies/>
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div`
  height: 91.9vh;
  padding-top: 1.5%;
  overflow-x:hidden;
  background-color: gray;
  background: url("/images/home-background.png") center center / cover no-repeat
    fixed;
`;
