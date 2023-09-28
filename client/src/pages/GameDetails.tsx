import { useLocation, useNavigate } from "react-router-dom";
import { gamesData } from "../data/localdata";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../features/cart/cartSlice";
import { Product, Platform, SelectedGame } from "../types/types";
import { formatPrice } from "../utils/formatPrice";
import BlurHashImage from "../components/BlurHashImage";

const GameDetails = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  const platformName = queryParams.get("category");
  const [selectedGame, setSelectedGame] = useState<SelectedGame | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  const [game, setGame] = useState<Product | null>(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const gameData = gamesData.find((game) => game.id === Number(id));

    if (gameData) {
      setSelectedGame(gameData);
      const defaultPlatform =
        gameData.platforms.find(
          (platform) => platform.name.toLowerCase() === platformName
        ) || null;
      setSelectedPlatform(defaultPlatform);

      const newGame: Product = {
        id: gameData.id,
        genre: gameData.genre,
        releasedYear: gameData.releasedYear,
        title: gameData.title,
        location: defaultPlatform?.location || "",
        name: defaultPlatform?.name || "",
        price: defaultPlatform?.price || 0,
        stocks: defaultPlatform?.stocks || 0,
      };

      setGame(newGame);
    } else {
      setSelectedGame(null);
      setSelectedPlatform(null);
      setGame(null);
    }
  }, [id]);

  useEffect(() => {
    if (selectedGame && selectedPlatform) {
      const updatedGame = {
        ...selectedGame,
        location: selectedPlatform.location || "",
        name: selectedPlatform.name || "",
        price: selectedPlatform.price || 0,
        stocks: selectedPlatform.stocks || 0,
      };
      setGame(updatedGame);
    }
  }, [selectedPlatform, selectedGame]);

  const handleImageClick = (platform: Platform) => {
    setSelectedPlatform(platform);
    setQuantity(1);
  };

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const handleDecreaseQuantity = () => {
    setQuantity((prev) => (prev <= 1 ? 1 : prev - 1));
  };

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleAddToCart = () => {
    if (game) {
      const modifiedTitleGame: Product = {
        ...game,
        title: `${game.title ?? ""} for ${game.name ?? ""}`,
      };
      dispatch(addItemToCart({ product: modifiedTitleGame, quantity }));
    }
  };

  return (
    <div className="text-white pt-12 pb-0 bg-[#111111]">
      <div className="pt-12 md:px-12">
        <button
          className="flex bg-[#f5f5fa] text-[#17171f] w-[100px] items-center justify-center 
        rounded-tr-sm rounded-br-sm h-[40px] md:rounded-sm text-md"
          onClick={goBack}
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.23047 11.8079L13.6879 8.09346C14.2089 7.65924 15 8.02976 15 8.70803V15.292C15 15.9702 14.2089 16.3408 13.6879 15.9065L9.23047 12.1921C9.11053 12.0921 9.11053 11.9079 9.23047 11.8079Z"
              fill="#222222"
            ></path>
          </svg>
          Back
        </button>
      </div>
      {selectedGame && (
        <div className="flex py-8 flex-col md:px-12 md:flex-row gap-3  lg:pb-36 lg:pt-10 lg:gap-8">
          <div className="flex gap-4 px-4 md:px-0">
            <div className="images flex flex-col lg:gap-4 gap-3 ">
              {selectedGame.platforms.map((platform, index) => (
                <div
                  className={`${
                    selectedPlatform === platform
                      ? "border  border-white   cursor-pointer  rounded-sm"
                      : "cursor-pointer"
                  }`}
                  key={index}
                  onClick={() => handleImageClick(platform)}
                >
                  {selectedPlatform && (
                    <BlurHashImage
                      src={platform.location}
                      alt={`${selectedGame.title} - ${platform.name}`}
                      className={"w-[55px]  lg:w-[60px] object-cover"}
                      hash={selectedPlatform?.hash}
                      height={[55, 70, 75]}
                      width={55}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="main-image ">
              <img
                src={selectedPlatform?.location || ""}
                alt={selectedGame.title}
                className="md:w-[100%] md:h-[100%]  rounded-sm h-full lg:w-full max-h-[420px]"
              />
            </div>
          </div>
          <div className=" px-4 py-6 md:py-0 md:pr-0 flex flex-col basis-[27%] md:basis-[50%] lg:basis-[27%] ">
            <h1 className="text-2xl font-bold mb-4 lg:mb-6 text-[#f5f5fa]">{`${
              selectedGame.title
            } for ${selectedPlatform?.name || ""} `}</h1>
            <div className="flex flex-col gap-2 mb-6 md:flex-row md:flex-wrap md:justify-between lg:mb-10">
              {[
                { label: "Genre", value: selectedGame.genre },
                {
                  label: "Price",
                  value: `${formatPrice(selectedPlatform?.price) || 0}`,
                },
                { label: "Year", value: selectedGame.releasedYear },
                {
                  label: "Stocks",
                  value: selectedPlatform
                    ? selectedPlatform.stocks - quantity
                    : 0,
                },
              ].map((item, index) => (
                <div className="flex gap-3" key={index}>
                  {item.label && (
                    <span className="text-gray-400 font-medium text-lg lg:text-xl">
                      {item.label}:
                    </span>
                  )}
                  <span className="text-lg font-semibold text-[#f5f5fa]">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center gap-4 mb-6 lg:mb-6">
              <div className="flex gap-3 items-center">
                <button
                  className="bg-[#010101] border border-[#e2e8f0] rounded-sm h-[45px] w-[45px] text-lg hover:border-white "
                  onClick={handleDecreaseQuantity}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  className="bg-[#010101] border border-[#e2e8f0] rounded-sm h-[45px] w-[45px] text-lg hover:border-white "
                  onClick={handleIncreaseQuantity}
                >
                  +
                </button>
              </div>

              <button
                className="bg-[#010101] w-full justify-center border border-[#e2e8f0] rounded-sm px-2 h-[45px]  text-sm flex items-center gap-2 font-semibold text-[#f5f5fa] hover:border-white "
                onClick={handleAddToCart}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
                Add to Cart
              </button>
            </div>

            <button className=" bg-[#010101] border  text-[#f5f5fa]  border-[#e2e8f0] w-full h-[45px] rounded-sm">
              Buy Now
            </button>
          </div>
        </div>
      )}
      {!selectedGame && (
        <div className="px-12 py-8 font-bold text-4xl">No game found.</div>
      )}
    </div>
  );
};

export default GameDetails;
