import { ProductsJson } from '../../constants/data/ProductsJson';

const initialState = {
    products: ProductsJson,
    filteredProducts: [],
    selected: null,
}

const ProductsReducers = (state = initialState, action) => {
  return state;
}

export default ProductsReducers;