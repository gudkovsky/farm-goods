import React, { useEffect } from "react";
import BuyButton from "../../elements/buttons/buy-button";

import { Header, Wrapper, Title, Close, Overlay } from "./styled";

export default function Popup({
  children,
  onClose,
  isShow,
  goods,
  fullPrice,
  adress,
  onOrder
}) {
  const handleEscape = (e) => {
    if (e.key === "Escape") {
      onClose && onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isShow ? (
    <Overlay>
      <Wrapper>
        <Header>
          <Title>Подтвердите заказ</Title>
          <Close onClick={onClose}>X</Close>
        </Header>
        Спасибо за заказ, вы купили:
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            rowGap: "30px",
            marginBottom: "20px",
            marginTop: "20px"
          }}
        >
          {goods.map((product) => (
            <li key={product.id}>
              {product.name} - {product.price} руб.
            </li>
          ))}
          <div>Итого: {fullPrice} руб. </div>
          <div>Доставка по адресу: {adress}</div>
          <textarea
            style={{ padding: "10px", resize: "none" }}
            placeholder="Дополнительный комментарий, если нужно уточнить детали"
          />
        </div>
        <BuyButton onClick={onOrder} type="submit">
          Сделать заказ
        </BuyButton>
      </Wrapper>
    </Overlay>
  ) : null;
}
