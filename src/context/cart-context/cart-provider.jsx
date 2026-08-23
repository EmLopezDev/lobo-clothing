import { useCallback, useMemo, useReducer } from "react";
import { CartContext } from "./cart-context";
import { CART_ACTION_TYPES } from "./cart-actions";

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
};

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

const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case CART_ACTION_TYPES.TOGGLE_CART:
            return {
                ...state,
                isCartOpen: !state.isCartOpen,
            };
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                cartItems: payload,
            };
        case CART_ACTION_TYPES.ADD_ITEM_TO_CART:
            return {
                ...state,
                cartItems: addOrUpdateCartItem(state.cartItems, payload),
            };
        case CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: removeCartItem(state.cartItems, payload),
            };
        case CART_ACTION_TYPES.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: clearCartItem(state.cartItems, payload),
            };
        default:
            throw new Error(`Unhandled type ${type} in cartReducer`);
    }
};

export const CartProvider = ({ children }) => {
    const [{ isCartOpen, cartItems }, dispatch] = useReducer(cartReducer, INITIAL_STATE);

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

    const setIsCartOpen = useCallback(() => {
        dispatch({ type: CART_ACTION_TYPES.TOGGLE_CART });
    }, []);

    const addItemToCart = useCallback((productToAdd) => {
        dispatch({ type: CART_ACTION_TYPES.ADD_ITEM_TO_CART, payload: productToAdd });
    }, []);

    const decrementItemInCart = useCallback((productToRemove) => {
        dispatch({ type: CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART, payload: productToRemove });
    }, []);

    const clearItemFromCart = useCallback((productToClear) => {
        dispatch({ type: CART_ACTION_TYPES.CLEAR_ITEM_FROM_CART, payload: productToClear });
    }, []);

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
