import React from "react";
import Logo from "/src/components/elements/logo/logo";
import Nav from "/src/components/blocks/nav/nav";

import { StyledHeader, HeaderWrapper } from "./style";

function Header() {
  return (
    <StyledHeader>
      <HeaderWrapper>
        <Logo />
        <Nav />
      </HeaderWrapper>
    </StyledHeader>
  );
}

export default Header;
