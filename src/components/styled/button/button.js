import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 260px;
  height: 60px;
  border: none;

  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSize};
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0em;

  color: ${(props) => props.theme.whiteTextXL};

  cursor: pointer;

  transition: 0.3s;
  transition-property: opacity, transform;
  text-decoration: none;

  &:hover {
    opacity: 90%;
  }

  &:active {
    opacity: 80%;
  }
`;

export default StyledButton;
