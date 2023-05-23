import styled from "styled-components";
import { TitleSize } from "./titles";

export const StyledTitle = styled.h1`
  color: ${(props) => props.theme.blackTextL};
  text-align: left;
  letter-spacing: 0em;
  font-weight: 700;
  font-size: ${(props) => {
    let fontSize = "36px";
    if (props.$size === TitleSize.BIG) {
      fontSize = "44px";
    }
    if (props.$size === TitleSize.SMALL) {
      fontSize = "28px";
    }
    if (props.$size === TitleSize.SMALLxL) {
      fontSize = "18px";
    }
    return fontSize;
  }};
`;
