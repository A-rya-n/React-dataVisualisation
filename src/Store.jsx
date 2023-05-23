import { combineReducers, configureStore } from "@reduxjs/toolkit";

import pieReducer from "./modules/Pie/PieSlice";
import lineReducer from "./modules/Line/LineSlice";

const rootReducer = combineReducers({
  // All reducers of slices here...
  pie: pieReducer,
  line: lineReducer,
});

const Store = configureStore({
  reducer: rootReducer,
});

export default Store;
