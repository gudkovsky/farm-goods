import styled from "styled-components";

export const PropWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  font-size: ${(props) => props.theme.fontSizeSmall};
  line-height: 21px;
`;

export const PropType = styled.span`
  font-weight: 700;
`;

export const PropDetails = styled.span`
  ${PropType} + & {
    margin-left: 10px;
  }
`;
