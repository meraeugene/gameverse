import { useLocation, Link } from "react-router-dom";
import { gamingPeripheralsData } from "../data/localdata";
import { useEffect, useState } from "react";
import { Product } from "../types/types";
import { formatPrice } from "../utils/formatPrice";

const GamingPeripherals = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const brand = queryParams.get("brand");
  const category = queryParams.get("category");
  const [filteredData, setFilteredData] = useState<Product[]>([]);
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    if (brand || category) {
      const filtered = gamingPeripheralsData.filter(
        (data) =>
          data.brand.toLowerCase() === brand?.toLowerCase() ||
          data.category.toLowerCase() === category?.toLowerCase()
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(gamingPeripheralsData);
    }
  }, [brand, category]);

  const sortedPeripherals = filteredData.sort((a, b) => {
    switch (sortOrder) {
      case "bestSeller":
        return (b.sold || 0) - (a.sold || 0); // Sort by descending sold count
      case "highToLow":
        return (b.price || 0) - (a.price || 0); // Sort by descending price
      case "lowToHigh":
        return (a.price || 0) - (b.price || 0); // Sort by ascending price
      default:
        return 0;
    }
  });

  const filterBySearch = (data: Product[], query: string) => {
    // if search input field is empty return the data
    if (!query) {
      return data;
    }

    const lowercaseQuery = query.toLowerCase();
    return data.filter(
      (item) =>
        item.title?.toLowerCase().includes(lowercaseQuery) ||
        item.brand?.toLowerCase().includes(lowercaseQuery) ||
        item.category?.toLowerCase().includes(lowercaseQuery)
    );
  };

  const filteredAndSortedProducts = filterBySearch(
    sortedPeripherals,
    searchQuery
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Create a JSX element representing the title with common structure
  const title = (
    <div className="flex flex-col  gap-1 md:pb-10 lg:pb-10 pt-12 pb-7  md:flex-row md:items-center md:gap-4">
      <h1 className="font-revamped  text-2xl tracking-wider w-full md:w-auto md:text-4xl lg:text-center lg:text-5xl text-[#f5f5fa]">
        {/* Display 'brand' if it exists, otherwise display 'category' if it exists, or 'Gaming Peripherals' */}
        {brand ? `${brand} Peripherals` : category || "Gaming Peripherals"}
      </h1>
      <h1 className="text-lg text-gray-200">{filteredData.length} items</h1>
    </div>
  );

  const noSearchResultsMessage = (
    <div className=" text-gray-400 lg:text-2xl w-full">
      No search results found.
    </div>
  );

  return (
    <div className="text-white bg-[#08080B] px-6 pt-12 md:px-12 lg:pt-16">
      {/* Conditionally render the 'title' element based on 'brand' and 'category' */}
      {brand || category || (!brand && !category) ? title : null}
      <div className="flex items-center flex-wrap md:gap-4 md:flex-nowrap md:pb-2 lg:pb-12 pb-10 gap-5 ">
        <form
          className="w-full md:w-auto "
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="relative ">
            <input
              type="search"
              className="h-[40px] rounded-sm md:rounded-sm w-full lg:h-[45px] bg-transparent border px-3 lg:pl-9 pl-7 pr-2 lg:w-[350px] text-xs md:w-[280px] lg:text-sm outline-none "
              placeholder="Search peripherals, brands, categories"
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
            className=" bg-[#f5f5fa] text-[#17171f] 
            h-[40px] lg:h-[45px] md:rounded-sm text-md px-1 outline-none text-sm md:text-sm lg:text-base w-full md:w-auto "
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="" hidden>
              Filter by
            </option>
            <option value="bestSeller">Top Sales</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
        </div>
      </div>
      {filteredAndSortedProducts.length === 0 && noSearchResultsMessage}
      <div className="grid grid-cols-2 gap-6  pb-12 md:grid-cols-4 lg:grid-cols-5   lg:pb-20">
        {filteredAndSortedProducts.map((item) => (
          <div key={item.id}>
            <Link
              to={`/product?category=${item.category?.toLowerCase()}&id=${
                item.id
              }`}
            >
              <img
                src={item.images?.[0]}
                alt={`${item.title} `}
                className=" md:h-[200px] lg:h-[230px] w-full object-contain rounded-sm mb-3"
                loading="lazy"
              />
              <div className="flex flex-col gap-1">
                <div className="flex justify-between">
                  <span className="text-sm text-[#f5f5fa] leading-none font-medium block title ">{`${item.title} `}</span>

                  <span className="text-xs text-gray-400">
                    {item.brand?.toUpperCase()}
                  </span>
                </div>

                <div className="flex items-center gap-1 ">
                  <h2 className=" text-sm text-[#f5f5fa]">
                    {item.price && formatPrice(item.price)}
                  </h2>
                  <span className="text-xs text-gray-400">
                    {item.sold} sold
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

export default GamingPeripherals;
