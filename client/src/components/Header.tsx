import { useState, useEffect, ChangeEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCartItems,
  decreaseItemQuantity,
  getTotals,
  increaseItemQuantity,
  removeItemToCart,
  setOpenCart,
} from "../features/cart/cartSlice";
import { RootState } from "../app/store";
import { subMenuData } from "../data/localdata";
import { formatPrice } from "../utils/formatPrice";
import { searchUtil } from "../utils/searchUtil";
import { SearchResults } from "../types/types";
import { Tooltip } from "@chakra-ui/react";

const Header = () => {
  const [hideNav, setHideNav] = useState(true);
  const dispatch = useDispatch();
  const cartState = useSelector((state: RootState) => state.cart.cartState);
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const totalAmount = useSelector(
    (state: RootState) => state.cart.cartTotalAmount
  );
  const [toggleNav, setToggleNav] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<number | null>(() => {
    // Initialize with the value from local storage, or null if not found
    const storedActiveSubMenu = localStorage.getItem("activeSubMenu");
    return storedActiveSubMenu ? JSON.parse(storedActiveSubMenu) : null;
  });
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isGamePage = location.pathname === "/game";
  const isProductPage = location.pathname === "/product";
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<SearchResults[]>([]);
  const [showSearchNav, setShowSearchNav] = useState(false);

  useEffect(() => {
    localStorage.setItem("activeSubMenu", JSON.stringify(activeSubMenu));
  }, [activeSubMenu]);

  useEffect(() => {
    let prevScrollPos = window.scrollY;
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setHideNav(currentScrollPos < prevScrollPos);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    dispatch(getTotals());
  }, [cartItems, dispatch]);

  const openCart = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );

    document.body.classList.add("menu-open");
  };

  const closeCart = () => {
    dispatch(
      setOpenCart({
        cartState: false,
      })
    );

    document.body.classList.remove("menu-open");
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    const results: SearchResults[] = searchUtil(searchQuery);
    setSearchResults(results);
  };

  return (
    <>
      {hideNav && (
        <nav
          className={`fixed flex top-0 w-full border border-b-[#373737] border-t-0 border-l-0 border-r-0 z-50    items-center justify-between navbg text-[#FAFAFA] px-4 h-[45px] md:px-12 ${
            cartState ? "hidden" : "block"
          }`}
        >
          <div className="flex items-center gap-3 lg:gap-8">
            <div
              onClick={() => setToggleNav((prev) => !prev)}
              className="lg:hidden"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 18H20M4 6H20H4ZM4 12H12H4Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <Link
              to={"/"}
              className="text-xl  font-revamped lg:text-2xl"
              onClick={() => {
                setActiveSubMenu(null);
              }}
            >
              GV
            </Link>

            <div className="hidden lg:flex items-center gap-6">
              {subMenuData.map((item) => (
                <Link
                  to={`/${item.link}`}
                  key={item.id}
                  onClick={() => {
                    setActiveSubMenu(item.id);
                  }}
                  className={
                    activeSubMenu === item.id
                      ? "active py-[.20rem]"
                      : "hover:text-[#f5f5fa] text-[#c4c4d0]"
                  }
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="  hidden">
            <form>
              {/* <input
         type="text"
         placeholder="Search a game..."
         className="bg-transparent border border-[#27272A] text-[#CACACF] outline-none  py-[0.6em] rounded-md text-sm"
       /> */}
            </form>
          </div>

          <div className="flex items-center gap-[.6em]">
            {isHomePage || isProductPage || isGamePage ? (
              <Tooltip label="Search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#c4c4d0"
                  className="w-6 h-6 cursor-pointer "
                  onClick={() => {
                    setShowSearchNav(true);
                    document.body.classList.add("menu-open");
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </Tooltip>
            ) : null}

            {/* cart icon */}
            <div className="relative cursor-pointer" onClick={openCart}>
              <Tooltip label="Shopping Cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#c4c4d0"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </Tooltip>
              <div className="absolute -top-1 -right-1 bg-white text-slate-900 shadow-slate-100 w-4 h-4 text-[0.70rem] leading-tight font-bold rounded-full flex items-center justify-center cursor-pointer ">
                {cartItems.length}
              </div>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#c4c4d0"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
        </nav>
      )}

      {showSearchNav && (
        <div className="search__container  ">
          <div
            className="overlay w-full h-full  fixed  z-[150]  "
            style={{
              background: "rgba(0,0,0,0.8)",
              backdropFilter: "blur(3px)", // Adjust the blur value as needed
            }}
            onClick={() => {
              setShowSearchNav(false);
              document.body.classList.remove("menu-open");
            }}
          ></div>

          <div
            className="search__content bg-[#1e293b] w-[90%]  rounded-lg h-[70%]  fixed  top-[40%] left-1/2  z-[200] md:top-[50%] md:w-[87%] lg:w-[60%]"
            style={{ transform: "translate(-50%,-50%)" }}
          >
            <form
              className="border-b border-b-[#e2e8f00d] mb-4"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="relative p-4">
                <input
                  type="text"
                  placeholder="Search something..."
                  className="bg-transparent pl-9 text-white outline-none text-base md:w-full pr-9"
                  onChange={(e) => handleSearch(e)}
                  value={searchQuery}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="#94A3B8"
                  className="lg:h-5 w-5 h-5  absolute left-[22px] lg:left-[20px] top-[17px] lg:top-[17px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </div>
            </form>
            {searchQuery.trim() === "" ? (
              <div className="flex items-center justify-center h-[70%] text-[#94a3b8]">
                <h1 className="md:text-xl ">No recent searches</h1>
              </div>
            ) : (
              <div className="text-white px-6 pb-4  overflow-y-auto h-[80%] flex flex-col gap-6">
                {searchResults.length === 0 ||
                searchResults.every((result) => result?.items?.length === 0) ? (
                  <div className="flex items-center flex-col justify-center h-[100%] px-4 w-[90%] mx-auto overflow-x-hidden">
                    <span className="text-lg text-center text-[#94a3b8] lg:text-xl">
                      No results for
                    </span>
                    <span className="text-[#e2e8f0] text-lg text-center lg:text-xl">
                      "{searchQuery}"
                    </span>
                  </div>
                ) : (
                  searchResults.map((result, index) => (
                    <div key={index}>
                      {result.items && result.items.length > 0 && (
                        <>
                          {result.category === "Games" && (
                            <h1 className="text-base text-[#e2e8f0] font-semibold mb-4">
                              {result.category}
                            </h1>
                          )}

                          {result.category === "Gaming Peripherals" && (
                            <h1 className="text-base text-[#e2e8f0] font-semibold mb-4">
                              {result.category}
                            </h1>
                          )}

                          <ul className="flex flex-col gap-3">
                            {result.items.map((item, itemIndex) => {
                              const link =
                                item.category === "Games"
                                  ? `/game?category=ps5&id=${item.id}`
                                  : `/product?category=router&id=${item.id}`;

                              return (
                                <Link
                                  to={link}
                                  key={itemIndex}
                                  className="bg-[#3341554d] py-3 px-3 rounded-md flex flex-col gap-2 md:py-4 hover:bg-[#4A5D754d] group "
                                  onClick={() => {
                                    setShowSearchNav(false);
                                    document.body.classList.remove("menu-open");
                                  }}
                                >
                                  {item.category === "Games" && (
                                    <div className="flex items-center gap-2">
                                      {item?.platforms?.map((item, index) => (
                                        <h2
                                          className="text-xs text-[#94a3b8] px-1 rounded-sm py-[0.20em] lg:py-[.40em] border border-[#94a3b8] group-hover:border-[#b0bdcf] group-hover:text-[#f5f5fa]"
                                          key={index}
                                        >
                                          {item.name}
                                        </h2>
                                      ))}
                                    </div>
                                  )}

                                  <div className="flex items-center justify-between">
                                    <h2 className="search-title text-sm text-[#94a3b8] opacity-1 md:text-base group-hover:text-[#f5f5fa]">
                                      {item.title}
                                    </h2>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth={1.5}
                                      stroke="currentColor"
                                      className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                                      />
                                    </svg>
                                  </div>
                                </Link>
                              );
                            })}
                          </ul>
                        </>
                      )}
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      )}

      <div
        className={`fixed bg-[#08080B]  z-[50] transition-all duration-300 h-screen  w-[65%] md:w-[35%]  left-0 top-0 opacity-100 scroll-hidden  border border-r-[#27272A] border-l-0 border-t-0 border-b-0  text-white
          ${
            toggleNav
              ? "opacity-100 visible translate-x-0"
              : "opacity-0 invisible -translate-x-full"
          }
         
       }`}
      >
        <div className="closebtn p-4 pt-3 md:pt-4 md:px-12 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7 cursor-pointer"
            onClick={() => setToggleNav((prev) => !prev)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>

        <div className=" px-6 pt-4 md:px-14  flex  flex-col justify-center  gap-6 w-full">
          {subMenuData.map((item) => (
            <Link
              to={`/${item.link}`}
              key={item.id}
              onClick={() => {
                setToggleNav((prev) => !prev);
              }}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>

      <div
        className={`fixed blur-effect-theme h-screen max-w-md w-full  right-0 top-0 opacity-100 scroll-hidden  md:border md:border-l-[#27272A] md:border-t-0 md:border-r-0 ${
          cartState
            ? "opacity-100 visible translate-x-0"
            : "opacity-0 invisible translate-x-full"
        } `}
      >
        <div className="sticky bg-[#08080B] top-0 left-0 w-full px-4  py-2 border border-b-[#27272A] border-t-0 border-l-0 border-r-0 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {/* close btn */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer"
                onClick={closeCart}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>

              <h1 className="font-bold">
                Your Cart{" "}
                <span className="font-normal text-xs">{`(${cartItems.length} Items)`}</span>
              </h1>
            </div>

            {cartItems.length > 0 && (
              <button
                className="text-white text-xs rounded-sm bg-red-500 px-2 py-1"
                onClick={() => {
                  dispatch(clearCartItems());
                }}
              >
                Clear Cart
              </button>
            )}
          </div>
        </div>

        {cartItems.length === 0 ? (
          <div className=" flex flex-col h-full  items-center justify-center gap-7 text-white">
            <h1 className="font-bold text-3xl w-[70%] text-center">
              Your Cart Is Empty
            </h1>

            <button
              className="text-base border border-[#27272A] px-3 py-1 rounded-sm flex items-center gap-2 "
              onClick={closeCart}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                />
              </svg>
              Back to GameVerse Store
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-6 px-4 w-full  text-white pt-6">
            {cartItems.map((item) => {
              const link = item.brand
                ? `/product?category=${item.category?.toLowerCase()}&id=${
                    item.id
                  }`
                : `/game?category=${item.name?.toLowerCase()}&id=${item.id}`;
              return (
                <Link
                  to={link}
                  className="img__info-container flex gap-3 w-full "
                  key={`${item.title}-${item.name}`}
                >
                  <img
                    src={
                      Array.isArray(item.images) && item.images.length > 0
                        ? item.images[0]
                        : item.location
                    }
                    alt={item.title}
                    className="w-[70px] rounded-sm object-cover"
                    loading="lazy"
                  />
                  <div className="info flex flex-col gap-2 w-full">
                    <div className="flex  justify-between">
                      <h1 className="text-xs header-cart-title ">{`${item.title}  `}</h1>
                      <h3 className="text-sm">
                        {formatPrice((item.price ?? 0) * (item.quantity ?? 0))}
                      </h3>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center  gap-2">
                        <button
                          className="bg-white text-sm w-[15px] h-[15px] text-black flex items-center justify-center rounded-sm"
                          onClick={() =>
                            dispatch(decreaseItemQuantity({ item: item }))
                          }
                        >
                          -
                        </button>
                        <span className="text-sm">{item.quantity}</span>
                        <button
                          className="bg-white text-sm w-[15px] h-[15px] text-black flex items-center justify-center rounded-sm"
                          onClick={() =>
                            dispatch(increaseItemQuantity({ item: item }))
                          }
                        >
                          +
                        </button>
                      </div>
                      <button
                        className="bg-red-500 text-sm w-[20px] h-[20px] text-black flex items-center justify-center rounded-sm"
                        onClick={() => {
                          dispatch(removeItemToCart({ item: item }));
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="#fff"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>

      <div
        className={`fixed bottom-0  right-0 w-full bg-[#08080B]  z-[90] h-[21vh] border border-t-[#27272A] border-b-0 border-l-0 max-w-md border-r-0 text-white px-4 py-2 transition-all duration-300 md:border md:border-l-[#27272A]  md:border-r-0 md:border-b-0 ${
          cartState
            ? "opacity-100 visible translate-x-0"
            : "opacity-0 invisible translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <h1>SUBTOTAL</h1>
          <span className="bg-white text-black px-2 rounded-sm text-sm">
            {formatPrice(totalAmount)}
          </span>
        </div>
        <p className="text-xs pb-3 pt-2 text-center">
          Taxes and Shipping will Calculate at Shipping
        </p>
        <button className="flex items-center justify-center w-full bg-white text-black py-1 rounded-sm text-sm">
          Check Out
        </button>
      </div>
    </>
  );
};

export default Header;
