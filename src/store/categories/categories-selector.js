import { createSelector } from "reselect";

const selectCategoriesReducer = (state) => state.categories;

export const selectCategories = createSelector(
    [selectCategoriesReducer],
    (categoriesReducer) => categoriesReducer.categories,
);

export const selectCategoriesArray = createSelector([selectCategories], (categories) => {
    return categories.reduce((acc, { title, items }) => {
        acc[title.toLowerCase()] = items;
        return acc;
    }, {});
});
