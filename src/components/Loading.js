import React from "react";
import styled from "styled-components";
import { Player } from "@lottiefiles/react-lottie-player";

function Loading() {
  return (
    <LoadingContainer>
      <Player
        autoplay
        loop
        src="https://assets3.lottiefiles.com/packages/lf20_Stt1R6.json"
        style={{ height: "100px", width: "100px" }}
      ></Player>
    </LoadingContainer>
  );
}

export default Loading;

const LoadingContainer = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  color: white;
  background-color: black;
`;
