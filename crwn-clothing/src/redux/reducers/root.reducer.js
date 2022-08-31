import { combineReducers } from "redux";
import { userReducer } from "redux/reducers/user.reducer";
import categoryReducer from "redux/reducers/category.reducer";

const rootReducer = combineReducers({
    user: userReducer,
    category: categoryReducer,
});

export default rootReducer;