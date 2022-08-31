import { combineReducers } from "redux";
import userReducer from "redux/reducers/user.reducer";
import categoryReducer from "redux/reducers/category.reducer";
import cartReducer from "redux/reducers/cart.reducer";

const rootReducer = combineReducers({
    cart: cartReducer,
    category: categoryReducer,
    user: userReducer,
});

export default rootReducer;