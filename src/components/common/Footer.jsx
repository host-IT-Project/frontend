import React from "react";
import logoHostIt from "../../assets/img/logo-host-it.png";
import logoDepartment from "../../assets/img/logo-department.png";
import { StyledFooterContainer } from "./FotterStyle";

const Footer = (props) => (
  <StyledFooterContainer>
    <ul className="footer-linklist">
      <li>
        <a href="/policy">개인정보처리방침</a>
      </li>
      <li>
        <a href="mailto:seonhwakei@gmail.com">시스템 오류 신고</a>
      </li>
    </ul>
    <ul className="footer-logoList">
      <li>
        <img
          className="logo-department"
          src={logoDepartment}
          alt="부산외국어대학교 컴퓨터공학과"
        />
      </li>
      <li>
        <img className="logo-hostit" src={logoHostIt} alt="Host-it" />
      </li>
    </ul>
    <div className="footer-info">
      <p>
        <small>호잇 Hoit</small>
      </p>
      <p>
        <small>제작: 호스트잇</small>
        <small>담당: 제 40대 컴퓨터공학과 학생회 드림</small>
        <small>문의: 컴퓨터공학과 학생회</small>
      </p>
      <p>
        <small>Copyright 2022. Host-it all rights reserved. </small>
      </p>
    </div>
  </StyledFooterContainer>
);

export default Footer;
