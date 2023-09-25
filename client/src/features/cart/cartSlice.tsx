import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartState, Product } from "../../types/types";
import toast from "react-hot-toast";

function getCartFromLocalStorage(): Product[] {
  const cartJSON = localStorage.getItem("cart");
  if (cartJSON) {
    try {
      return JSON.parse(cartJSON);
    } catch (error) {
      // Handle JSON parsing error (e.g., invalid JSON)
      console.error("Error parsing cart data from localStorage:", error);
    }
  }
  return [];
}

const initialState: CartState = {
  cartState: false,
  cartItems: getCartFromLocalStorage(),
  cartTotalAmount: 0,
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setOpenCart: (state, action: PayloadAction<{ cartState: boolean }>) => {
      state.cartState = action.payload.cartState;
    },
    setCloseCart: (state, action: PayloadAction<{ cartState: boolean }>) => {
      state.cartState = action.payload.cartState;
    },
    addItemToCart: (
      state,
      action: PayloadAction<{ product: Product; quantity: number }>
    ) => {
      const { product, quantity } = action.payload;
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === product.id && item.name === product.name
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity =
          (state.cartItems[itemIndex].quantity ?? 0) + quantity;
        toast.success(`Item Quantity Increased`);
      } else {
        state.cartItems.push({ ...product, quantity: quantity ?? 0 });
        toast.success(`${product.title}  added to cart`);
      }

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    removeItemToCart: (state, action: PayloadAction<{ item: Product }>) => {
      const { item } = action.payload;
      const removeItem = state.cartItems.filter(
        (cartItem) => cartItem.id !== item.id || cartItem.name !== item.name
      );
      state.cartItems = removeItem;
      localStorage.setItem("cart", JSON.stringify(state.cartItems));

      toast.success(`${item.title}   Removed from Cart`);
    },
    increaseItemQuantity: (state, action: PayloadAction<{ item: Product }>) => {
      const { item } = action.payload;
      const updatedCartItems = state.cartItems.map((cartItem) => {
        if (cartItem.id === item.id && item.name === cartItem.name) {
          return { ...cartItem, quantity: (cartItem.quantity || 0) + 1 };
        }
        return cartItem;
      });

      state.cartItems = updatedCartItems;
      localStorage.setItem("cart", JSON.stringify(updatedCartItems));
    },

    decreaseItemQuantity: (state, action: PayloadAction<{ item: Product }>) => {
      const { item } = action.payload;
      const updatedCartItems = state.cartItems.map((cartItem) => {
        if (cartItem.id === item.id && item.name === cartItem.name) {
          if ((cartItem.quantity || 0) > 1) {
            return { ...cartItem, quantity: (cartItem.quantity || 0) - 1 };
          } else {
            // If the quantity is 1, remove the item from the cart
            toast.success(`${item.title}  for ${item.name} Removed from Cart`);
            return null;
          }
        }
        return cartItem;
      });

      // Filter out null entries (items with quantity 1) from the updatedCartItems array
      state.cartItems = updatedCartItems.filter(
        (item) => item !== null
      ) as Product[];
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    clearCartItems: (state) => {
      state.cartItems = [];
      toast.success("Cart Cleared");
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    getTotals: (state) => {
      let { totalAmount } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const totalPrice = (price ?? 0) * (quantity ?? 0);

          cartTotal.totalAmount += totalPrice;

          return cartTotal;
        },
        {
          totalAmount: 0,
          totalQuantity: 0,
        }
      );

      state.cartTotalAmount = totalAmount;
    },
  },
});

export const {
  setOpenCart,
  setCloseCart,
  addItemToCart,
  removeItemToCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCartItems,
  getTotals,
} = CartSlice.actions;
export default CartSlice.reducer;
