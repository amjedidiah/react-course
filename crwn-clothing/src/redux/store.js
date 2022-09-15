import { compose, createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import promise from "redux-promise-middleware";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "redux/reducers/root.reducer";
import { isProduction } from "utils/env.util";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "redux/sagas/root-saga";

// Saga-related
const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const middlewares = [!isProduction && logger, promise, thunk].filter(Boolean);
const middlewares = [!isProduction && logger, sagaMiddleware].filter(Boolean);
const composeEnhancer =
  (!isProduction && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

// Saga-related
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
