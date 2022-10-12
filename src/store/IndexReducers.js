import { CategoryReducers, ProductsReducers } from './reducers/IndexReduce';
import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
    products: ProductsReducers,
    category: CategoryReducers,
});

export default createStore(rootReducer);
