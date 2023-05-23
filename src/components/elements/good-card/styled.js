import styled, { css } from "styled-components";
import Title, { TitleSize } from "/src/components/elements/titles/titles";
import { SwiperSlide } from "swiper/react";
const borderShadow = css`
  ${(props) => props.theme.borderShadow}
`;

export const GoodsCard = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 20px;
  padding: 20px;
  min-height: 197px;
  margin-bottom: 12px;
  ${borderShadow}
  max-width: 728px;
  max-height: 288px;
  box-sizing: border-box;
`;

export const CardTitle = styled(Title)`
  margin: 0;
  padding: 0;
  font-size: ${(props) =>
    props.$title ? "24px" : props.theme.fontSizeDefault};
`;

export const ImageWrapper = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 / 2;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

export const Image = styled.img`
  width: 248px;
  height: 248px;
  object-fit: cover;
`;
