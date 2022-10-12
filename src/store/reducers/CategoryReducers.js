import { CategoriesJson } from '../../constants/data/CategoriesJson';

const initialState ={
  categories: CategoriesJson,  
  selected: null,
}
const CategoryReducers = (state = initialState, action) => {
  return state;
}

export default CategoryReducers;