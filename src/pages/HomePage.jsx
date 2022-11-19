import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import { articleSelector } from "../atom/articleAtom";
import BannerCarousel, { itemsForHomePage } from "../components/BannerCarousel";
import ProductCardList from "../components/ProductCardList";
import SearchForm from "../components/search/SearchForm";
import PageTemplate from "../template/PageTemplate";

const HomePage = (props) => {
  const articles = useRecoilValue(articleSelector);

  return (
    <PageTemplate
      contents={
        <StyledHomePage>
          <SearchForm />
          <div className="ScollList-container">
            <h1 className={"title"}>
              컴퓨터 공학과 전시회: 11월 23일까지 제출이에요⏰
            </h1>
            <ScrollList>
              <ProductCardList cardData={articles} />
            </ScrollList>
          </div>
          <div className="ScollList-container">
            <h1 className={"title"}>작품 제출 가이드를 확인할 수 있어요👇🏻</h1>
            <ScrollList>
              <ProductCardList cardData={articles} />
            </ScrollList>
          </div>
          <div className="ScollList-container">
            <h1 className={"title"}>참여할 수 있는 또 다른 행사가 있어요👀</h1>
            <ScrollList>
              <ProductCardList
                cardData={[
                  {
                    id: Date.now(),
                    title: "스케치와 함께하는 카타르 월드컵 응원하기",
                    content: `
                    ✨ 이공대 월드컵 ✨

                    반갑습니다. 32대 스케치 이공대학 학생회입니다.

                    이공대 학우분들, 곧 카타르 월드컵이 개최된다는 거 알고 계셨나요? 저희 스케치에서는 이공대학 학우분들과 잊지 못할 추억을 만들기 위해 월드컵 관람 행사를 진행합니다! 월드컵을 관람하는 동안 치킨과 음료를 무료 제공하니 일시와 장소, 신청 방법을 참고하여 많은 참여 부탁드립니다!

                    📎 일시 : 11월 24일 21:30
                    📎 장소 : 부산 금정구 중앙대로 2041 2층 팔복통닭
                    📎 모집 인원 : 선착순 60명
                    📎 신청 자격 : 이공대학 재학생 ((모바일)학생증 지참)
                    📎 제공 음식 : 치킨, 음료
                    📎 신청 방법 : 본 게시물 댓글로 학과, 학번, 이름 기재
                    `,
                    likesCount: 100,
                    dislikesCount: 0,
                    description: "카타르 월드컵 같이 보기🍗",
                    articleCategory: "잡담",
                    createdAt: "2022-11-16T10:19:03",
                    thumbnailUrl:
                      "http://drive.google.com/uc?export=view&id=1pYq7UCOgh2FOdimTINxzQ4lQPiiGZ0GI",
                    user: {
                      id: 1,
                      username: "게시글 작성자",
                      profileImgUrl:
                        "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
                    },
                    hashtagList: [],
                  },
                  ,
                  ...articles,
                ]}
              />
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
