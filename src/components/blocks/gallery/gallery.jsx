import React, { useState, useRef } from "react";
import { SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Thumbs, Autoplay } from "swiper/core";
import { ReactComponent as LeftArrow } from "/src/assets/left-arrow.svg";
import {
  GalleryWrapper,
  Gallery as PhotoGallery,
  BigSlider,
  SliderImage,
  MiniSlider,
  SliderImageMini,
  BigSliderWrapper,
  MiniSliderWrapper,
  RightArrow,
  LeftButton,
  RightButton
} from "./styled";
import "swiper/swiper.scss";

SwiperCore.use([Navigation, Thumbs, Autoplay]);

function Gallery({ slides }) {
  // console.log("В галерею переданы слайды: ", slides);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return slides && slides.length ? (
    <GalleryWrapper>
      <PhotoGallery>
        <BigSliderWrapper>
          <LeftButton ref={navigationPrevRef}>
            <LeftArrow />
          </LeftButton>
          <RightButton ref={navigationNextRef}>
            <RightArrow />
          </RightButton>
          <BigSlider
            spaceBetween={40}
            loop
            thumbs={{ swiper: thumbsSwiper }}
            onSlideChange={(slider) => setActiveSlide(slider.realIndex)}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false
            }}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <SliderImage
                  width={490}
                  src={slide.img}
                  alt={`pic ${slide.id}`}
                />
              </SwiperSlide>
            ))}
          </BigSlider>
        </BigSliderWrapper>
        <MiniSliderWrapper>
          <MiniSlider
            spaceBetween={30}
            loop
            slidesPerView={3}
            freeMode
            onSwiper={(e) => {
              setThumbsSwiper(e);
              // console.log(
              //   "EL: ",
              //   e,
              //   "Prev: ",
              //   navigationPrevRef,
              //   "Next: ",
              //   navigationNextRef
              // );
            }}
            // watchSlidesProgress
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={slide.id}>
                <SliderImageMini
                  active={activeSlide === index}
                  src={slide.img}
                  alt={`pic ${slide.id}`}
                />
              </SwiperSlide>
            ))}
          </MiniSlider>
        </MiniSliderWrapper>
      </PhotoGallery>
    </GalleryWrapper>
  ) : null;
}

export default Gallery;
