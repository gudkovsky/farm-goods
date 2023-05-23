import styled from "styled-components";

export const Wrapper = styled.div`
  /* flex-grow: 1;
  width: 100%; */
  min-height: 100%;
  width: 100%;

  margin: 0 auto;
  background-color: ${(props) => props.theme.grayForBgL};
`;

export const SectionWrapper = styled.section`
  width: 1100px;
  margin: 0 auto;
`;
