import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bannerLg from "../assets/img/banner-lg.png";
import bannerSm from "../assets/img/banner-sm.png";
import banner from "../assets/img/main_banner-truly-last-update.png";
import { StyledSlider } from "./BannerCarouselStyle";

// 캐러셀에 들어갈 배너 정보가 담긴 더미데이터입니다.
// 이 정보를 api를 통해 가져오는 코드가 필요합니다.
export const itemsForHomePage = [
  {
    url: banner,
    name: "image2",
    description: "설명",
  },
];
export const itemsForArchivePage = [
  {
    url: banner,
    name: "image2",
    description: "설명",
  },
];

const BannerCarousel = ({ items }) => {
  return (
    <StyledSlider {...bannerSettings}>
      {items.map((step) => (
        <div key={step.name}>
          <img className="banner-img" src={step.url} alt={step.name} />
        </div>
      ))}
    </StyledSlider>
  );
};

const bannerSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  slickNext: true,
  slickPrevious: true,
  swipe: true,
};

export default BannerCarousel;
