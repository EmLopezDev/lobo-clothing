import { rootReducer } from "./root-reducer";
import { createLogger } from "redux-logger";
import { persistReducer, persistStore, type PersistConfig } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";

const logger = createLogger();

export type RootState = ReturnType<typeof rootReducer>;

const customWebStorage = {
    getItem: (key: string) => Promise.resolve(localStorage.getItem(key)),
    setItem: (key: string, value: string) => Promise.resolve(localStorage.setItem(key, value)),
    removeItem: (key: string) => Promise.resolve(localStorage.removeItem(key)),
};

type ExtendedPersistConfig = PersistConfig<RootState> & {
    whitelist: (keyof RootState)[];
};

const persistConfig: ExtendedPersistConfig = {
    key: "root",
    storage: customWebStorage,
    whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
        const middleware = getDefaultMiddleware({
            serializableCheck: false,
        });

        if (!import.meta.env.PROD) {
            middleware.push(logger);
        }

        return middleware;
    },
});

export const persistor = persistStore(store);
