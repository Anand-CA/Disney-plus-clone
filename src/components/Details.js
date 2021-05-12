import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { db } from "../firebase";
import Loading from "./Loading";
import AddIcon from "@material-ui/icons/Add";
function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loadingg, setloading] = useState(true);
  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        setMovie(doc.data());
      });
  }, []);

  useEffect(() => {
    setTimeout(() => setloading(false), 1200);
  }, []);
  console.log("detail movie", movie);

  const [loading, setLoading] = useState(true);

  return (
    <>
      {!loadingg ? (
        <DetailsContainer>
          <Background>
            <img src={movie.backgroundImg} alt="" />
          </Background>
          <Content>
            <TitleImage>
              <img src={movie.titleImg} alt="" />
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
                <AddIcon />
              </AddButton>
              <GroupViewButton>
                <img src="/images/group-icon.png" alt="" />
              </GroupViewButton>
            </ButtonContainer>
            <Subtitle>
              <p>{movie.subTitle}</p>
            </Subtitle>
          </Content>
          <Description>
            <p>{movie.description}</p>
          </Description>
        </DetailsContainer>
      ) : (
        <Loading />
      )}
    </>
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
const Content = styled.div`
  width: 60%;
`;
const TitleImage = styled.div`
  max-width: 600px;
  width: 60%;
  margin-bottom: 10px;
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
