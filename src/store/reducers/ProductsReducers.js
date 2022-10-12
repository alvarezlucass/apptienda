import { products } from '../../constants/data/ProductsJson';

const initialState = {
    products: products,
    filteredProducts: [],
    selected: null,
}

const ProductsReducers = (state = initialState, action) => {
  return state;
}

export default ProductsReducers;