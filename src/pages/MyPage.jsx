import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userSelector } from "../atom/userAtom";
import PageTemplate from "../template/PageTemplate";
import ProductCardList from "../components/ProductCardList";
import styled from "styled-components";
import { useState } from "react";
import { getArticles } from "../api/article";
import { Divider } from "@mui/material";

const MyPage = (props) => {
  const user = useRecoilValue(userSelector);
  const navigate = useNavigate();

  const [myArticles, setMyArticles] = useState();

  useEffect(() => {
    if (!user.isLogin) {
      navigate("/login");
    }
    (async function _getArticles() {
      const articles = await getArticles({ keyword: user.username });
      setMyArticles(articles);
    })();
  }, [user]);

  return (
    <PageTemplate
      contents={
        <>
          <StyledHeading>My Porfolio</StyledHeading>
          <Divider variant="middle" sx={{ mb: 4 }} />
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
