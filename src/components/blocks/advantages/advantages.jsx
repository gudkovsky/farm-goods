import React from "react";
import "./style.css";
import BuyButton from "/src/components/elements/buttons/buy-button";
import Title, { TitleSize } from "/src/components/elements/titles/titles";
import { routes } from "/src/data/routes";

import Card from "/src/components/elements/cards/card";
import { AdvantagesList, AdvantagesWrapper, AdvantagesSection } from "./style";

function Advantages({ cards }) {
  return (
    <>
      {cards?.length ? (
        <AdvantagesSection>
          <AdvantagesWrapper className="wrapper advantages__wrapper">
            <Title titleSize={TitleSize.BIG} level={2}>
              Почему фермерские продукты лучше?
            </Title>
            <AdvantagesList className="advantages__list">
              {cards.map((card, index) => (
                <Card {...card} key={index} />
              ))}
            </AdvantagesList>
            <BuyButton link={routes.BUY}>Купить</BuyButton>
          </AdvantagesWrapper>
        </AdvantagesSection>
      ) : null}
    </>
  );
}

export default Advantages;
