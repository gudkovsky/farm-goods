import React, { forwardRef } from "react";
// import "./style.css";
import { StyledButton as Button } from "/src/components/styled";
import styled from "styled-components";

const StyledButton = styled(Button)`
  background-color: ${(props) => props.theme.orangeForButton};
  font-size: 18px;

  &:disabled {
    cursor: default;
    opacity: 70%;
  }
  /* min-width: ${(props) => `${props.$width}px`}; */
`;

const BuyButton = forwardRef(
  (
    { className, children, link, width, onClick, isDisabled, type, ...props },
    ref
  ) => {
    return (
      <StyledButton
        {...props}
        {...(link ? { to: link } : { as: "button", type })}
        className={className}
        ref={ref}
        // type={type}
        onClick={onClick}
        // $width={width}
        disabled={isDisabled}
      >
        {children}
      </StyledButton>
    );
  }
);

export default BuyButton;
