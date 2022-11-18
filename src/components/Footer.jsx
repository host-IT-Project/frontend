import React from "react";
import styled from "styled-components";
import logoHostIt from "../assets/img/logo-host-it.png";
import logoDepartment from "../assets/img/logo-department.png";

const Footer = (props) => (
  <StyledFooter>
    <ul className="footer-linklist">
      <li>
        <a href="#">개인정보처리방침</a>
      </li>
      <li>
        <a href="#">이용자 약관</a>
      </li>
      <li>
        <a href="#">담당자 안내</a>
      </li>
      <li>
        <a href="#">시스템 오류 신고</a>
      </li>
    </ul>
    <ul className="footer-logoList">
      <li>
        <img
          width={270}
          src={logoDepartment}
          alt="부산외국어대학교 컴퓨터공학과"
        />
      </li>
      <li>
        <img width={120} src={logoHostIt} alt="Host-it" />
      </li>
    </ul>
    <div className="footer-info">
      <p>
        <small>호잇 Hoit</small>
      </p>
      <p>
        <small>제작: 호스트잇</small>
        <small>담당: 제 40대 컴퓨터공학과 학생회 드림</small>
        <small>문의: 컴퓨터공학과</small>
      </p>
      <p>
        <small>
          Copyright 2022. Host-it All pictures cannot be copied without
          permission.
        </small>
      </p>
    </div>
  </StyledFooter>
);
const StyledFooter = styled.footer`
  padding: 0.5rem 1.2rem 1rem;
  background-color: #414141;

  .footer-linklist {
    margin-bottom: 0.5rem;
    display: flex;
    gap: 2rem;
    font-size: 1.4rem;
    font-weight: 400;
    word-break: keep-all;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.lightgray};

    li {
      padding: 1rem 0;
    }
  }
  .footer-logoList {
    margin-bottom: 1rem;
    display: flex;
    gap: 1rem;
  }
  .footer-info {
    overflow: hidden;
    margin-bottom: 0.8rem;
    word-break: keep-all;
    font-size: 1.2rem;
    line-height: 2.3rem;
    color: ${({ theme }) => theme.colors.middlegray};

    p:nth-child(2) {
      small:not(:last-of-type)::after {
        content: " ";
        display: inline-block;
        margin: 0.4rem 0.7rem;
        width: 1px;
        height: 1.5rem;
        vertical-align: top;
        background-color: ${({ theme }) => theme.colors.darkgray};
      }
    }
  }
`;
export default Footer;
