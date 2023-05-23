import React from "react";

import { FeatureDetails, FeatureType, FeaturesWrapper } from "./styled";

export default function Features({ features }) {
  // console.log("В features пришли данные: ", features);
  return (
    <FeaturesWrapper>
      {features &&
        features.length &&
        features.map((feature) => {
          console.log("feature: ", feature);
          return (
            <div key={feature.id}>
              <FeatureType>{feature.property}</FeatureType>:
              <FeatureDetails>{feature.value}</FeatureDetails>
            </div>
          );
        })}
    </FeaturesWrapper>
  );
}
