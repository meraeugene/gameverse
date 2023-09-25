import { CSSProperties } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { GameInfo } from "../types/types";
import { formatPrice } from "../utils/formatPrice";

const SwiperComponent = ({ games }: { games?: GameInfo[] }) => {
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
      modules={[Pagination, Navigation]}
      className="mySwiper"
      breakpoints={{
        320: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 4,
          slidesPerGroup: 1,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
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
      {games?.map((game) => (
        <SwiperSlide key={game.id}>
          {game && (
            <Link
              to={`/game?category=${(
                game?.platform || "unknown"
              ).toLowerCase()}&id=${game?.id}`}
            >
              <img
                src={game.image}
                alt={game.title}
                className="h-[180px] md:h-[200px] lg:h-[300px] w-full object-cover rounded-sm mb-3 "
                loading="lazy"
              />
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 mt-0 lg:mt-1 mb-1 flex-wrap">
                  {game.platforms.map((item, index) => (
                    <div
                      className="text-xs border px-2 py-[0.20em] lg:py-[.40em] md:px-1 rounded-sm tracking-widest text-gray-200"
                      key={index}
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm leading-none font-medium block title ">{`${game.title} for ${game.platform}`}</span>
                  <h2 className="text-xs text-gray-400">{game.releasedYear}</h2>
                </div>
                <div className="flex items-center gap-1 ">
                  <h2 className=" text-sm ">
                    {game.price && formatPrice(game.price)}
                  </h2>
                  <span className="text-xs text-gray-400">
                    {game.sold} sold
                  </span>
                </div>
              </div>
            </Link>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
