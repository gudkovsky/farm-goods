import styled from "styled-components";

export const CardPrice = styled.span`
  background-color: ${(props) => props.theme.blueForBg};
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizeSmall};
  padding: 4px 8px;
  width: fit-content;
`;
