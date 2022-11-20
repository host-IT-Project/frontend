import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userSelector } from "../atom/userAtom";
import PageTemplate from "../template/PageTemplate";
import ProductCardList from "../components/ProductCardList";
import styled from "styled-components";

const MyPage = (props) => {
  const user = useRecoilValue(userSelector);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.isLogin) {
      navigate("/login");
    }
  }, []);

  return (
    <PageTemplate
      contents={
        <>
          <StyledHeading>My Porfolio</StyledHeading>
          <ProductCardList horiz={true} />
        </>
      }
    ></PageTemplate>
  );
};

const StyledHeading = styled.h1`
  padding: 10px;
  margin-bottom: 20px;
  font-size: 2.4rem;
  text-align: center;
  font-family: ${({ theme }) => theme.font.gmarketSans};
`;

export default MyPage;
