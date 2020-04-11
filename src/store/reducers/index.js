import stepCounter from "./stepCounter";
import settings from "./settings";
import { combineReducers } from "redux";
import ailments from "./ailmentReducer";
import ingredients from "./ingredientReducer";
import nutriChooser from "./nutriChooserReducer";
import nutrients from "./nutrientReducer";
import chooser from "./chooserReducer";
import foodChooser from "./foodChooserReducer";
import foodsByGroup from "./foodsByGroupReducer";

const reducers = combineReducers({
  stepCounter,
  settings,
  ailments,
  ingredients,
  nutriChooser,
  nutrients,
  chooser,
  foodChooser,
  foodsByGroup
});

export default reducers;
