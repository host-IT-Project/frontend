import React from "react";
import styled from "styled-components";
import kakaoLogin from "../assets/img/login/message-circle.png";
import googleLogin from "../assets/img/login/Google__G__Logo 1.png";
import logo from "../assets/img/logo.png";
import PageTemplate from "../template/PageTemplate";
import { Button } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userSelector } from "../atom/userAtom";

const LoginPage = (props) => {
  const navigate = useNavigate();
  const { isLogin } = useRecoilValue(userSelector);
  const BACKEND_URL = process.env.REACT_APP_BASE_URL;
  const FRONTEND_PORT =
    process.env.REACT_APP_FRONTEND_PORT === undefined
      ? ""
      : `:${process.env.REACT_APP_FRONTEND_PORT}`;
  const REDIRECT_URI = `${window.location.protocol}//${window.location.hostname}${FRONTEND_PORT}/oauth/redirect`;

  useEffect(() => {
    if (isLogin) {
      navigate(-1, {
        replace: true,
      });
    }
  }, []);

  return (
    <PageTemplate>
      <StyledLoginPage>
        <div className={"LoginButton-container"}>
          <img className={"logo"} src={logo} alt="호잇" />
          <LoginButton
            className={"kakaoLogin"}
            href={`${BACKEND_URL}/oauth2/authorization/kakao?redirect_uri=${REDIRECT_URI}`}
          >
            <img className={"login"} src={kakaoLogin} alt="카카오로그인" />
            <span>카카오톡 계정으로 로그인</span>
          </LoginButton>
          <LoginButton
            className={"googleLogin"}
            href={`${BACKEND_URL}/oauth2/authorization/google?redirect_uri=${REDIRECT_URI}`}
          >
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
