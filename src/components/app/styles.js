import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html {
  height: 100%;
  margin: 0;
}

body {
  position: relative;
  margin: 0;
  height: 100%;
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSizeDefault};
  line-height: ${(props) => props.theme.lineHeight4Descr};
  font-weight: 400;
  color: ${(props) => props.theme.blackTextL};
}

#root {
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  justify-content:space-between;
}

.wrapper {
  max-width: ${(props) => props.theme.wrapperMaxWidth};
  margin: 0 auto;
}
`;
