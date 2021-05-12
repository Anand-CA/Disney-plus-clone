import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { db } from "../../firebase";
import { useStateValue } from "../../StateProvider";
import ImageSlider from "../ImgSlider/ImageSlider";
import Movies from "../Movies";
import Viewers from "../Viewers";

function Home() {
  const [{ movies }, dispatch] = useStateValue();
  console.log("redux movies>>", movies);
  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      const tempMovies = snapshot.docs.map((doc) => ({
        id: doc.id,
        movie: doc.data(),
      }));
      console.log(tempMovies);
      dispatch({
        type: "SET_MOVIES",
        item: tempMovies,
      });
    });
  }, []);
  return (
    <HomeContainer>
      <ImageSlider />
      <Viewers />
      <Movies />
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div`
  height: calc(100vh - 70px);
  padding-top: 1.5%;
  overflow-x: hidden;
  background-color: gray;
  background: url("/images/home-background.png") center center / cover no-repeat
    fixed;
  &::-webkit-scrollbar {
    display: none;
  }
`;
