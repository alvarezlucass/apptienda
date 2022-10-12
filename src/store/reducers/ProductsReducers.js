import { products } from '../../constants/data/ProductsJson';
import { productsTypes } from '../types/productsTypes';

const { SELECTED_PRODUCT, FILTERED_PRODUCTS } = productsTypes;

const initialState = {
    products: products,
    filteredProducts: [],
    selected: null,
}

const ProductsReducers = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_PRODUCT:
      return {
        ...state,
        selected: state.products.find(
          (product) => product.id === action.productId
        )
      }
      case FILTERED_PRODUCTS:
        return {
          ...state,
          filteredProducts: state.products.filter(
            (product) => product.categoryId === action.categoryId
          ),
        }
      default:
        return state;
  }
}

export default ProductsReducers;