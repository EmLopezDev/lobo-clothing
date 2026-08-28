// import { compose, createStore, applyMiddleware } from "redux";
import { rootReducer } from "./root-reducer";
import { createLogger } from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";

const logger = createLogger();

const customWebStorage = {
    getItem: (key) => Promise.resolve(localStorage.getItem(key)),
    setItem: (key, value) => Promise.resolve(localStorage.setItem(key, value)),
    removeItem: (key) => Promise.resolve(localStorage.removeItem(key)),
};

const persistConfig = {
    key: "root",
    storage: customWebStorage,
    blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [!import.meta.env.PROD && logger].filter(Boolean);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleWares),
});

export const persistor = persistStore(store);
