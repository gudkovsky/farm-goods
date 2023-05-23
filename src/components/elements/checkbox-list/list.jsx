import React from "react";
import Checkbox from "../checkbox/chexkbox";
import { Ul } from "./styled";

export default function CheckboxList({
  goods,
  selectValues,
  onChange,
  onClickLabel = () => {}
}) {
  const handleChange = (value) => {
    const newValue = [...selectValues];
    const indexValue = newValue.indexOf(value);
    if (indexValue !== -1) {
      newValue.splice(indexValue, 1);
    } else {
      newValue.push(value);
    }
    onChange && onChange(newValue);
  };
  // console.log("В Check list пришли : ", goods);
  return (
    <Ul name="selected-products">
      {goods &&
        goods.length &&
        goods.map((good, index) => (
          <li key={good.id}>
            <Checkbox
              key={good.id}
              good={good}
              selectValues={selectValues}
              isChecked={selectValues.includes(good.id)}
              onChange={handleChange}
              onClick={(value) => onClickLabel(value, index)}
            ></Checkbox>
          </li>
        ))}
    </Ul>
  );
}
