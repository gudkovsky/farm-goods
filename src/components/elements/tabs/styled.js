import styled from "styled-components";
import Title from "/src/components/elements/titles/titles";

export const TabRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 8px;
`;

export const TabTitle = styled(Title)`
  margin: 0;
  padding: 0;
  font-size: ${(props) => (props.$title ? "24px" : props.theme.fontSizeSmall)};
  color: ${(props) =>
    props.$current ? props.theme.whiteTextXL : props.theme.blackTextL};
`;

export const TabButton = styled.button`
  border: 1px solid rgba(0, 0, 0, 0.1);
  outline: none;
  cursor: pointer;
  padding: 8px 12px;
  background-color: ${(props) =>
    props.$current ? props.theme.greenForTab : props.theme.grayForBgL};
  transition: 0.3s;
  &:hover {
    opacity: 80%;
  }
  &:active {
    filter: brightness(95%);
  }
`;

export const TabContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  row-gap: 16px;
`;
