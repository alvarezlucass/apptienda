import { categoryTypes } from "../types/categoryTypes";

const { SELECT_CATEGORY } = categoryTypes;

export const selectCategory = (id) => ({
    type: SELECT_CATEGORY,
    categoryId: id,
})