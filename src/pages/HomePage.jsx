import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { articleSelector } from '../atom/articleAtom';
import BannerCarousel, { itemsForHomePage } from '../components/BannerCarousel';
import ProductCardList from '../components/ProductCardList';
import SearchForm from '../components/search/SearchForm';
import PageTemplate from '../template/PageTemplate';

const HomePage = (props) => {
  const articles = useRecoilValue(articleSelector);

  return (
    <PageTemplate
      contents={
        <StyledHomePage>
          <SearchForm />
          <div className="ScollList-container">
            <h1 className={'title'}>지금 가장 조회수가 높은 👀</h1>
            <ScrollList>
              <ProductCardList cardData={articles} />
            </ScrollList>
          </div>
          <div className="ScollList-container">
            <h1 className={'title'}>가장 많이 사용된 스택 C#</h1>
            <ScrollList>
              <ProductCardList cardData={articles} />
            </ScrollList>
          </div>
          <div className="ScollList-container">
            <h1 className={'title'}>지금 막 올라왔어요 🆕</h1>
            <ScrollList>
              <ProductCardList cardData={articles} />
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
    font-size: 2.5em;
    font-weight: bolder;
    margin-left: 1.7rem;
  }
  .ScollList-container {
    margin-bottom: 3rem;
  }
`;
const ScrollList = styled.div`
  height: 355px;
  width: 100%;
  overflow-x: scroll;
  .ProductCardList-root {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

export default HomePage;
