import styled from "styled-components";

export const FeaturesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  font-size: ${(props) => props.theme.fontSizeSmall};
  line-height: 21px;
`;

export const FeatureType = styled.span`
  font-weight: 700;
`;

export const FeatureDetails = styled.span`
  ${FeatureType} + & {
    margin-left: 10px;
  }
`;
