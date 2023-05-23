import React from "react";
import {
  AboutSection,
  AboutWrapper,
  AboutTitle,
  AboutTextWrapper,
  AboutDescription,
  ImageWrapper
} from "./style";
import farmer from "/src/assets/farmer.png";
import Title from "/src/components/elements/titles/titles";

function About() {
  return (
    <>
      <AboutSection>
        <AboutWrapper className="wrapper">
          <AboutTextWrapper>
            <AboutTitle level={1}>
              Магазин фермерских продуктов с доставкой
            </AboutTitle>
            <AboutDescription>
              Все продукты изготавливаются под заказ. Фермеры начинают готовить
              продукты за день до отправки заказа клиентам. Именно поэтому мы
              принимаем заказы заранее и доставляем продукты максимально
              свежими.
            </AboutDescription>
          </AboutTextWrapper>
          <ImageWrapper>
            <img src={farmer} alt="farmer pic" />
          </ImageWrapper>
        </AboutWrapper>
      </AboutSection>
    </>
  );
}

export default About;
