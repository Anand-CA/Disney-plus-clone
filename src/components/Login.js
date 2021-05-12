import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";
import { useStateValue } from "../StateProvider";

function Login() {
  const [{}, dispatch] = useStateValue();

  return (
    <LoginContainer>
      <Wrapper>
        <img
          src="https://disney-clone-d1e27.web.app/images/cta-logo-one.svg"
          alt=""
        />
        <button>GET ALL THERE</button>
        <p>
          Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </p>
        <img
          src="https://disney-clone-d1e27.web.app/images/cta-logo-two.png"
          alt=""
        />
      </Wrapper>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  height: calc(100vh - 70px);
  background-image: url("/images/login-background.jpg");
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 10rem 3% 0 3%;
`;
const Wrapper = styled.div`
  max-width: 80vh;
  margin: 0 auto;
  text-align: center;
  button {
    margin-top: 10px;
    background-color: #0a49de;
    color: #fff;
    width: 100%;
    height: 50px;
    border-radius: 5px;
    border: none;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      background-color: #375fbd;
    }
  }
  img {
    margin-top: 10px;
    width: 95%;
  }
  p {
    font-size: 13px;
    margin-top: 10px;
    font-family: "Poppins", sans-serif;
  }
`;
