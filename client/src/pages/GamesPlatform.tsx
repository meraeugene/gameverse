import { Link } from "react-router-dom";
import { useFilteredPlatformGames } from "../hooks/useFilteredPlatformGames";
import { Games, Platform } from "../types/types";
import { useState } from "react";
import { formatPrice } from "../utils/formatPrice";

const GamesPlatform = ({ platformCategory }: { platformCategory: string }) => {
  const filteredGames = useFilteredPlatformGames(platformCategory);
  const extractedDetails: Games[] = [];
  const [sortOrder, setSortOrder] = useState("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  filteredGames.forEach((game) => {
    const matchingPlatform = game.platforms.find(
      (platform: Platform) =>
        platform.name.toLowerCase() === platformCategory.toLowerCase()
    );

    if (matchingPlatform) {
      const gameDetail = {
        genre: game.genre,
        id: game.id,
        title: game.title,
        platform: platformCategory,
        image: matchingPlatform.location,
        price: matchingPlatform.price,
        sold: matchingPlatform.sold,
        likes: game.likes,
        releasedYear: game.releasedYear,
      };

      extractedDetails.push(gameDetail);
    }
  });

  const sortedGames = extractedDetails.sort((a, b) => {
    switch (sortOrder) {
      case "latest":
        return b.releasedYear - a.releasedYear; // Sort by descending release year
      case "bestSeller":
        return b.sold - a.sold; // Sort by descending sold count
      case "highToLow":
        return b.price - a.price; // Sort by descending price
      case "lowToHigh":
        return a.price - b.price; // Sort by ascending price
      default:
        return 0;
    }
  });

  const filterBySearch = (data: Games[], query: string) => {
    // if search input field is empty return the data
    if (!query) {
      return data;
    }

    const lowercaseQuery = query.toLowerCase();
    return data.filter(
      (item) =>
        item.title?.toLowerCase().includes(lowercaseQuery) ||
        item.genre?.toLowerCase().includes(lowercaseQuery)
    );
  };

  const filteredAndSortedProducts = filterBySearch(sortedGames, searchQuery);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const noSearchResultsMessage = (
    <div className=" text-gray-400 lg:text-2xl w-full">
      No search results found.
    </div>
  );

  return (
    <div className="text-white bg-[#08080B] px-6 pt-12 md:px-12 lg:pt-16">
      <div className="flex md:items-center md:gap-4  flex-wrap pt-12">
        <h1 className="text-[#f5f5fa] font-revamped text-3xl tracking-wider w-full md:w-auto lg:text-5xl ">
          {platformCategory} Games
        </h1>
        <h1 className="text-lg text-gray-200">{filteredGames.length} items</h1>
      </div>
      <div
        className="flex items-center flex-wrap md:gap-4 md:flex-nowrap  lg:pb-12 pb-10 gap-4 pt-8 lg:pt-10
       md:pb-8"
      >
        <form
          className="w-full md:w-auto "
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="relative ">
            <input
              type="search"
              className="h-[40px] rounded-sm md:rounded-sm w-full lg:h-[45px] bg-transparent border px-3 lg:pl-9 pl-7 pr-2 lg:w-[350px] text-xs md:w-[280px] lg:text-sm outline-none"
              placeholder="Search game title, game genre"
              value={searchQuery}
              onChange={handleSearch}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="lg:w-5 lg:h-5 w-4 h-4  absolute left-[8px] lg:left-[10px] top-[12px] lg:top-[12px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </form>

        <div className=" md:mt-0 w-full md:w-auto  ">
          <select
            name="sortOrder"
            className="  bg-[#f5f5fa] text-[#17171f] 
            h-[40px] lg:h-[45px] md:rounded-sm text-md px-1 outline-none text-xs md:text-sm lg:text-base w-full md:w-auto "
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="" hidden>
              Filter by
            </option>
            <option value="latest">Latest</option>
            <option value="bestSeller">Top Sales</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
        </div>
      </div>
      {filteredAndSortedProducts.length === 0 && noSearchResultsMessage}
      <div className="grid grid-cols-2 gap-6  pb-12 md:grid-cols-4 lg:grid-cols-5 lg:pb-20">
        {filteredAndSortedProducts.map((game) => (
          <div key={game.id}>
            <Link to={`/game?category=${game.platform}&id=${game.id}`}>
              <img
                src={game.image}
                alt={`${game.title}-${game.platform} `}
                className="min-h-[150px] md:h-[200px] lg:h-[300px] w-full object-cover rounded-sm mb-3"
                loading="lazy"
              />
              <div className="flex flex-col gap-1">
                <div className="flex justify-between">
                  <span className="text-sm leading-none font-medium block title text-[#f5f5fa] ">{`${
                    game.title
                  } for ${game.platform.toUpperCase()}`}</span>
                  <span className="text-xs">{game.releasedYear}</span>
                </div>

                <div className="flex items-center gap-1 ">
                  <h2 className=" text-sm text-[#f5f5fa]">
                    {formatPrice(game.price)}
                  </h2>
                  <span className="text-xs text-gray-400">
                    {game.sold} sold
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamesPlatform;
