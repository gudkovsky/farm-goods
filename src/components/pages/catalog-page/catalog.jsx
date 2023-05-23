import React from "react";
import Gallery from "../../blocks/gallery/gallery";
import { Wrapper, SectionWrapper } from "./styled";
import Order from "../../blocks/order/order";

function Catalog({ slides, goods }) {
  return (
    <Wrapper>
      <SectionWrapper>
        <Gallery slides={slides}> </Gallery>
        <Order goods={goods} />
      </SectionWrapper>
    </Wrapper>
  );
}

export default Catalog;
