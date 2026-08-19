import { useState, useCallback } from "react";
import { CartContext } from "./cart-context";

const addCartItem = (cartItems, productToAdd) => {
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

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const cartCount = cartItems.reduce((acc, item) => {
        return acc + item.quantity;
    }, 0);

    const addItemToCart = useCallback(
        (productToAdd) => {
            setCartItems(addCartItem(cartItems, productToAdd));
        },
        [cartItems],
    );

    const value = {
        cartItems,
        cartCount,
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
