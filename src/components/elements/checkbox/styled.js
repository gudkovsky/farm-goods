import styled from "styled-components";
import checkmark from "../../../assets/check-svgrepo-com.svg";

export const Label = styled.label`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
  padding: 15px 20px;
  box-sizing: border-box;
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const CheckSpan = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #f6f6f6;
  ${HiddenInput}:checked + & {
    background-color: ${(props) => props.theme.orangeForButton};
    background-image: url(${checkmark});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
`;
