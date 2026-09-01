import { type CartItem } from "./cart-reducer";
import { type CategoryItem } from "../categories/categories-reducer";

export const addCartItem = (cartItems: CartItem[], productToAdd: CategoryItem) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem,
        );
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const removeCartItem = (cartItems: CartItem[], cartItemToRemove: CategoryItem) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

    if (existingCartItem?.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
    }

    return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem,
    );
};

export const clearCartItem = (cartItems: CartItem[], cartItemToClear: CategoryItem) =>
    cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
