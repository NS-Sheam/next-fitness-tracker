"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { EffectCube, Pagination, Autoplay } from "swiper/modules";
// import "swiper-bundle.css";
import img1 from "../../../assets/images/banner-images/banner-img-1.jpg";
import img2 from "../../../assets/images/banner-images/banner-img-2.jpg";
import img3 from "../../../assets/images/banner-images/banner-img-3.jpg";
import img4 from "../../../assets/images/banner-images/banner-img-4.jpg";
import Image from "next/image";
const SliderSection = () => {
  return (
    <Swiper
      effect={"cube"}
      grabCursor={true}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      pagination={false}
      modules={[Autoplay, EffectCube, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Image
          src={img4}
          alt="img1"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={img2}
          alt="img2"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={img3}
          alt="img3"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={img1}
          alt="img4"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default SliderSection;
