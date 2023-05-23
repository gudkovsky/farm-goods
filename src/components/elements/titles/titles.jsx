import React from "react";
import { StyledTitle } from "./styles";

export const TitleSize = {
  BIG: "big",
  SMALL: "small",
  SMALLxL: "smallXL"
};

function Title({ level, titleSize, children, className }) {
  return (
    <StyledTitle as={`h${level}`} $size={titleSize} className={className}>
      {children}
    </StyledTitle>
  );
}

export default Title;
