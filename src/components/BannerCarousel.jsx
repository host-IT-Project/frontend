import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bannerLg from '../assets/img/banner-lg.png';
import bannerSm from '../assets/img/banner-sm.png';

// 캐러셀에 들어갈 배너 정보가 담긴 더미데이터입니다.
// 이 정보를 api를 통해 가져오는 코드가 필요합니다.
export const itemsForHomePage = [
    {
        url: bannerLg,
        name: 'image2',
        description: '설명',
    },
];
export const itemsForArchivePage = [
    {
        url: bannerSm,
        name: 'image2',
        description: '설명',
    },
];

const BannerCarousel = ({ items }) => {
    return (
        <StyledSlider {...bannerSettings}>
            {items.map((step) => (
                <div key={step.name}>
                    <img
                        className="banner-img"
                        src={step.url}
                        alt={step.name}
                    />
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

const StyledSlider = styled(Slider)`
    width: 100%;
    max-height: 320px;
    background: ${({ theme }) => theme.colors.body};
    .slick-dots {
        bottom: 0px;
    }
    .slick-list {
        max-width: 1200px;
        margin: 0 auto;
    }
    .slick-track {
        display: flex;
        justify-content: center;
        align-items: center;
        background: white;
        width: 100%;
        height: 100%;
    }
    .slick-slide {
        width: 100%;
        margin: 0 auto;
    }
    .banner-img {
        width: 100%;
        max-height: 320px;
        max-width: 1200px;
    }
`;

export default BannerCarousel;
