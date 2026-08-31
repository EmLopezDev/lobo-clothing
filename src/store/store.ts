import { rootReducer } from "./root-reducer";
import { createLogger } from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";

const logger = createLogger();

const customWebStorage = {
    getItem: (key: string) => Promise.resolve(localStorage.getItem(key)),
    setItem: (key: string, value: string) => Promise.resolve(localStorage.setItem(key, value)),
    removeItem: (key: string) => Promise.resolve(localStorage.removeItem(key)),
};

const persistConfig = {
    key: "root",
    storage: customWebStorage,
    blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
        const middleware = getDefaultMiddleware();

        if (!import.meta.env.PROD) {
            middleware.push(logger);
        }

        return middleware;
    },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
