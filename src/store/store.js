import { configureStore } from "@reduxjs/toolkit";
// import { compose, createStore, applyMiddleware } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
  Boolean
);

// const composeEnhancer =
//   (process.env.NODE_ENV !== 'production' &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// const persistConfig = {
//   key: 'root',
//   storage,
//   blacklist: ['user'],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefualtMiddleware) => getDefualtMiddleware().concat(middleWares), //as redux toolkit include 3 middlewares on its own, we won't be able to use them if we give middleware manually - one of them is redux thunk (promise based).
});

// export const store = createStore(
//   persistedReducer,
//   undefined,
//   composedEnhancers
// );

// export const persistor = persistStore(store);
