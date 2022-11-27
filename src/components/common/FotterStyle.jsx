import styled from "styled-components";
import style from "../../styles/style.js";

export const StyledFooterContainer = styled.footer`
  height: 210px;
  position: relative;
  transform: translateY(-230px);
  padding: 1.5rem 1.2rem 1rem;
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
      padding-bottom: 1rem;
    }
  }
  .footer-logoList {
    margin-bottom: 1rem;
    display: flex;
    gap: 1rem;

    .logo-department {
      width: 270px;
    }
    .logo-hostit {
      width: 120px;
    }
  }
  .footer-info {
    overflow: hidden;
    margin-bottom: 0.8rem;
    word-break: keep-all;
    font-size: 1.2rem;
    line-height: 2.3rem;
    color: ${({ theme }) => theme.colors.middlegray};

    p {
      display: flex;
      flex-wrap: wrap;
    }
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

  @media ${style.device.mobileL} {
    .footer-linklist {
      display: none;
    }
    .footer-logoList {
      .logo-department,
      .logo-hostit {
        width: auto;
        max-height: 50px;
      }
    }
  }
`;
