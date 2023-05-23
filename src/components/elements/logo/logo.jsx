import React from "react";

import logo from "/src/assets/logo.svg";
import { LogoImage, LogoText, LogoLink } from "./style";

function Logo() {
  return (
    <LogoLink href="#" className="logo">
      <LogoImage src={logo} alt="logo" />
      <LogoText>Фермерские продукты</LogoText>
    </LogoLink>
  );
}

export default Logo;
