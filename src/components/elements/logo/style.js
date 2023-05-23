import styled from "styled-components";

export const LogoLink = styled.a`
  text-decoration: none;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  column-gap: 24px;
`;

export const LogoText = styled.span`
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 28px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  color: ${(props) => props.theme.blackTextL};
`;

export const LogoImage = styled.img`
  width: 44px;
  height: 44px;
`;
