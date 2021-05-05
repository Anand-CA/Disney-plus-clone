import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
function Header() {
  return (
    <HeaderContainer>
      <Ham>
        <img src="/ham.png" alt="" />
      </Ham>
      {/* logo */}
      <HeaderLogo src="/images/logo.svg" alt="" />

      {/* nav menu  */}
      <HeaderMenu>
        <Link to="/">
          <li>
            <img
              className="header__navIcon"
              src="/images/home-icon.svg"
              alt=""
            />
            <span className="headerNavLink__text">home</span>
          </li>
        </Link>

        <li>
          <img
            className="header__navIcon"
            src="/images/search-icon.svg"
            alt=""
          />
          <span className="headerNavLink__text">search</span>
        </li>

        <li>
          <img
            className="header__navIcon"
            src="/images/watchlist-icon.svg"
            alt=""
          />
          <span className="headerNavLink__text">watchlist</span>
        </li>

        <li>
          <img
            className="header__navIcon"
            src="/images/movie-icon.svg"
            alt=""
          />
          <span className="headerNavLink__text">movies</span>
        </li>
      </HeaderMenu>

      {/* avatar */}
      <HeaderAvatar className="header__avatar" src="/avatar.svg" alt="" />
    </HeaderContainer>
  );
}

export default Header;

const Ham = styled.div`
  display: none;
  cursor: pointer;
  img {
    height: 30px;
  }
  @media (max-width: 600px) {
    display: block;
  }
`;

const HeaderContainer = styled.div`
  height: 70px;
  /* background-color: #020207; */
  display: flex;
  overflow-x: hidden;
  align-items: center;
  @media (max-width: 600px) {
    justify-content: space-between;
    padding: 0 15px;
  }
`;
const HeaderLogo = styled.img`
  height: 50px;
  flex: 0.2;
`;
const HeaderMenu = styled.div`
  display: flex;
  flex: 0.8;
  @media (max-width: 600px) {
    display: none;
  }
  a {
    text-decoration: none;
    color: white;
    margin-right: 1%;
  }
  li {
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-right: 1%;
    img {
      height: 35px;
    }
    span {
      text-transform: uppercase;
      letter-spacing: 1px;
      font-size: 14px;
      margin-left: 5px;
      font-weight: bolder;
      font-family: "Poppins", sans-serif;
      position: relative;
      &:hover {
        &::after {
          opacity: 1;
          transform: scaleX(1);
        }
      }
      &::after {
        content: "";
        background-color: white;
        height: 2px;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform: scaleX(0);
        transition: all 0.2s ease-in-out;
      }
    }
  }
`;

const HeaderAvatar = styled.img`
  height: 45px;
  border: 2px solid white;
  border-radius: 50%;
  margin-right: 1%;
`;
