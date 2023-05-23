import React from "react";
import Logo from "/src/components/elements/logo/logo";
import Copyright from "/src/components/elements/copyright/copyright";
import { StyledFooter, FooterWrapper } from "./style";

function Footer() {
  return (
    <StyledFooter>
      <FooterWrapper>
        <Logo />
        <Copyright />
      </FooterWrapper>
    </StyledFooter>
  );
}

export default Footer;
