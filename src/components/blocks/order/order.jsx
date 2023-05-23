import React, { useState } from "react";
import Card from "../../elements/good-card/card";
import Title, { TitleSize } from "/src/components/elements/titles/titles";
import BuyButton from "/src/components/elements/buttons/buy-button";
import SwiperCore, { Pagination, Mousewheel, Scrollbar } from "swiper/core";
import "swiper/swiper-bundle.min.css";
import CheckboxList from "../../elements/checkbox-list/list";
import FullPrice from "../../elements/full-price/full-price";
import Popup from "../pop-up/popup";
import {
  OrderWrapper,
  FilterWrapper,
  BuyWrapper,
  GoodsWrapper,
  AdressInput,
  StyledSlide,
  NoProducts
} from "./styled";

SwiperCore.use([Mousewheel, Pagination, Scrollbar]);

export default function Order({ goods }) {
  // console.log("В компоненте Order мне переданы карточки: ", goods);
  const [adress, setAdress] = useState("");
  const [selectProductIds, setSelectProductIds] = useState([]);
  const [swiperRef, setSwiperRef] = useState(null);
  const [popupShow, setPopupShow] = useState(false);

  const handleOnClickProduct = (value, index) => {
    if (!selectProductIds.includes(value)) {
      swiperRef.slideTo(index, 0);
    }
  };

  function handleReloadClick() {
    window.location.reload();
  }

  const selectedProducts = selectProductIds.map((id) =>
    goods.find((product) => product.id === id)
  );
  const fullPrice = selectedProducts.reduce(
    (sum, product) => (sum += product.price),
    0
  );

  const handleBuyClick = () => {
    // alert(`Спасибо за заказ, вы купили:\n${selectedProducts.map(
    //   (product) => `${product.name} - ${product.price} руб.\n`
    // )}
    // Итого: ${fullPrice} руб.
    // Доставка по адресу: ${adress}.`);
    setPopupShow(true);
  };

  // console.log("Были изменены продукты: ", selectProductIds);
  return goods && goods.length ? (
    <OrderWrapper as="form">
      <FilterWrapper>
        <Title level={2} titleSize={TitleSize.SMALLxL}>
          Выберите продукты
        </Title>
        <CheckboxList
          goods={goods}
          selectValues={selectProductIds}
          onChange={setSelectProductIds}
          onClickLabel={handleOnClickProduct}
        ></CheckboxList>
      </FilterWrapper>
      <BuyWrapper>
        <Title level={2} titleSize={TitleSize.SMALLxL}>
          Сделать заказ
        </Title>
        <AdressInput
          placeholder="Введите адрес доставки"
          value={adress}
          onChange={(e) => setAdress(e.target.value)}
        />
        <div>
          <span>Цена:</span>
          <FullPrice value={fullPrice}></FullPrice>
        </div>
        <BuyButton
          isDisabled={!(selectProductIds.length && adress)}
          onClick={handleBuyClick}
        >
          Купить
        </BuyButton>
      </BuyWrapper>
      <GoodsWrapper
        onSwiper={setSwiperRef}
        spaceBetween={12}
        direction="vertical"
        slidesPerView="auto"
        scrollbar={{ draggable: true }}
        mousewheel
        // pagination={{
        //   dynamicBullets: true,
        //   type: "progressbar",
        //   progressbarOpposite: true
        // }}
      >
        {goods &&
          goods.length &&
          goods.map((good, index) => (
            <StyledSlide key={good.id}>
              <Card good={good} />
            </StyledSlide>
          ))}
      </GoodsWrapper>
      <Popup
        isShow={popupShow}
        goods={selectedProducts}
        adress={adress}
        fullPrice={fullPrice}
        onClose={() => setPopupShow(false)}
        onOrder={() => {
          alert("success");
          setAdress("");
          setSelectProductIds([]);
          setPopupShow(false);
          handleReloadClick();
        }}
      />
    </OrderWrapper>
  ) : (
    <NoProducts>
      <Title level={3}>Продукты были очень вкусные и их разбрали :)</Title>
    </NoProducts>
  );
}

// const alertTimeMs = 4000;

// const buildAlertMessage = (message) => {
//   const alertDiv = document.createElement("div");
//   alertDiv.style.cssText = `
// position: absolute;
// z-index: 99;
// text-align: center;
// top: 0;
// left: 0;
// right: 0;
// background-color: rgba(255,255,255,0.5);
// font-family: "Open Sans", "Arial", sans-serif;
// color: black;
// font-size: 30px;
// padding: 20px 25px;
// `;
//   alertDiv.textContent = message;
//   document.body.append(alertDiv);

//   setTimeout(() => {
//     alertDiv.remove();
//   }, alertTimeMs);
// };
