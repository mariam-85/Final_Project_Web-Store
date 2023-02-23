import { createStore, combineReducers, applyMiddleware } from 'redux'
import { categoriesReducer } from './reducers/categories';
import { productsReducer } from './reducers/products';
import { productReducer } from './reducers/product';
import { cartReducer } from './reducers/cart';
import { randomProductsReducer } from './reducers/random_products';
import { productsByCategoryReducer } from './reducers/prod_category';

import thunk from 'redux-thunk'


const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  product: productReducer,
  cart: cartReducer,
  random_products: randomProductsReducer,
  prodsByCategory: productsByCategoryReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));