import { CategoryReducers, ProductsReducers } from './reducers';
import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
    products: ProductsReducers,
    categories: CategoryReducers,
});

export default createStore(rootReducer);
