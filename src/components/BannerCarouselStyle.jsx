import Slider from "react-slick";
import styled from "styled-components";

export const StyledSlider = styled(Slider)`
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
