import { Link } from "react-router-dom";
import { genreImagesData } from "../data/localdata";
import BlurHashImage from "./BlurHashImage";

const GenresGrid = () => {
  return (
    <div className="px-4 py-8 ">
      <h1 className="font-revamped text-2xl tracking-widest text-center mb-6 lg:text-5xl lg:mb-10 md:text-start text-[#f5f5fa]">
        Genre
      </h1>
      <div className="grid grid-cols-2  gap-4 md:grid-cols-4 md:gap-6 lg:gap-8 ">
        {genreImagesData.map((item) => (
          <div className="relative cursor-pointer" key={item.id}>
            <Link to={`/games?genre=${item.genre}`}>
              <BlurHashImage
                src={item.location}
                alt={item.alt}
                className="object-cover rounded-sm "
                hash={item.hash}
                height={[155, 150, 290]}
              />
              <div
                className="absolute inset-0 "
                style={{
                  background:
                    "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8),  rgba(0, 0, 0, 0.8))",
                }}
              >
                <h1 className="font-revamped text-base text-[#f5f5fa] text-center absolute inset-0 flex items-center justify-center font-bold tracking-widest md:text-xl lg:text-3xl">
                  {item.genre}
                </h1>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenresGrid;
