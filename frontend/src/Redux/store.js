import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from "redux-thunk";
import { productsReducer } from './ProductsRedux/reducer';
import { authReducer } from './user/reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer=combineReducers({
    products : productsReducer,
    
})

export const store=createStore(rootReducer,composeEnhancer(applyMiddleware(thunk)))