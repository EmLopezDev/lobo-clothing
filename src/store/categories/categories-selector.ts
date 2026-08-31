import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../store";

const selectCategoriesReducer = (state: RootState) => state.categories;

export const selectCategories = createSelector(
    [selectCategoriesReducer],
    (categoriesReducer) => categoriesReducer.categories,
);

export const selectCategoriesArray = createSelector([selectCategories], (categories) => {
    return categories.reduce(
        (acc, { title, items }) => {
            acc[title.toLowerCase()] = items;
            return acc;
        },
        {} as Record<string, any>,
    );
});
