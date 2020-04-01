import stepCounter from "./stepCounter";
import settings from "./settings";
import { combineReducers } from "redux";
import ailments from "./ailmentReducer";
import ingredients from "./ingredientReducer";
import nutrients from "./nutrientReducer";
import chooser from "./chooserReducer";
import foodChooser from "./foodChooserReducer";

const reducers = combineReducers({
  stepCounter,
  settings,
  ailments,
  ingredients,
  nutrients,
  chooser,
  foodChooser
});

export default reducers;
