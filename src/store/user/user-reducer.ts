import { createSlice } from "@reduxjs/toolkit";
import { type PayloadAction } from "@reduxjs/toolkit";
import { type User } from "firebase/auth";

type UserState = {
    readonly currentUser: User | null;
};

const USER_INITIAL_STATE: UserState = {
    currentUser: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState: USER_INITIAL_STATE,
    reducers: {
        setCurrentUser: (state, action: PayloadAction<User | null>) => {
            state.currentUser = action.payload;
        },
    },
});

export const { setCurrentUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
