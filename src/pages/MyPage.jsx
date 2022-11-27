import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMyArticles } from "../api/user";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { userSelector } from "../atom/userAtom";

import { Divider } from "@mui/material";
import PageTemplate from "../template/PageTemplate";
import ProductCardList from "../components/card/ProductCardList";
import Spinner from "../components/common/Spinner";

const MyPage = (props) => {
  const user = useRecoilValue(userSelector);
  const navigate = useNavigate();

  const [myArticles, setMyArticles] = useState();

  useEffect(() => {
    if (!user.isLogin) {
      navigate("/login");
    }
    (async function _getMyArticles() {
      const response = await getMyArticles();
      setMyArticles(response.data);
    })();
  }, [user]);

  return (
    <PageTemplate
      contents={
        <>
          {!myArticles && <Spinner />}
          <StyledHeading>My Portfolio</StyledHeading>
          <Divider variant="middle" sx={{ mb: 2 }} />
          {myArticles && <Content articles={myArticles} />}
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

const Announce = styled.p`
  margin-top: 80px;
  text-align: center;
  font-family: ${({ theme }) => theme.font.gmarketSans};
  font-size: 1.8rem;
  line-height: 2.6rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.darkgray};
`;

const Content = ({ articles }) => {
  if (articles.length < 1) {
    return (
      <Announce>
        아직 등록한 게시글이 없습니다. <br />새 글을 작성해보세요.
      </Announce>
    );
  } else {
    return <ProductCardList cardData={articles} horiz={true} />;
  }
};

export default MyPage;
