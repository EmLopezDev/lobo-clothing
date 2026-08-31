import { type Item } from "../../components/cart-item/cart-item";

export const addCartItem = (cartItems: Item[], productToAdd: Item) => {
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

export const removeCartItem = (cartItems: Item[], cartItemToRemove: Item) => {
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

export const clearCartItem = (cartItems: Item[], cartItemToClear: Item) =>
    cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
