import styled from "styled-components";
import Title from "/src/components/elements/titles/titles";
import { P } from "/src/components/styled";

export const AboutSection = styled.section`
  background-color: ${(props) => props.theme.blueForBg};
`;

export const AboutWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 10%;
  min-height: 600px;
`;

export const AboutTitle = styled(Title)`
  margin-bottom: 24px;
  font-size: 44px;
  font-weight: 700;
  line-height: 51px;
  letter-spacing: 0em;
  text-align: left;
`;

export const AboutTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const AboutDescription = styled(P)``;

export const ImageWrapper = styled.div`
  display: flex;
  min-width: 448px;
  position: relative;
  overflow: hidden;
  justify-content: center;

  img {
    align-self: flex-end;
    position: relative;
  }
  &::before {
    content: "";
    position: absolute;
    width: 446px;
    height: 446px;
    border-radius: 50%;
    top: calc(50% - (446px / 2));
    left: calc(50% - (446px / 2));
    background-color: ${(props) => props.theme.blueForBgL};
    z-index: 0;
  }
`;
