import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { mediasReducer } from "./MediaRedux/reducer";
import { authReducer } from "./user/reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  medias: mediasReducer,
  auth: authReducer,
});

export const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk)),
);
