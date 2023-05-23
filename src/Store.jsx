import { combineReducers, configureStore } from "@reduxjs/toolkit";

import chartsReducer from "./modules/Charts/ChartsSlice";
import dropReducer from "./modules/dropdown/DropSlice";

const rootReducer = combineReducers({
  // All reducers of slices here...
  charts: chartsReducer,
  dropdown: dropReducer,
});

const Store = configureStore({
  reducer: rootReducer,
});

export default Store;
