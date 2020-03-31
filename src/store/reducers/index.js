import stepCounter from "./stepCounter";
import settings from "./settings";
import { combineReducers } from "redux";
import ailments from "./ailmentReducer";
import ingredients from "./ingredientReducer";
import nutrients from "./nutrientReducer";

const reducers = combineReducers({
  stepCounter,
  settings,
  ailments,
  ingredients,
  nutrients
});

export default reducers;
