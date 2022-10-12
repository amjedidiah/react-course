import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";

// Reducer imports
import userReducer from "redux/slices/user.slice";
import cartReducer from "redux/slices/cart.slice";
import categoryReducer from "redux/slices/category.slice";

// Saga import
import { rootSaga } from "redux/sagas/root-saga";

// Util imports
import { isProduction } from "utils/env.util";

// Saga-related
const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, combineReducers({
  user: userReducer,
  cart: cartReducer,
  category: categoryReducer,
}));

export const store = configureStore({
  reducer: persistedReducer,
  devTools: !isProduction,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware),
});

// Saga-related
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
