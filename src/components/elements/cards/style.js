import styled from "styled-components";
import Title, { TitleSize } from "/src/components/elements/titles/titles";

export const AdvantagesCard = styled.article`
  display: grid;
  grid-template-columns: 56px 1fr;
  gap: 20px;
  padding: 20px;
  min-height: 197px;
  /* background-color: ${(props) =>
    props.Negative ? "#f8ddd7" : "#e1edce"}; */
  background-color: ${(props) => {
    let bgColor = "white";

    if (props.tag === "farm") {
      bgColor = "#e1edce";
    }
    if (props.tag === "shop") {
      bgColor = "#f8ddd7";
    }

    return bgColor;
  }};
`;

export const CardTitle = styled(Title)`
  margin: 0;
  padding: 0;
  font-size: ${(props) => props.theme.fontSizeDefault};
`;

export const TextHeader = styled.header``;

export const CardDescription = styled.p`
  margin: 0;
  padding: 0;
  grid-column: 1 / 3;
  line-height: 120%;
`;
