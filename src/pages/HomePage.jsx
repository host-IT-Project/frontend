import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";

import { articleSelector, filteredArticlesAtom } from "../atom/articleAtom";

import BannerCarousel, { itemsForHomePage } from "../components/BannerCarousel";
import ProductCardList from "../components/card/ProductCardList";
import SearchForm from "../components/search/SearchForm";
import PageTemplate from "../template/PageTemplate";

const HomePage = (props) => {
  const articles = useRecoilValue(articleSelector);
  const setFilteredArticles = useSetRecoilState(filteredArticlesAtom);
  const navigate = useNavigate();

  // ArchivePage의 handleSubmitInput와 중복됨
  const handleSubmitInput = (newInputValue) => {
    const filteredArticles = articles.filter(({ title }) =>
      title.includes(newInputValue)
    );
    if (newInputValue && newInputValue.trim() !== "") {
      setFilteredArticles((oldState) => ({
        ...oldState,
        keyword: newInputValue,
        articles: filteredArticles,
      }));
    } else {
      setFilteredArticles((oldState) => ({
        ...oldState,
        keyword: null,
        articles: [],
      }));
    }
    navigate("/archive");
  };

  /**
   * 공지는 가이드로 분류합니다.
   */
  const normal = [];
  const notice = [];
  articles.map((article) =>
    article.articleCategory === "공지"
      ? notice.push(article)
      : normal.push(article)
  );

  return (
    <PageTemplate
      contents={
        <StyledHomePage>
          <SearchForm onSubmitInput={handleSubmitInput} />
          <div className="ScrollList-container">
            <h1 className={"title"}>컴퓨터 공학과 전시회</h1>
            <ScrollList>
              <ProductCardList cardData={normal} />
            </ScrollList>
          </div>
          <div className="ScrollList-container">
            <h1 className={"title"}>작품 제출 가이드를 확인할 수 있어요 👇🏻</h1>
            <ScrollList>
              <ProductCardList cardData={notice} />
            </ScrollList>
          </div>
        </StyledHomePage>
      }
    >
      <BannerCarousel items={itemsForHomePage} />
    </PageTemplate>
  );
};

const StyledHomePage = styled.div`
  .title {
    margin-left: 1.7rem;
    margin-bottom: 8px;
    font-size: 2.5em;
    font-weight: bolder;
    word-break: keep-all;
  }
  .ScollList-container {
    margin-bottom: 3.4rem;
  }
`;
const ScrollList = styled.div`
  width: 100%;
  overflow-x: auto;
  .ProductCardList-root {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }

  &::-webkit-scrollbar {
    height: 15px;
  }

  &::-webkit-scrollbar-track {
    background-color: #e4e4e4;
    border-radius: 100px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 100px;
    background-color: #b5b5b5;
  }
`;

export default HomePage;
