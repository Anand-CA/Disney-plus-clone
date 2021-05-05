import React from "react";
import styled from "styled-components";

function Details() {
  return (
    <DetailsContainer>
      <Background>
        <img src="https://wallpaperaccess.com/full/769774.jpg" alt="" />
      </Background>
      <TitleImage>
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78"
          alt=""
        />
      </TitleImage>

      <ButtonContainer>
        <PlayButton>
          <img src="/images/play-icon-black.png" alt="" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" alt="" />
          <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupViewButton>
          <img src="/images/group-icon.png" alt="" />
        </GroupViewButton>
      </ButtonContainer>
      <Subtitle>
        <p>2018 • 7m • Family, Fantasy, Kids, Animation</p>
      </Subtitle>
      <Description>
        <p>
          A Chinese mom who’s sad when her grown son leaves home gets another
          chance at motherhood when one of her dumplings springs to life. But
          she finds that nothing stays cute and small forever.
        </p>
      </Description>
    </DetailsContainer>
  );
}

export default Details;

const DetailsContainer = styled.div`
  min-height: calc(100vh-70px);
  position: relative;
  padding: 14vh 4% 0 4%;
`;
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  bottom: 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.7;
  }
`;

const TitleImage = styled.div`
  height: 30vh;
  width: 40vh;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;
const PlayButton = styled.button`
  background-color: white;
  color: black;
  border: none;
  width: 18vh;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: #d4d4d4;
  }
  span {
    font-weight: 500;
    letter-spacing: 1px;
  }
`;
const TrailerButton = styled.button`
  color: white;
  background-color: transparent;
  margin-left: 2%;
  width: 18vh;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 2px solid rgba(249, 249, 249, 0.8);
  &:hover {
    background-color: rgba(249, 249, 249, 0.8);
  }
  span {
    font-weight: 500;
    letter-spacing: 1px;
  }
`;

const AddButton = styled.button`
  margin-left: 2%;
  border-radius: 50%;
  height: 50px;
  color: white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  width: 50px;
  border: 2px solid white;
  span {
    font-size: 5vh;
  }
`;
const GroupViewButton = styled.button`
  margin-left: 1%;
  cursor: pointer;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  img {
    object-fit: cover;
  }
`;
const Subtitle = styled.div`
  margin-top: 20px;
  font-family: "Poppins", sans-serif;
`;
const Description = styled.div`
  max-width: 110vh;
  font-family: "Poppins", sans-serif;
  margin-top: 20px;
  font-size: 2.5vh;
  font-weight: bold;
`;
