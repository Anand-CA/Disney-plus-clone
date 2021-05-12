import React from "react";
import styled from "styled-components";

function Viewers() {
  return (
    <ViewersContainer>
      <Wrap>
        <img src="/images/viewers-disney.png" alt="" />
        <video autoPlay muted loop playsInline={true}>
          <source src="/videos/1564674844-disney.mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" alt="" />
        <video autoPlay muted loop playsInline={true}>
          <source src="/videos/1564676714-pixar.mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" alt="" />
        <video autoPlay muted loop playsInline={true}>
          <source src="/videos/1564676115-marvel.mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" alt="" />
        <video autoPlay muted loop playsInline={true}>
          <source src="/videos/1608229455-star-wars.mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" alt="" />
        <video autoPlay muted loop playsInline={true}>
          <source src="/videos/1564676296-national-geographic.mp4" />
        </video>
      </Wrap>
    </ViewersContainer>
  );
}

export default Viewers;

const ViewersContainer = styled.div`
  margin-top: 40px;
  padding: 0px 3%;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
const Wrap = styled.div`
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 6px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  position: relative;
  height: auto;
  &:hover {
    transform: scale(1.06);
    border-color: rgba(249, 249, 249, 0.8);
    video {
      opacity: 1;
    }
  }
  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    z-index: -1;
    opacity: 0;
  }
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    z-index: 1;
  }
`;
