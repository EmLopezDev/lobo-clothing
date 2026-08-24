import { USER_ACTION_TYPES } from "./user-types";
import { createActions } from "../../utils/reducer/reducer";

export const setCurrentUser = (user) => {
    return createActions(USER_ACTION_TYPES.SET_CURRENT_USER, user);
};
