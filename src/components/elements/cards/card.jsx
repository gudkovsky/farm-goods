import React from "react";
import { TitleSize } from "/src/components/elements/titles/titles";

// import plate from "/src/assets/plate.svg";
// import ground from "/src/assets/ground.svg";
// import badfood from "/src/assets/badfood.svg";
// import badmeet from "/src/assets/badmeet.svg";
import CardTag from "/src/components/elements/card-tag/card-tag";
import {
  AdvantagesCard,
  TextHeader,
  CardTitle,
  CardDescription
} from "./style";

function Card({
  title,
  image,
  description,
  tag, //из компонента по каскаду выше - деструктурировали разложенный через спред ...card
  Negative
}) {
  return (
    <AdvantagesCard Negative={Negative} tag={tag}>
      <img src={image} alt=" " />
      <TextHeader>
        <CardTag className="card__farm-goods" tagType={tag} />
        <CardTitle titleSize={TitleSize.SMALL} level={3}>
          {title}
        </CardTitle>
      </TextHeader>
      <CardDescription dangerouslySetInnerHTML={{ __html: description }} />
    </AdvantagesCard>
  );
}

export default Card;
