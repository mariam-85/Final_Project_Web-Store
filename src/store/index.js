import { createStore, combineReducers, applyMiddleware } from 'redux'
import { categoriesReducer } from './reducers/categories';
import { productsReducer } from './reducers/products';
import { productReducer } from './reducers/product';
import { cartReducer } from './reducers/cart';
import { randomProductsReducer } from './reducers/random_products';
import { productsByCategoryReducer } from './reducers/prod_category';
// import { categoryReducer } from './reducers/category.js';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import thunk from 'redux-thunk'


const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  product: productReducer,
  cart: cartReducer,
  random_products: randomProductsReducer,
  prodsByCategory: productsByCategoryReducer,
  // category: categoryReducer
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
}

const persistedReducer = persistReducer( persistConfig, rootReducer );

export const store = createStore(persistedReducer,applyMiddleware(thunk));

export const persistor = persistStore(store);