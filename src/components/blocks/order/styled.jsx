import styled, { css } from "styled-components";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";

const borderShadow = css`
  ${(props) => props.theme.borderShadow}
`;

export const OrderWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  width: 1100px;

  height: 908px;
  box-sizing: border-box;
  /* border: 1px solid black; */
  /* padding: 32px 20px; */

  margin-top: 40px;
  margin-bottom: 40px;

  row-gap: 20px;
  column-gap: 20px;
`;

export const FilterWrapper = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  min-height: 200px;
  padding: 20px;
  ${borderShadow}
  background-color: ${(props) => props.theme.whiteForBgXL};
`;

export const BuyWrapper = styled.div`
display: flex;
flex-direction: column;
row-gap: 25px;
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  ${borderShadow}
  background-color: ${(props) => props.theme.whiteForBgXL};
  padding: 20px;
`;

export const GoodsWrapper = styled(Swiper)`
  width: 727px;
  grid-column: 2 / 3;
  grid-row: 1 / 4;
`;

export const AdressInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 5px;
  background-color: #f6f6f6;
  outline: none;
  box-sizing: border-box;
`;

export const StyledSlide = styled(SwiperSlide)`
  width: 725px;
  height: 288px;
`;

export const NoProducts = styled.div`
  height: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 40px;
  align-items: center;
  margin-bottom: 40px;
  ${borderShadow};
  background-image: url("https://img.freepik.com/free-vector/farmer-set_23-2148528259.jpg?w=996&t=st=1684495834~exp=1684496434~hmac=f0e0bf128e283b359e6241cf673e29dc85e7c42c6f18450eb118f8c8cb66c204");
`;
