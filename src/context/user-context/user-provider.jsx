import { useCallback, useEffect, useReducer } from "react";
import { UserContext } from "./user-context";
import { USER_ACTION_TYPES } from "./user-actions";
import {
    onAuthStateChangedListener,
    createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";

const INITIAL_STATE = {
    currentUser: null,
};

const userReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload,
            };
        default:
            throw new Error(`Unhandled type ${type} in userReducer`);
    }
};

export const UserProvider = ({ children }) => {
    const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

    const setCurrentUser = useCallback((user) => {
        dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
    }, []);

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });
        return unsubscribe;
    }, [setCurrentUser]);

    const value = {
        currentUser,
        setCurrentUser,
    };
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
