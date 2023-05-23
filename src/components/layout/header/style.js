import styled from "styled-components";

export const StyledHeader = styled.header`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.04), 0 0 2px rgba(0, 0, 0, 0.06),
    0 0 1px rgba(0, 0, 0, 0.04);
  align-items: center;
  z-index: 5;
`;

export const HeaderWrapper = styled.div`
  width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  box-sizing: border-box;
`;
