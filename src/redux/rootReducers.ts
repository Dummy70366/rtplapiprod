import AdminSideBarReducer from "./slices/adminSidebarSlice";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./slices/userSlice";
import toastReducer from "./slices/toastSlice";
import currentPageReducer from "./slices/paginationSlice";


const persistConfig = {
  key: "RTPL",
  storage,
  whitelist: ["user", "translation", "changeDirection"],
};

const rootReducer = combineReducers({
  user: userReducer,
  AdminSideBar: AdminSideBarReducer,
  toast: toastReducer,
  currentPage: currentPageReducer,
  
});

export default persistReducer(persistConfig, rootReducer);
