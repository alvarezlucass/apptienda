import { CartReducers, CategoryReducers, ProductsReducers } from './reducers/IndexReduce';
import { applyMiddleware, combineReducers, createStore } from "redux";

import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    products: ProductsReducers,
    category: CategoryReducers,
    cart: CartReducers,
});

export default createStore(rootReducer, applyMiddleware(thunk ));
