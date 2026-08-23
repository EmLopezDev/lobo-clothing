import { useState, useCallback, useMemo } from "react";
import { CartContext } from "./cart-context";

const addOrUpdateCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((item) => item.id === productToAdd.id);
    if (existingCartItem) {
        return cartItems.map((cartItem) => {
            return cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem;
        });
    } else {
        return [...cartItems, { ...productToAdd, quantity: 1 }];
    }
};

const removeCartItem = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find((item) => item.id === productToRemove.id);

    if (existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== existingCartItem.id);
    }

    return cartItems.map((cartItem) => {
        return cartItem.id === productToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem;
    });
};

const clearCartItem = (cartItems, productToClear) => {
    return cartItems.filter((cartItem) => cartItem.id !== productToClear.id);
};

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const cartCount = useMemo(
        () =>
            cartItems.reduce((acc, item) => {
                return acc + item.quantity;
            }, 0),
        [cartItems],
    );

    const cartTotal = useMemo(
        () =>
            cartItems.reduce((acc, item) => {
                return acc + item.price * item.quantity;
            }, 0),
        [cartItems],
    );

    const addItemToCart = useCallback(
        (productToAdd) => {
            setCartItems(addOrUpdateCartItem(cartItems, productToAdd));
        },
        [cartItems],
    );

    const decrementItemInCart = useCallback(
        (product) => {
            setCartItems(removeCartItem(cartItems, product));
        },
        [cartItems],
    );

    const clearItemFromCart = useCallback(
        (product) => {
            setCartItems(clearCartItem(cartItems, product));
        },
        [cartItems],
    );

    const value = useMemo(
        () => ({
            cartItems,
            cartCount,
            cartTotal,
            isCartOpen,
            setIsCartOpen,
            addItemToCart,
            decrementItemInCart,
            clearItemFromCart,
        }),
        [
            cartItems,
            cartCount,
            cartTotal,
            isCartOpen,
            setIsCartOpen,
            addItemToCart,
            decrementItemInCart,
            clearItemFromCart,
        ],
    );

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
