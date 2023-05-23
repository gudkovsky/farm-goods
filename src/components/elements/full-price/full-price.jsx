import React from "react";

import { Price } from "./styled";

const formatPrice = (value) => {
  const roundedPrice = Math.round(value);
  return roundedPrice.toString().replace(/(\d)(?=(\d\d\d)+$)/, "$1 ");
};

export default function FullPrice({ value }) {
  return <Price>{formatPrice(value)} руб.</Price>;
}
