import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useStateValue } from "../StateProvider";

function Movies() {
  const [{ movies }, dispatch] = useStateValue();
  return (
    <MoviesContainer>
      <h5>Recommended</h5>
      <Content>
        {movies?.map((movie) => (
          <Wrap key={movie.id}>
            <Link to={`/details/${movie.id}`}>
              <img src={movie.movie.cardImg} alt="" />
            </Link>
          </Wrap>
        ))}
      </Content>
    </MoviesContainer>
  );
}

export default Movies;

const MoviesContainer = styled.div`
  margin: 30px 0;
  padding: 0 3%;
  h5 {
    letter-spacing: 2px;
    font-weight: bolder;
    font-family: "Poppins", sans-serif;
  }
`;
const Content = styled.div`
  margin-top: 2%;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media (max-width: 850px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
