import React from "react";
import BuyButton from "/src/components/elements/buttons/buy-button";
import { routes } from "/src/data/routes";
import { useLocation } from "react-router-dom";
// import PageWrapper from "../../layout/page-wrapper/page-wrapper";

const buttons = [
  {
    to: routes.MAIN,
    button: (
      <BuyButton key={routes.MAIN} link={routes.MAIN}>
        На главную
      </BuyButton>
    )
  },
  {
    to: routes.BUY,
    button: (
      <BuyButton key={routes.BUY} link={routes.BUY}>
        Купить билет
      </BuyButton>
    )
  }
];

function Nav() {
  const pageUrl = useLocation().pathname;
  return (
    <nav>
      {buttons
        .filter((button) => pageUrl !== button.to)
        .map((button) => button.button)}
      {/* <BuyButton link={routes.BUY}>Купить</BuyButton> */}
    </nav>
  );
}

export default Nav;
