import React from "react";
import styled from "styled-components";
import kakaoLogin from "../assets/img/login/message-circle.png";
import naverLogin from "../assets/img/login/btnG_아이콘사각.png";
import googleLogin from "../assets/img/login/Google__G__Logo 1.png";
import logo from "../assets/img/logo.png";

import PageTemplate from "../template/PageTemplate";
import { Button } from "@mui/material";

const LoginPage = (props) => {
  const socialType = "google";
  // const REDIRECT_URI = `http://localhost:3000/oauth/redirect`;
  // const REDIRECT_URI = `${process.env.REACT_APP_BASE_URL}/oauth/redirect`;
  // const REDIRECT_URI = `https://www.spadeworker.site/oauth/redirect`;

  const BACKEND_URL =
    // `https://spadeworker.site`
    process.env.REACT_APP_BASE_URL;
  const FRONTEND_PORT = 3000;
  // process.env.FRONTEND_PORT === null ? '' : `:${process.env.FRONTEND_PORT}`;
  // const REDIRECT_URI = `${window.location.protocol}//${window.location.hostname}:${FRONTEND_PORT}/oauth/redirect`;
  const REDIRECT_URI = `http://localhost:3000/redirectKakao`;

  return (
    <PageTemplate>
      <StyledLoginPage>
        <div className={"LoginButton-container"}>
          <img className={"logo"} src={logo} alt="호잇" />
          <LoginButton
            className={"kakaoLogin"}
            href={
              // `${process.env.REACT_APP_BASE_URL}/oauth2/authorization/${socialType}?redirect_uri=${REDIRECT_URI}`
              `${BACKEND_URL}/oauth2/authorization/${socialType}?redirect_uri=${REDIRECT_URI}`
            }
          >
            <img className={"login"} src={kakaoLogin} alt="카카오로그인" />
            <span>카카오톡 계정으로 로그인</span>
          </LoginButton>
          <LoginButton className={"naverLogin"}>
            <img className={"login"} src={naverLogin} alt="네이버로그인" />
            <span>네이버 계정으로 로그인</span>
          </LoginButton>
          <LoginButton className={"googleLogin"}>
            <img className={"login"} src={googleLogin} alt="구글로그인" />
            <span>구글 계정으로 로그인</span>
          </LoginButton>
        </div>
      </StyledLoginPage>
    </PageTemplate>
  );
};

const StyledLoginPage = styled.div`
  width: 100%;
  height: 100%;
  div.LoginButton-container {
    border-radius: 1rem;
    background: white;
    width: 100%;
    max-width: 40rem;
    height: 60vh;
    margin: 3rem auto;
    box-shadow: 0 2px 4px 0 hsl(0deg 0% 81% / 50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  img.logo {
    width: 7rem;
    margin-bottom: 5rem;
  }
`;

const LoginButton = styled(Button)`
  width: 100%;
  max-width: 30rem;
  max-height: 70px;
  padding: 0px;
  border: none;
  border-radius: 0.5rem;
  background: transparent;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  box-shadow: 1px 2px 9px 1px hsl(0deg 0% 81% / 50%);
  img.login {
    width: 28px;
    height: 28px;
    margin-left: 1rem;
  }
  span {
    margin: 0 auto;
    font-size: 1.5rem;
  }
  &.MuiButton-text {
    color: black;
  }
  &.kakaoLogin {
    background-color: #fee500;
    width: 100%;
    height: 50px;
  }
  &.naverLogin {
    background-color: #02c75a;
    color: white;
    width: 100%;
    height: 50px;
  }
  &.googleLogin {
    width: 100%;
    height: 50px;
    color: #827c79;
  }
`;

export default LoginPage;
