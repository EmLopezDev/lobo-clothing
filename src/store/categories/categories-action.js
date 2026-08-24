import { createActions } from "../../utils/reducer/reducer";
import { CATEGORIES_ACTION_TYPES } from "./categories-types";

export const setCategories = (categories) =>
    createActions(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categories);
