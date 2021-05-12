import { Avatar } from "@material-ui/core";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { auth, provider } from "../../firebase";
import { useStateValue } from "../../StateProvider";
import { useState } from "react";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

function Header() {
  const [{ user }, dispatch] = useStateValue();
  console.log("👽 >>>", user);

  const classes = useStyles();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      }
    });
  }, []);
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log("result >>>", result.user);
        dispatch({
          type: "SET_USER",
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        console.log("signout successfull");
        dispatch({
          type: "SET_USER",
          user: null,
        });
      })
      .catch((error) => {
        console.log("signout error🛑");
      });
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Sidebar>
        <Link to="/">
          <ListItem button>
            <ListItemIcon>
              <img src="/images/home-icon.svg" alt="" />
            </ListItemIcon>
            <ListItemText primary="HOME" />
          </ListItem>
        </Link>
        <ListItem button>
          <ListItemIcon>
            <img src="/images/search-icon.svg" alt="" />
          </ListItemIcon>
          <ListItemText primary="SEARCH" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <img src="/images/watchlist-icon.svg" alt="" />
          </ListItemIcon>
          <ListItemText primary="WATCHLIST" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <img src="/images/original-icon.svg" alt="" />
          </ListItemIcon>
          <ListItemText primary="ORIGINALS" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <img src="/images/movie-icon.svg" alt="" />
          </ListItemIcon>
          <ListItemText primary="MOVIES" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <img src="/images/series-icon.svg" alt="" />
          </ListItemIcon>
          <ListItemText primary="SERIES" />
        </ListItem>
      </Sidebar>
    </div>
  );
  return (
    <HeaderContainer>
      <HamContainer>
        {["left"].map((anchor) => (
          <React.Fragment key={anchor}>
            <HamBtn onClick={toggleDrawer(anchor, true)}>
              <img src="/ham.png" alt="" />
            </HamBtn>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </HamContainer>

      {/* logo */}
      <HomeLink to="/">
        <HeaderLogo src="/images/logo.svg" alt="" />
      </HomeLink>

      {user ? (
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
              src="/images/original-icon.svg"
              alt=""
            />
            <span className="headerNavLink__text">originals</span>
          </li>
          <li>
            <img
              className="header__navIcon"
              src="/images/movie-icon.svg"
              alt=""
            />
            <span className="headerNavLink__text">movies</span>
          </li>
          <li>
            <img
              className="header__navIcon"
              src="/images/series-icon.svg"
              alt=""
            />
            <span className="headerNavLink__text">series</span>
          </li>
        </HeaderMenu>
      ) : (
        <LoginButton onClick={signIn}>LOGIN</LoginButton>
      )}

      {user && <AvatarIcon onClick={signOut} src={user?.photoURL} />}
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  height: 70px;
  /* background-color: #020207; */
  display: flex;
  overflow-x: hidden;
  align-items: center;
  @media (max-width: 850px) {
    justify-content: space-between;
    padding: 0 15px;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;
const HamContainer = styled.div`
  display: none;
  @media (max-width: 850px) {
    display: block;
  }
`;
const Sidebar = styled(List)`
  background-color: #020207;
  color: white;
  height: 100vh;
  img {
    height: 40px;
  }
  a {
    color: white;
    text-decoration: none;
  }
`;
const SidebarText = styled(ListItemText)`
  font-weight: bold;
  font-family: "Poppins", sans-serif;
`;
const HamBtn = styled(Button)`
  color: white;
  letter-spacing: 2px;
  font-weight: bold;
  display: none;
  img {
    height: 30px;
    object-fit: cover;
  }
`;
const HomeLink = styled(Link)`
  flex: 0.2;
  display: flex;
  justify-content: center;
  @media (max-width: 850px) {
    flex: 1;
  }
`;
const HeaderLogo = styled.img`
  height: 50px;
  
`;

const HeaderMenu = styled.div`
  display: flex;
  flex: 1;

  @media (max-width: 850px) {
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
    margin-right: 5px;

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

const AvatarIcon = styled(Avatar)`
  margin-right: 1%;
  border: 2px solid white;
  position: relative;
  cursor: pointer;
  &:hover {
  }
`;
const LoginButton = styled.button`
  padding: 10px 20px;
  font-size: 14px;
  color: white;
  background-color: transparent;
  border: 2px solid rgba(249, 249, 249, 0.8);
  font-weight: bold;
  margin-right: 1%;
  border-radius: 4px;
  cursor: pointer;
  margin-left: auto;
`;
