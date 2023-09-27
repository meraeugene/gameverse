import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { gamingPeripheralsData } from "../data/localdata";
import { Product } from "../types/types";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../features/cart/cartSlice";
import { formatPrice } from "../utils/formatPrice";

const ProductDetails = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const idParams = queryParams.get("id");
  const [product, setProduct] = useState<Product | null>(null);
  const [mainImage, setMainImage] = useState("");
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    const singleProductData = gamingPeripheralsData.find(
      (product) => product.id === Number(idParams)
    );

    if (singleProductData) {
      setProduct(singleProductData);
      if (singleProductData.images && singleProductData.images.length > 0) {
        setMainImage(singleProductData.images[0]);
      }
    } else {
      setProduct(null);
    }
  }, []);

  const goBack = () => {
    window.history.back();
  };

  const handleImageClick = (index: number) => {
    if (product) {
      if (Array.isArray(product.images) && product.images[index]) {
        setMainImage(product.images[index]);
      }
    }
  };

  const handleDecreaseQuantity = () => {
    setQuantity((prev) => (prev <= 1 ? 1 : prev - 1));
  };

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleAddToCart = () => {
    if (product) {
      let images: string[] = [];

      if (Array.isArray(product.images) && product.images.length > 0) {
        images = [product.images[0]];
      }

      const productWithFirstImage = {
        ...product,
        images,
      };
      dispatch(addItemToCart({ product: productWithFirstImage, quantity }));
    }
  };

  return (
    <div className="text-white pt-12 pb-0 bg-[#111111]">
      <div className="pt-12 md:px-12">
        <button
          className="flex bg-white text-black w-[100px] items-center justify-center 
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

      {product ? (
        <div className="flex py-8 flex-col md:px-12 md:flex-row gap-3  lg:pb-36 lg:pt-10 lg:gap-8 ">
          <div className="flex gap-4 px-4 md:px-0">
            <div className=" flex flex-col gap-4 ">
              {product && product.images
                ? product.images.map((image, index) => (
                    <div
                      className={`${
                        product.images && product.images[index] === mainImage
                          ? "border-[2px] border-white p-1 rounded-sm cursor-pointer "
                          : "cursor-pointer rounded-sm"
                      }`}
                      key={`${product.id}-${index}`}
                    >
                      <img
                        src={image}
                        alt={product.title}
                        className="w-[55px]  lg:w-[60px]    "
                        onClick={() => handleImageClick(index)}
                        loading="lazy"
                      />
                    </div>
                  ))
                : null}
            </div>
            <div className="main-image object-cover">
              <img
                src={mainImage}
                alt="main image"
                className="md:w-[100%] md:h-[100%]  rounded-sm h-full lg:w-full max-h-[360px]"
                loading="lazy"
              />
            </div>
          </div>

          <div className=" px-4 py-6 md:py-0 md:pr-0  flex flex-col basis-[27%] md:basis-[50%] lg:basis-[27%] ">
            {product ? (
              <div>
                <h1 className="text-xl font-bold mb-4 lg:mb-6">
                  {product.title}
                </h1>
                <div className="flex flex-col gap-2 mb-6 md:flex-row md:flex-wrap md:justify-between lg:mb-10 w-[100%]">
                  {[
                    { label: "Brand", value: product.brand },
                    {
                      label: "Price",
                      value: product.price && formatPrice(product.price),
                    },
                    {
                      label: "Stocks",
                      value:
                        product.stocks !== undefined
                          ? product.stocks - quantity
                          : "N/A",
                    },
                  ].map((item, index) => (
                    <div className="flex gap-3" key={index}>
                      {item.label && (
                        <span className="text-gray-400 font-medium text-lg lg:text-xl">
                          {item.label}:
                        </span>
                      )}
                      <span className="text-lg font-semibold">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="flex justify-between items-center gap-4 mb-6 lg:mb-6">
              <div className="flex gap-3 items-center">
                <button
                  className="border bg-[#010101] border-[#e2e8f0] rounded-sm h-[45px] w-[45px] text-lg hover:border-white"
                  onClick={handleDecreaseQuantity}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  className="border  bg-[#010101] border-[#e2e8f0] rounded-sm h-[45px] w-[45px] text-lg hover:border-white "
                  onClick={handleIncreaseQuantity}
                >
                  +
                </button>
              </div>

              <button
                className="w-full bg-[#010101] justify-center border border-[#e2e8f0] rounded-sm px-2 h-[45px]  text-sm flex items-center gap-2 font-semibold hover:border-white "
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

            <button className=" bg-[#010101] border border-[#e2e8f0] h-[45px]  text-[#e2e8f0]  hover:border-white w-full py-2 rounded-sm">
              Buy Now
            </button>
          </div>
        </div>
      ) : (
        <div className="px-12 py-8 font-bold text-4xl">
          No peripherals found.
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
