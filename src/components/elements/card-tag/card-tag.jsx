import React from "react";
import "./style.css";

export const TagType = {
  FARM: "farm",
  SHOP: "shop"
};

export default function CardTag({ className = "", tagType }) {
  let options;

  switch (tagType) {
    case TagType.FARM:
      options = {
        text: "Фермерские продукты",
        bgColor: "#88AA4D"
      };
      break;
    case TagType.SHOP:
      options = {
        text: "Магазинные продукты",
        bgColor: "#F75531"
      };
      break;
    default:
      options = {
        text: "",
        bgColor: "transparent"
      };
      break;
  }

  return options.text ? (
    <span
      className={`card-tag ${className}`}
      style={{ backgroundColor: options.bgColor }}
    >
      {options.text}
    </span>
  ) : null;
}
