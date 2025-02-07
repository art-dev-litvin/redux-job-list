import { combineReducers } from "redux";
import { positionsReducer } from "./positions/positions-reducer";
import { filterReduser } from "./filters/filters-reducer";

export const rootReducer = combineReducers({
  positions: positionsReducer,
  filters: filterReduser,
});
