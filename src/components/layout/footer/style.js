import styled from "styled-components";

export const StyledFooter = styled.footer`
  border-top: 1px solid ${(props) => props.theme.forFooterBorder};
`;

export const FooterWrapper = styled.div`
  width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  box-sizing: border-box;
`;
