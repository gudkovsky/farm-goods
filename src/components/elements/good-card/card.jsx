import React from "react";
import Title, { TitleSize } from "/src/components/elements/titles/titles";
import Tabs from "../tabs/tabs";
import Description from "../description/description";
import Price from "../price/price";
import Features from "../good-features/features";
import Properties from "../good-properties/properties";

import {
  GoodsCard,
  ImageWrapper,
  Image,
  TextWrapper,
  CardTitle
} from "./styled";

function Card({ children, good }) {
  const tabs = [
    {
      title: "Описание",
      content: (
        <>
          <Description good={good.description} />
          <Price good={good} />
        </>
      )
    },
    { title: "Характеристики", content: <Features features={good.features} /> },
    { title: "Свойства", content: <Properties properties={good.properties} /> }
  ];
  return (
    <GoodsCard>
      <ImageWrapper>
        <Image src={good.image} />
      </ImageWrapper>
      <TextWrapper>
        <CardTitle $title level={2}>
          {good.name}
        </CardTitle>
        <Tabs tabs={tabs}> </Tabs>
      </TextWrapper>
    </GoodsCard>
  );
}

export default Card;
