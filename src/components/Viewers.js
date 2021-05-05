import React from "react";
import styled from "styled-components";

function Viewers() {
  return (
    <ViewersContainer>
      <Wrap>
        <img src="/images/viewers-disney.png" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" alt="" />
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
`;
const Wrap = styled.div`
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 6px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  &:hover {
    transform: scale(1.06);
    border-color: rgba(249, 249, 249, 0.8);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
