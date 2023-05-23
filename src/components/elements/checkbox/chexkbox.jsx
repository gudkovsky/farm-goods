import React from "react";
import { Label, HiddenInput, CheckSpan } from "./styled";

export default function Checkbox({
  good,
  text,
  onClick,
  onChange,
  value,
  title,
  isChecked,
  ...props
}) {
  // console.log("...Props", props, "isCheched: ", isChecked);
  return (
    <Label
      title={good.name || "Кликните на продукт чтобы выбрать"}
      $isChecked={isChecked}
      onClick={() => onClick(good.id)}
    >
      {good.name}
      <HiddenInput
        type="checkbox"
        value={good.id}
        name={good.name}
        onChange={() => onChange(good.id)}
      ></HiddenInput>
      <CheckSpan />
    </Label>
  );
}
