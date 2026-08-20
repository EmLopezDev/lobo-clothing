import { createContext } from "react";

export const CartContext = createContext({
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
    isCartOpen: false,
    setIsCartOpen: () => {},
    addItemToCart: () => {},
    decrementItemInCart: () => {},
    clearItemFromCart: () => {},
});
