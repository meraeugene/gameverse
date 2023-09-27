import { CSSProperties } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import { heroImagesSlider } from "../data/localdata";
import BlurHashImage from "./BlurHashImage";

const SwiperHeroImages = () => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      style={
        {
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        } as CSSProperties
      }
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      className="mySwiper lg:py-12 pt-6  md:px-4 md:pt-8 px-4 lg:px-0  "
      breakpoints={{
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 20,
        },
        1366: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 20,
        },
        1440: {
          slidesPerView: 6,
          slidesPerGroup: 1,
          spaceBetween: 20,
        },
        2560: {
          slidesPerView: 8,
          slidesPerGroup: 1,
          spaceBetween: 20,
        },
      }}
    >
      {heroImagesSlider.map((item) => (
        <SwiperSlide key={item.id}>
          <BlurHashImage
            src={item.location}
            alt={item.alt}
            className="rounded-sm object-cover"
            hash={item.blurHashString}
            height={[120, 275, 525]}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperHeroImages;
