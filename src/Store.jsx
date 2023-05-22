import { combineReducers, configureStore } from "@reduxjs/toolkit";

import pieReducer from "./modules/Pie/PieSlice";

const rootReducer = combineReducers({
  // All reducers of slices here...
  pie: pieReducer,
});

const Store = configureStore({
  reducer: rootReducer,
});

export default Store;
