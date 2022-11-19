import React from 'react';
import PageTemplate from '../template/PageTemplate';
import SearchForm from '../components/search/SearchForm';
import BannerCarousel, {
  itemsForArchivePage,
} from '../components/BannerCarousel';
import ListWithTabs from '../components/ListWithTabs';
import { useRecoilState, useRecoilValue } from 'recoil';
import { articleSelector, filteredArticlesAtom } from '../atom/articleAtom.js';

const ArchivePage = (props) => {
  const articles = useRecoilValue(articleSelector);
  const [filteredArticles, setFilteredArticles] =
    useRecoilState(filteredArticlesAtom);

  const handleSubmitInput = (newInputValue) => {
    const filteredArticles = articles.filter(({ title }) =>
      title.includes(newInputValue)
    );
    if (newInputValue && newInputValue.trim() !== '') {
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
  };

  const handleSubmitTag = (newTagList) => {
    /**
     * @TODO
     * 태그 검색 구현 필요함
     */
    const filteredArticles = articles.filter(({ hashtagList }) => {
      newTagList.forEach((tag) => {
        if (!hashtagList.includes(tag)) {
          return false;
        }
      });
      return true;
    });
    if (filteredArticles.length === 0) {
      setFilteredArticles((oldState) => ({ ...oldState, articles: [] }));
    } else {
      setFilteredArticles((oldState) => ({
        ...oldState,
        articles: filteredArticles,
      }));
    }
  };

  return (
    <PageTemplate
      contents={
        <>
          <SearchForm
            articles={articles.articles}
            tagList={['컴퓨터공학과', '태그1', '태그2']}
            onSubmitInput={handleSubmitInput}
            onSubmitTag={handleSubmitTag}
          />
          {filteredArticles.articles.length === 0 &&
            filteredArticles.keyword !== null && (
              <h3>
                '{filteredArticles.keyword}'와(과) 일치하는 검색결과가 없습니다.
                아래의 게시물들은 어떠신가요?
              </h3>
            )}
          {filteredArticles.articles.length !== 0 ? (
            <ListWithTabs cardData={filteredArticles.articles} />
          ) : (
            <ListWithTabs cardData={articles.articles} />
          )}
        </>
      }
    >
      <BannerCarousel items={itemsForArchivePage} />
    </PageTemplate>
  );
};

export default ArchivePage;
