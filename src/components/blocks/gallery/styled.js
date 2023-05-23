import styled, { css } from "styled-components";

import { Swiper } from "swiper/react";
import SwiperCore, { Pagination, Mousewheel, Scrollbar } from "swiper/core";
import "swiper/swiper-bundle.min.css";
import { ReactComponent as LeftArrow } from "/src/assets/left-arrow.svg";
import BuyButton from "/src/components/elements/buttons/buy-button";

SwiperCore.use([Mousewheel, Pagination, Scrollbar]);

const borderShadow = css`
  ${(props) => props.theme.borderShadow}
`;

export const GalleryWrapper = styled.div`
  max-width: 1100px;
  box-sizing: border-box;
  /* border: 1px solid black; */
  padding: 32px 20px;
  background-color: ${(props) => props.theme.whiteForBgXL};
  margin-top: 40px;
  margin-bottom: 40px;
  ${borderShadow}
`;

export const Gallery = styled.div`
  /* max-width: 1100px; */
  /* border: 1px solid red; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  column-gap: 15px;
  row-gap: 30px;
`;
export const BigSliderWrapper = styled.div`
  width: 640px;
  height: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 39px;
  position: relative;
  /* border: 1px solid red; */
`;

export const BigSlider = styled(Swiper)`
  width: 490px;
  height: 200px;
  border-radius: 20px;
`;

export const SliderImage = styled.img`
  width: 490px;
  height: 200px;

  object-fit: cover;
  cursor: pointer;
  box-sizing: border-box;
`;

export const MiniSliderWrapper = styled.div`
  max-width: 390px;
  display: flex;
  flex-direction: row;
  /* border: 1px solid blue; */
`;

export const MiniSlider = styled(Swiper)`
  display: flex;
  width: 390px;
  margin: 0px;
  column-gap: 0px;
  /* border: 3px solid red; */
`;

export const SliderImageMini = styled.img`
  width: 110px;
  height: 90px;
  object-fit: cover;
  cursor: pointer;
  filter: brightness(${(props) => (props.active ? 100 : 50)}%);
`;

export const RightArrow = styled(LeftArrow)`
  transform: rotate(180deg);
`;

export const LeftButton = styled(BuyButton)`
  min-width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: calc(50% - 20px);
`;

export const RightButton = styled(LeftButton)`
  transform: translateX(600px);
`;
