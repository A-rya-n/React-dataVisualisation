import { combineReducers, configureStore } from "@reduxjs/toolkit";

import pieReducer from "./modules/Pie/PieSlice";
import lineReducer from "./modules/Line/LineSlice";
import dropReducer from "./modules/dropdown/DropSlice";

const rootReducer = combineReducers({
  // All reducers of slices here...
  pie: pieReducer,
  line: lineReducer,
  dropdown: dropReducer,
});

const Store = configureStore({
  reducer: rootReducer,
});

export default Store;
