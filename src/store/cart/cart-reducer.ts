import { createSlice } from "@reduxjs/toolkit";
import { addCartItem, removeCartItem, clearCartItem } from "./cart-helper";
import { type Item } from "../../components/cart-item/cart-item";
import { type PayloadAction } from "@reduxjs/toolkit";

type CartState = {
    isCartOpen: boolean;
    cartItems: Item[];
};

const CART_INITIAL_STATE: CartState = {
    isCartOpen: false,
    cartItems: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState: CART_INITIAL_STATE,
    reducers: {
        setIsCartOpen: (state, action: PayloadAction<boolean>) => {
            state.isCartOpen = action.payload;
        },
        addItemToCart: (state, action: PayloadAction<Item>) => {
            state.cartItems = addCartItem(state.cartItems, action.payload);
        },
        removeItemFromCart: (state, action: PayloadAction<Item>) => {
            state.cartItems = removeCartItem(state.cartItems, action.payload);
        },
        clearItemFromCart: (state, action: PayloadAction<Item>) => {
            state.cartItems = clearCartItem(state.cartItems, action.payload);
        },
    },
});

export const { setIsCartOpen, addItemToCart, removeItemFromCart, clearItemFromCart } =
    cartSlice.actions;

export const cartReducer = cartSlice.reducer;
