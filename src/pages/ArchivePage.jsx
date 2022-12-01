import React from "react";
import { useRecoilValue } from "recoil";
import {
  articlesSelector,
  articlesFilterState,
  filteredArticlesSelector,
} from "../atom/articleAtom.js";

import PageTemplate from "../template/PageTemplate";
import SearchForm from "../components/search/SearchForm";
import BannerCarousel, {
  itemsForArchivePage,
} from "../components/BannerCarousel";
import ProductCardList from "../components/card/ProductCardList";

const ArchivePage = (props) => {
  const articles = useRecoilValue(articlesSelector);
  const filter = useRecoilValue(articlesFilterState);
  const filteredArticles = useRecoilValue(filteredArticlesSelector);

  // const handleSubmitTag = (newTagList) => {
  //   /**
  //    * @TODO
  //    * 태그 검색 구현 필요함
  //    */
  //   const filteredArticles = articles.filter(({ hashtagList }) => {
  //     newTagList.forEach((tag) => {
  //       if (!hashtagList.includes(tag)) {
  //         return false;
  //       }
  //     });
  //     return true;
  //   });
  //   if (filteredArticles.length === 0) {
  //     setFilteredArticles((oldState) => ({ ...oldState, articles: [] }));
  //   } else {
  //     setFilteredArticles((oldState) => ({
  //       ...oldState,
  //       articles: filteredArticles,
  //     }));
  //   }
  // };

  return (
    <PageTemplate
      contents={
        <>
          <SearchForm />
          {filteredArticles.length !== 0 ? (
            <ProductCardList cardData={filteredArticles} />
          ) : (
            <>
              <h3>
                '{filter}'와(과) 일치하는 검색결과가 없습니다. 아래의 게시물들은
                어떠신가요?
              </h3>
              <ProductCardList cardData={articles} />
            </>
          )}
        </>
      }
    >
      <BannerCarousel items={itemsForArchivePage} />
    </PageTemplate>
  );
};

export default ArchivePage;
