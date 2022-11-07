import React from "react";
import { Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import styled from "styled-components";

const BannerAnchor = styled.a`
  display: block;
  /* max-width: 1200px; */
  text-align: center;
`;

const BannerImage = styled.img`
  /* width: 100%; */
`;

// 캐러셀에 들어갈 배너 정보가 담긴 더미데이터입니다.
// 이 정보를 api를 통해 가져오는 코드가 필요합니다.
const items = [
  {
    name: "제목",
    description: "설명",
    url: "",
    image: "https://via.placeholder.com/1200x270",
  },
  {
    name: "제목2",
    url: "",
    description: "설명2",
    image: "https://via.placeholder.com/1200x270",
  },
];

const BannerCarousel = (props) => {
  const carouselSettings = {
    // mui 캐러셀 라이브러리에서 지원하는 carousel 컴포넌트 오토세팅 프로퍼티
    autoPlay: true,
    animation: "slide",
    indicators: true,
    duration: 500,
    navButtonsAlwaysVisible: true,
    navButtonsAlwaysInvisible: false,
    cycleNavigation: true,
    fullHeightHover: true,
    swipe: false,
  };

  return (
    <Carousel {...carouselSettings}>
      {items.map((item, i) => {
        // BannerCarousel의 프롭으로 items를 받아옵니다.
        return <Banner item={item} key={i} />;
      })}
    </Carousel>
  );
};

const Banner = ({ item }) => {
  return (
    <Paper elevation={0} sx={{ textAlign: "center", maxWidth: "1200px" }}>
      <p className="a11y-hidden">{item.name}</p>
      <BannerAnchor href={item.url}>
        <BannerImage src={item.image} alt={item.description} />
      </BannerAnchor>
    </Paper>
  );
};

Banner.defaultProps = {
  item: {
    name: "빈 배너",
    description: "빈 배너",
    url: "",
    image: "https://via.placeholder.com/700*350",
  },
};

export default BannerCarousel;
