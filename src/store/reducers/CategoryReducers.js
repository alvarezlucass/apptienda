import { categories } from '../../constants/data/CategoriesJson';
import { categoryTypes } from '../types/categoryTypes';

const { SELECT_CATEGORY } = categoryTypes;

const initialState ={
  categories: categories,  
  selected: null,
}
const CategoryReducers = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CATEGORY:
      const IndexCategory = state.categories.findIndex(
        (category) => category.id === action.categoryId
      );
      if( IndexCategory === -1) return state;
      return {
        ...state,
        selected: state.categories[IndexCategory]
      }
      default:
        return state;
  }
}

export default CategoryReducers;