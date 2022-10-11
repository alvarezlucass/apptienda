import { CategoriesJson } from '../../constants/data/IndexData';
import React from 'react';

const initialState ={
  categories: CategoriesJson,  
  selected: null,
}
const CategoryReducers = (state = initialState, action) => {
  return state;
}

export default CategoryReducers;