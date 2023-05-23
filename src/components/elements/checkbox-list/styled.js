import styled, { css } from "styled-components";
import checkmark from "../../../assets/check-svgrepo-com.svg";
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

export const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
export const Label = styled.label`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
  padding: 15px 20px;
  box-sizing: border-box;
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const CheckSpan = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #f6f6f6;
  ${HiddenInput}:checked + & {
    background-color: ${(props) => props.theme.orangeForButton};
    background-image: url(${checkmark});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
`;

export const AdressInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 5px;
  background-color: #f6f6f6;
  outline: none;
  box-sizing: border-box;
`;

export const Price = styled.span`
  display: block;
  /* align-self: start; */
  text-align: left;
  font-size: 24px;
  font-weight: 700;
  line-height: 31px;
  letter-spacing: 0em;
  /* text-align: center; */
`;

export const StyledSlide = styled(SwiperSlide)`
  width: 725px;
  height: 288px;
`;
