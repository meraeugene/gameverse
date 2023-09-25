import GenresGrid from "../components/GenresGrid";
import SwiperComponent from "../components/SwiperComponent";
import { gamesData, gpGridImages } from "../data/localdata";
import SwiperHeroImages from "../components/SwiperHeroImages";
import SwiperGPCategories from "../components/SwiperGPCategories";
import { Link } from "react-router-dom";
import { GameInfo } from "../types/types";

const Home = () => {
  const top10Games = [];
  const newGames = [];

  for (const game of gamesData) {
    const gameInfo: GameInfo = {
      id: game.id,
      title: game.title,
      likes: game.likes,
      releasedYear: game.releasedYear,
      genre: game.genre,
      platforms: [], // Initialize an empty array for platforms
    };

    for (const platform of game.platforms) {
      if (platform.name === "PS5") {
        gameInfo.platform = platform.name;
        gameInfo.image = platform.location;
        gameInfo.price = platform.price;
        gameInfo.sold = platform.sold;
      }

      gameInfo.platforms.push(platform.name); // Add platform name to the platforms array
    }

    top10Games.push(gameInfo);

    // Check if the game is a new release (current year)
    if (gameInfo.releasedYear === new Date().getFullYear()) {
      newGames.push(gameInfo);
    }
  }

  return (
    <div className="bg-[#111111] text-white pb-6 pt-12 md:px-8 md:pt-14 ">
      <SwiperHeroImages />

      <div className="gp-grid">
        {gpGridImages.map((item, index) => (
          <div
            className={`gp-grid-${item.title}`}
            key={`${item.title}-${index}`}
          >
            <Link to={`/gaming-peripherals?brand=${item.title}`}>
              <div className="relative">
                <img
                  src={item.image}
                  className="rounded-md h-full w-full"
                  alt={item.title}
                  loading="lazy"
                />
              </div>
            </Link>
          </div>
        ))}
      </div>

      <SwiperGPCategories />

      <div className=" p-4 py-8 lg:pb-20 ">
        <h1 className="font-revamped text-3xl tracking-wider text-center mb-6 lg:text-5xl lg:mb-10 md:text-start pt-2 md:pt-4 text-[#f5f5fa]">
          top 10 games
        </h1>
        <SwiperComponent games={top10Games} />
      </div>

      <div className=" p-4 py-8 lg:pb-20">
        <h1 className="font-revamped text-3xl tracking-wider  text-center mb-6 lg:text-5xl lg:mb-10 md:text-start text-[#f5f5fa]">
          New Games
        </h1>
        <SwiperComponent games={newGames} />
      </div>

      <GenresGrid />
    </div>
  );
};

export default Home;
