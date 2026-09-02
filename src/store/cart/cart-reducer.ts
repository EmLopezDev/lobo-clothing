import { createSlice } from "@reduxjs/toolkit";
import { addCartItem, removeCartItem, clearCartItem } from "./cart-helper";
import { type CategoryItem } from "../categories/categories-reducer";
import { type PayloadAction } from "@reduxjs/toolkit";

export type CartItem = {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    quantity: number;
};

type CartState = {
    readonly isCartOpen: boolean;
    readonly cartItems: CartItem[];
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
        addItemToCart: (state, action: PayloadAction<CategoryItem>) => {
            state.cartItems = addCartItem(state.cartItems, action.payload);
        },
        removeItemFromCart: (state, action: PayloadAction<CategoryItem>) => {
            state.cartItems = removeCartItem(state.cartItems, action.payload);
        },
        clearItemFromCart: (state, action: PayloadAction<CategoryItem>) => {
            state.cartItems = clearCartItem(state.cartItems, action.payload);
        },
    },
});

export const { setIsCartOpen, addItemToCart, removeItemFromCart, clearItemFromCart } =
    cartSlice.actions;

export const cartReducer = cartSlice.reducer;
