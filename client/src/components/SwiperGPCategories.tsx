import { CSSProperties } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import { gamingPeripheralsCategory } from "../data/localdata";
import { Link } from "react-router-dom";

const SwiperGPCategories = () => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      style={
        {
          "--swiper-navigation-color": "#010101",
          "--swiper-pagination-color": "#010101",
        } as CSSProperties
      }
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      className="mySwiper lg:py-12 py-8  md:px-4 md:pt-8 px-4 lg:px-0  "
      breakpoints={{
        320: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 4,
          slidesPerGroup: 1,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 5,
          slidesPerGroup: 1,
          spaceBetween: 20,
        },
        1366: {
          slidesPerView: 5,
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
      {gamingPeripheralsCategory.map((item) => (
        <SwiperSlide key={item.id}>
          <Link
            to={`/gaming-peripherals?category=${item.title.toLowerCase()}`}
            className="flex items-center justify-center flex-col bg-[#F5F5F5] h-[130px]  lg:h-[150px]  rounded-md  px-2"
          >
            <img
              src={item.location}
              alt={item.title}
              className="rounded-sm object-cover w-[50px] mx-auto  "
              loading="lazy"
            />
            <h1 className="text-black text-sm text-center mt-2  lg:text-lg">
              {item.title}
            </h1>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperGPCategories;
