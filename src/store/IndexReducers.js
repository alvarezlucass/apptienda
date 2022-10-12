import { CategoryReducers, ProductsReducers } from './reducers/IndexReduce';
import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
    products: ProductsReducers,
    categories: CategoryReducers,
});

export default createStore(rootReducer);
