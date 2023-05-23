import React from "react";

import { PropWrapper, PropDetails, PropType } from "./styled";

export default function Properties({ properties }) {
  // console.log("В пропертис пришли данные: ", properties);
  return (
    <PropWrapper>
      {properties &&
        properties.length &&
        properties.map((property) => {
          console.log("feature: ", property);
          return (
            <div key={property}>
              <PropType>{property.property}</PropType>:
              <PropDetails>{property.value}</PropDetails>
            </div>
          );
        })}
    </PropWrapper>
  );
}
