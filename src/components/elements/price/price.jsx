import React from "react";

import { CardPrice } from "./styled";

export default function Price({ good }) {
  return (
    <CardPrice>
      {good.price} руб./ {good.weight} гр.
    </CardPrice>
  );
}
